"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { photoData } from "../data/Data"

const Photo = () => {
    return (
        <div className="w-full h-full relative flex justify-center items-center glow">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
                    className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-normal dark:mix-blend-lighten rounded-full overflow-hidden brightness-125 dark:brightness-100"
                    style={{ borderRadius: "50%" }}
                >
                    <Image
                        src={photoData.img}
                        priority
                        quality={100}
                        fill
                        alt="Myself"
                        className="object-cover"
                        style={{ width: "100%", height: "100%" }}
                    />
                </motion.div>
                <motion.svg
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-[1px] right-[-0.8px] fill-transparent"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#D2042D"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 25 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo
