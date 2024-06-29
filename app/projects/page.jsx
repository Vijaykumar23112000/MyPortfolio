"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import Link from "next/link"
import Image from "next/image"
import { projectsData } from "@/components/data/Data"
import SliderButtons from "@/components/swiper/SliderButtons"

const Projects = () => {

    const [project, setProject] = useState(projectsData[0])

    const handleSlideChange = swiper => setProject(projectsData[swiper.activeIndex])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 xl:mb-[5rem]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">

                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="flex items-center gap-4 justify-between">
                                <span className="text-8xl leading-none font-extrabold text-primary dark:text-transparent text-outline">{project.num}</span>
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/50 dark:bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="dark:text-white text-light text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="dark:text-white/80 text-black/80">Github Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none dark:text-white text-black/80 group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} Project
                            </h2>
                            <p className="dark:text-white/60 text-black/80">
                                {project.description}
                            </p>
                            <div className="border border-black/50 dark:border-white/20"></div>
                            <ul className="flex gap-2 flex-wrap">
                                {
                                    project.stack.map((item, i) =>
                                        <li key={i} className="text-accent font-bold">
                                            {item.name}
                                            {i !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projectsData.map((item, i) =>
                                    <SwiperSlide
                                        key={i}
                                        className="w-full cursor-grab"
                                    >
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-2xl">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-2xl"></div>
                                            <div className="relative w-full h-full rounded-2xl">
                                                <Image
                                                    src={item.image}
                                                    fill
                                                    className="object-cover rounded-2xl"
                                                    alt={item.description}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                            <SliderButtons
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                                iconStyles=""
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
