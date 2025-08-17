"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes";
import { MoonIcon } from "./moon";
import { SunMediumIcon } from "./sun-medium";

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

    return <button onClick={handleClick}>
        {theme === "light" ? <MoonIcon /> : <SunMediumIcon />}
    </button>
}