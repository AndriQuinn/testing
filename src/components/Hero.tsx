import "@/app/globals.css"
import Image from "next/image"
import TextBox from "./TextBox"
import Button from "./ButtonIcon"
import { ArrowDownToLine, Shield, Dot } from "lucide-react"
import PageTransition from "./PageTransition"
import Link from "next/link"
import { robotoCondensed } from "./Fonts"


export default function Hero() {
    return (
        <PageTransition>
            <div className="grid grid-cols-1 gap-y-5 items-center gap-x-5 md:grid-cols-2 md:gap-y-0" >            
                <LeftBanner/>
                <RightBanner/>
            </div>
        </PageTransition>
    )
}

function LeftBanner() {
    return (
        <div className="grid  gap-y-5">
            <span className="uppercase font-semibold p-2 border-blue text-xs bg-light-blue font-blue rounded-full w-fit items-center flex flex-row">
                <Dot size={16}/>
                Powered by Gemini AI [Free Tier]
            </span>
            <h1 className={`font-semibold text-3xl text-center md:text-6xl md:text-left ${robotoCondensed.className}`}>
                Code reviews
                on every <span className="text-gradient-blue">  pull request. </span>
                Automatically.
            </h1>
            <TextBox 
                text={`AI Code Reviewer installs in one click and instantly posts structured feedback 
                    on every PR — catching bugs, security issues, and code clarity problems before your team does.`} 
                className="text-sm md:text-md leading-relaxed"
            />
            <CTAButtons className="justify-self-start"/>
            <div className="flex items-center">
                <Shield size={12} className="me-1 font-gray"/>
                <TextBox 
                    text={`Free to install · Open source · No code stored`} 
                    className="text-xs"
                />
            </div>
        </div>
    )
}

function RightBanner() {
    return (
        <div className=" flex justify-end">
            <Image src="/shorekeeper.webp" alt="shorekeeper" width={400} height={400}/>
        </div>
    )
}

function CTAButtons({className}: {className: string}) {
    return (
        <div className={`flex flex-col w-full items-center justify-center gap-y-3 md:w-auto md:flex-row md:justify-between md:gap-x-3 md:gap-y-0 ${className}`}>
            <Button 
                icon={ArrowDownToLine}
                label="Install on GitHub"
                onClick={() => console.log("Heelo")}
                className="background-gradient-blue font-white py-3 px-4 shadow-1xl transition hover:-translate-y-1 md:py-3 md:px-6 cyan-shadow"
            />
            <a href="https://github.com/AndriQuinn/ai-code-review-bot">
                <Button 
                    icon={"/github.svg"}
                    label="View Source"
                    onClick={() => console.log("Heelo")}
                    className="border-color-gray font-gray-transition-blue py-3 px-4 transition hover:-translate-y-1 md:py-3 md:px-6"
                />
            </a>
        </div>
    )
}