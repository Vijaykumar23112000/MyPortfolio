"use client"

import { motion } from "framer-motion"

export const CircleSvg = () => {
    return (
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
    )
}