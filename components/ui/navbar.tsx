'use client'
import { ArrowUpRight, ChevronsUpDown, Plus } from "lucide-react"
import ThemeToggleButton from "./theme-toggle-button"
import { Button } from "./button"

export const Navbar = () => {
    return <div>
        <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center text-3xl font-outfit gap-1 font-bold"><ChevronsUpDown/>Upvote</div>
            <div className="flex items-center space-x-3">
            <ThemeToggleButton variant="polygon"/>
            </div>
        </div>
    </div>
}