import "@/app/globals.css"
import { ArrowDownToLine } from "lucide-react"
import Button from "@/components/ButtonIcon"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex bg-white md:flex-row justify-between items-center px-5 md:px-16 py-4 border-bottom-color-gray top-0 sticky w-full ">
            <Logo/>
            <Pages/>
            <CTAButtons/>
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
        <div className="hidden justify-between gap-x-10 flex-col md:flex-row md:flex">
            <a className="text-sm cursor-pointer font-gray-transition-blue" > How it works </a>
            <a className="text-sm cursor-pointer font-gray-transition-blue"> Features </a>
            <a className="text-sm cursor-pointer font-gray-transition-blue"> Privacy </a>
        </div>
    )
}

function CTAButtons() {
    return (
        <div className="flex justify-between gap-x-1">
            <a href="https://github.com/AndriQuinn/ai-code-review-bot">
                <Button 
                    icon={"/github.svg"}
                    label="GitHub"
                    onClick={() => console.log("Heelo")}
                    className="border-color-gray font-gray-transition-blue py-2 px-4"
                />
            </a>
            
            <Button 
                icon={ArrowDownToLine}
                label="Install App"
                onClick={() => console.log("Heelo")}
                className="hidden md:flex background-gradient-blue font-white py-2 px-4"
            />
        </div>
    )
}