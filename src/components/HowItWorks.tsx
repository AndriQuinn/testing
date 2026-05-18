import "@/app/globals.css";
import TextBox from "./TextBox";

type StepProps = {
    noOfSteps: string
    label: string
    text: string
}

export default function HowItWorksSection() {
    return (
        <div className="flex flex-col items-center justify-center gap-x-5">         
            <Header/>
            <StepsSection/>
        </div>
    )
}

function Header() {
    return (
        <div className="flex flex-col justify-center gap-y-5  text-center">
            <h1 className="uppercase text-xs font-semibold font-blue"> How it works </h1>
            <h1 className=" text-xl md:text-5xl font-medium "> From PR open to review posted <br/> in seconds</h1>
            <TextBox text="No configuration. No manual triggers. Just open a PR."/>
            
        </div>
    )
}

function StepsSection() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-20">
             <StepsInfo noOfSteps="1" label="Install the App" text="One-click install on any GitHub repo you own. No API keys needed on your end."/>
             <StepsInfo noOfSteps="2" label="Open a PR" text="GitHub fires a webhook the moment a pull request is opened, updated, or marked ready."/>
             <StepsInfo noOfSteps="3" label="Diff is analyzed" text="The code diff is securely forwarded to Gemini AI for review. Nothing is stored."/>
             <StepsInfo noOfSteps="4" label="Review posted" text="A structured review appears on your PR — bugs, suggestions, and a summary."/>
        </div>
    )
}


function StepsInfo({ noOfSteps, label, text} : StepProps) {
    return(
        <div className="flex flex-col items-center justify-center gap-y-4 my-10">
            <div className="flex justify-center items-center border rounded-full border-gray-no-transition p-6 w-10 h-10 font-gray">
                {noOfSteps}
            </div>
            <h2 className="text-sm font-semibold"> {label} </h2>
            <p className="text-xs font-gray text-center"> {text} </p>
        </div>
    )
}
