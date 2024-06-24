import Link from "next/link"
import { socials } from "../data/Data"

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, i) =>
                    <Link
                        key={i}
                        href={item.path}
                        target="_blank"
                        className={iconStyles}
                    >
                        {item.icon}
                    </Link>
                )
            }
        </div>
    )
}

export default Socials
