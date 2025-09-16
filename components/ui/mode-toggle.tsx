"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes";
import { HalfShadowedIcon } from "./half-shadowed-icon";
import { MoonIcon } from "./moon";
import { SunIcon } from "./sun";

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, [])

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    if (!mounted) return null;

    return <button onClick={handleClick} className="justify-center flex cursor-pointer">
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
}