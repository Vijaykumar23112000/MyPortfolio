"use client"

import Image from "next/image"
import { notFoundData } from "@/components/data/Data"
import { motion } from "framer-motion"

const NotFoundPage = () => {
    return (
        <div className="container mx-auto h-[80vh] w-full">
            <div className="flex items-center justify-center gap-10 md:flex-row flex-col">
                <div className="h-[500px] w-[500px] relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
                    >
                        <Image
                            src={notFoundData.image}
                            alt="Not Found"
                            className="object-cover glow"
                            fill
                        />
                    </motion.div>
                </div>
                <div className="h-full mb-10">
                    <p className="text-accent font-bold text-4xl">{notFoundData.title}</p>
                    <p className="text-black/80 dark:text-white/60">{notFoundData.content}</p>
                    <p className="text-black/80 dark:text-white/60">{notFoundData.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage