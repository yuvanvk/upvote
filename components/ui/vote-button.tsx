import { ChevronDown, ChevronUp } from "lucide-react"

interface VoteButtonProps {
    type: "up" | "down",
    count: number,
    onClick: () => void
}

export const VoteButton = ({ type, count, onClick }: VoteButtonProps) => {

    const Icon = type === "up" ? ChevronUp : ChevronDown

    return <button onClick={onClick} className="flex flex-col space-y-2 border px-2 py-1 rounded-lg">
        <Icon />
        <div>{count}</div>
    </button>
}