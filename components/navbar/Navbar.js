"use client"

import Link from "next/link"
import { navData } from "../data/Data"
import { usePathname } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname()

    return (
        <nav className="flex gap-8">
            {
                navData.map((item, i) =>
                    <Link
                        className={`${item.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                        key={i}
                        href={item.path}
                    >
                        {item.name}
                    </Link>
                )
            }
        </nav>
    )
}

export default Navbar
