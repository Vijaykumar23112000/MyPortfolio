"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { photoData } from "../data/Data"
import { CircleSvg } from "../svg/CircleSvg"

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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>
                <CircleSvg />
            </motion.div>
        </div>
    )
}

export default Photo
