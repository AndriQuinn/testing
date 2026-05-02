import { createHmac } from 'crypto'

export async function POST(req: Request) {

    const rawBody = await req.text()
    const signature = req.headers.get('x-hub-signature-256')
    const event = req.headers?.get('x-github-event')

    const error = checkRequest(event, signature, rawBody)
    if (error) return error

    const payload = JSON.parse(rawBody);
    const action = payload.action;

    if (action != 'opened') return new Response('Event Ignored', { status: 200 })
    
    const diff = payload.pull_request.diff_url
    const diffResult = await fetchDiff(diff)

    if (!diffResult.ok) return new Response('Something wrong happened', { status: 401 })    

    const diffText = diffResult.content
    const reviewResult = await aiReview(diffText)

    if (!reviewResult.ok) return new Response('Something wrong happened', { status: 401 })    

    return new Response(JSON.stringify({
        messsage: 'OK',
        review: reviewResult.content
    }), { status: 200  })
}

// --- Functions ---

// --- Check Validity ---
function checkRequest(event: string | null, signature: string | null, rawBody: string) {

    const secret = process.env.GITHUB_WEBHOOK_SECRET!
    const mySignature = 'sha256=' + createHmac('sha256', secret)
        .update(rawBody)
        .digest('hex')
    
    if (!signature) return  new Response('Missing Signature', { status: 401 })
    if (signature != mySignature) return  new Response('Unauthorized', { status: 401 })
    if (event != 'pull_request') return new Response('Event Ignored', { status: 200 });   
}

// --- Get AI Review ---
async function aiReview(diff: string) {

    const MODELS = [
        "gemini-3.1-flash-lite-preview", 
        "gemini-2.5-flash-lite",      
        "gemini-3-flash-preview",     
        "gemini-2.5-flash"
    ]

    for (const model of MODELS) {

        const reviewContent = await fetchGeminiApi(model, diff)

        if (reviewContent.status == 401 ) return { status: reviewContent.status, content: null };
        if (!reviewContent.ok)  continue

        const reviewText = reviewContent.content

        return { ok: reviewContent.ok, status: reviewContent.status, content: reviewText }
    }

    return { status: 404, content: 'All Gemini models are currently unavailable, Please try again later' }
}

// --- Fetch Gemini API ---
async function fetchGeminiApi(model: string, diff: string) {

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `
                        You are a code reviewer. 
                        Review this pull request diff and give concise, 
                        actionable feedback. Focus on bugs, security issues, 
                        and code clarity. Diff: 
                        
                        ${diff}

                        Rules:
                        - be direct, natural, easy to understand
                    `
                    }]
                }]
            })
        }
        
    )

    if (!response.ok) return { status: response.status, content: null }

    const data = await response.json()
    const review = data.candidates[0].content.parts[0].text 

    return { ok: response.ok , status: response.status, content: review }
}

// --- Fetch Diff URL ---
async function fetchDiff(diff: string) {

    const response = await fetch(diff, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3.diff'
        }
    })

    if (response.status == 401) return { ok: response.ok, status: response.status, content: 'Unauthorized' }
    if (!response.ok) return { ok: response.ok, status: response.status, content: null }

    const data = await response.text()

    return { ok: response.ok, status: response.status, content: data }
}