import { ChevronDown, ChevronUp } from "lucide-react"

interface VoteButtonProps {
    type: "up" | "down",
    count: number,
    onClick: () => void,
    isActive: boolean;
}

export const VoteButton = ({ type, count, onClick, isActive }: VoteButtonProps) => {

    const Icon = type === "up" ? ChevronUp : ChevronDown
    const isActiveForUp = isActive ? "border-green-500 text-green-500" : "";
    const isActiveForDown = isActive ? "border-red-500 text-red-500" : "";

    const finalStyle = type === "up" ? isActiveForUp : isActiveForDown

    return <button onClick={onClick} className={`flex flex-col space-y-0.5 border-2 px-4 py-1 rounded-xl ${finalStyle}`}>
        <Icon />
        <div>{count}</div>
    </button>
}