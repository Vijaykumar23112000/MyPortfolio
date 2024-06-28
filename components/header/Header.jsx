import Link from "next/link"
import Navbar from "../navbar/Navbar"
import { Button } from "../ui/button"
import MobileNavbar from "../navbar/MobileNavbar"
import DarkMode from "../darkMode/DarkMode";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-black dark:text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold dark:text-white/80 text-black/80">Portfolio<span className="text-accent">.</span></h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                    <div className="">
                        <DarkMode />
                    </div>
                </div>
                <div className="xl:hidden flex justify-center items-center gap-4">
                    <div className="">
                        <DarkMode />
                    </div>
                    <MobileNavbar />
                </div>
            </div>
        </header>
    )
}

export default Header
