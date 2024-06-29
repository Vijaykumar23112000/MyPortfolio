"use client"

import React, { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { Button } from "../ui/button"

const DarkMode = () => {

    const [theme, setTheme] = useState(() => typeof window !== ("undefined") ? localStorage.getItem("theme") || "light" : "light")
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [theme])

    const handleToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    if (!mounted) {
        return null;
    }

    return (
        <Button onClick={handleToggleTheme}>
            <div>
                {theme === 'light' ? <FiMoon /> : <FiSun />}
            </div>
        </Button>
    )

}

export default DarkMode
