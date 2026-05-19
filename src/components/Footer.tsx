import "@/app/globals.css";
import TextBox from "./TextBox";

export default function Footer() {
    return (
        <div className="flex flex-col bg-white justify-between items-center gap-y-5 p-5 border-top-color-gray md:flex-row md:px-16 md:py-8 md:gap-y-0">
            <Logo/>
            <Pages/>
            <TextBox text={"Built with Next.js · Gemini · Vercel"} className="text-xs"/>
        </div>
    )
}

function Logo() {
    return (
        <div>
            <h1 className="font-semibold text-xl text-gradient-blue"> Shoa </h1>
        </div>
    )
}

function Pages() {
    return (
        <div className="flex flex-col justify-between text-center gap-x-10 gap-y-3 flex-col md:flex-row md:text-auto md:gap-y-0">
            <a className="text-sm cursor-pointer font-gray-transition-blue text-xs" > GitHub </a>
            <a className="text-sm cursor-pointer font-gray-transition-blue text-xs"> Privacy Policy </a>
            <a className="text-sm cursor-pointer font-gray-transition-blue text-xs"> MIT License </a>
        </div>
    )
}

