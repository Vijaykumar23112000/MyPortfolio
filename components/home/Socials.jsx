import Link from "next/link"
import { socialsData } from "../data/Data"

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socialsData.map((item, i) =>
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
