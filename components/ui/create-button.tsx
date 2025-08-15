"use client"
import { Plus } from "lucide-react"
import { Button } from "./button"
import { useRouter } from "next/navigation"

export const CreateButton = () => {
    const router = useRouter();

    return <Button onClick={() => router.push("/create")} className="w-10 h-10 rounded-full bg-green-500  flex items-center justify-center cursor-pointer">
        <Plus />
    </Button>
}