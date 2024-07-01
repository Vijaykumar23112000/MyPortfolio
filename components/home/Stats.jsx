"use client"

import CountUp from "react-countup"
import { statsData } from "../data/Data"

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {
                        statsData.map((item, i) =>
                            <div key={i} className="flex-1 flex gap4 items-center justify-center xl:justify-start">
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold dark:text-white/80 text-black/80"
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug dark:text-white/80 text-black/80 font-bold`}>{item.text}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Stats
