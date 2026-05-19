import "@/app/globals.css";
import TextBox from "./TextBox";
import { Search, Activity, Shield, LayoutGrid, Form, Code } from "lucide-react";
import { LucideIcon } from "lucide-react"
import Image from "next/image"

type FeatureBoxProps = {
    icon: LucideIcon | string
    label: string
    text: string
}

export default function FeaturesSection() {
    return (
        <div className="flex flex-col justify-center gap-y-10">         
            <Header/>
            <FeaturesList/>
        </div>
    )
}

function Header() {
    return (
        <div className="flex flex-col justify-center gap-y-4  text-center">
            <h1 className="uppercase text-xs font-semibold font-blue"> Features </h1>
            <h1 className=" text-xl md:text-4xl font-medium "> Everything you need,<br/> nothing you don't</h1>
        </div>
    )
}

function FeaturesList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureBox icon={Search} label="Bug detection" text="Catches logic errors, unhandled promises, missing null checks, and common security issues in the diff."/>
            <FeatureBox icon={Activity} label="Smart rate limiting" text="Per-PR rate limiting via Upstash Redis ensures fair usage and prevents runaway API costs."/>
            <FeatureBox icon={Shield} label="Secure by design" text="Webhook signature verification, encrypted token caching, and zero persistent storage of your code."/>
            <FeatureBox icon={LayoutGrid} label="Draft PR aware" text="Automatically skips draft PRs and only reviews when you're actually ready — no noisy feedback mid-work."/>
            <FeatureBox icon={Form} label="Structured output" text="Every review follows the same format — Summary, Issues, and Suggestions — so feedback is always scannable."/>
            <FeatureBox icon={Code} label="Open source" text="Fully open source under MIT. Audit the code, self-host your own instance, or fork and extend it freely."/>
        </div>
    )
}

function FeatureBox({ icon: Icon, label, text }: FeatureBoxProps) {
    return (
        <div className="flex flex-col p-6 bg-white border-gray-no-transition cyan-shadow rounded-xl gap-y-4 transition hover:-translate-y-1"> 
            <div className="p-2 rounded-lg bg-light-blue border-blue w-fit ">  
                {typeof Icon === "string" ? 
                    <Image src={Icon} alt={label} width={16} height={16} className="text-gradient-blue"/>
                    :
                    <Icon size={16} className="font-blue"/>
                }
            </div>
            <h2 className="text-xs text-left font-semibold"> {label} </h2>
            <p className="text-xs font-gray leading-relaxed"> {text} </p>
        </div>
    )
}