import { Plus } from "lucide-react"
import { Button } from "./button"

export const CreateButton = () => {
    return <Button className="w-10 h-10 rounded-full bg-green-500  flex items-center justify-center cursor-pointer">
        <Plus />
    </Button>
}