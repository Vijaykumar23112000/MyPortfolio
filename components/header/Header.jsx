import Link from "next/link"
import { firstName } from "../data/Data"
import Navbar from "../navbar/Navbar"
import { Button } from "../ui/button"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">{firstName}<span className="text-accent">.</span></h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>
                <div className="xl:hidden">
                    Mobile Nav
                </div>
            </div>
        </header>
    )
}

export default Header
