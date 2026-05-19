import "@/app/globals.css"
import { ArrowDownToLine } from "lucide-react"
import ButtonIcon from "./ButtonIcon"
import { robotoCondensed } from "./Fonts"

export default function CTASection() {
    return (
        <div className="flex flex-col items-center gap-y-6 background-gradient-blue rounded-2xl text-center p-10 md:text-auto md:p-20">
            <h2 className={`text-3xl md:text-5xl font-medium text-white font-semibold ${robotoCondensed.className}`}> Ready to ship better code? </h2>
            <p  className="font-white-alpha-8 text-xs md:text-lg"> Install in one click. Works on any repo. Free forever. </p>
            <ButtonIcon 
                icon={ArrowDownToLine}
                label="Install on GitHub"
                onClick={() => console.log("Heelo")}
                className="border-color-gray bg-white font-blue py-3 cyan-shadow px-4 transition hover:-translate-y-1 md:py-3 md:px-6"
            />
            <p className="font-white-alpha-8 text-xs md:text-lg"> Or <a className="underline cursor-pointer "> self-host your own instance </a> · MIT Licensed </p>
        </div>
    )
}
