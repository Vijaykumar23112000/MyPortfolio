"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { servicesData } from "@/components/data/Data"
import { motion } from "framer-motion"

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
                >
                    {
                        servicesData.map((item, i) =>
                            <div key={i} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="dark:text-white/80 text-black/80 text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500">
                                        {item.num}
                                    </div>
                                    <Link className="w-[70px] h-[70px] rounded-full bg-light_card_bg/20 dark:bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45" href={item.href}>
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                <h2 className="font-bold text-[42px] leading-none dark:text-white/80 text-black/80 group-hover:text-accent transition-all duration-500">{item.title}</h2>
                                <p className="dark:text-white/60 text-black/80">{item.description}</p>
                                <div className="item-description border-b dark:border-white/70 border-black/80 w-full"></div>
                            </div>
                        )
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Services
