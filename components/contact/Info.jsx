"use client"

import { contactInfoData } from "../data/Data"

const Info = () => {
    return (
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
                {
                    contactInfoData.map((item, i) =>
                        <li key={i} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                <div className="text-[20px]">{item.icon}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-white/60">{item.title}</p>
                                <h3 className="text-xl">{item.content}</h3>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Info
