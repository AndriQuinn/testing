import "@/app/globals.css";
import TextBox from "./TextBox";
import { robotoCondensed } from "./Fonts";

type FeatureBoxProps = {
    label: string
    text: string
}

export default function StatCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-y-5 md:gap-y-0 md:gap-x-5">
            <StatBox label={"AES-256"} text={"Encrypted token cache"}/>
            <StatBox label={"100%"} text={"Free to use · Open source"}/>
            <StatBox label={"0"} text={"Lines of your code stored"}/>
        </div>
    )
}

function StatBox({ label, text }: FeatureBoxProps) {
    return (
        <div className="flex flex-col p-6 bg-white border-gray-no-transition rounded-xl gap-y-2 items-center"> 
            <h2 className={`text-xl font-semibold md:text-3xl text-gradient-blue ${robotoCondensed.className}`}> {label} </h2>
            <TextBox text={text} className="text-xs font-gray leading-relaxed"/>
        </div>
    )
}