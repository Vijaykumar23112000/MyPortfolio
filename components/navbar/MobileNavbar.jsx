"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'
import { firstName, navData } from "../data/Data"

const MobileNavbar = () => {

    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl ">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">{firstName}<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {
                        navData.map((item, i) =>
                            <Link
                                key={i}
                                href={item.path}
                                className={`${item.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                            >
                                {item.name}
                            </Link>
                        )
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar
