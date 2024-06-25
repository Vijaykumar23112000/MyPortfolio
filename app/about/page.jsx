"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { experienceData, educationData, skillsData, aboutData } from "@/components/data/Data"

const About = () => {
    return (
        <motion.div
            className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">


                        <TabsContent value="experience" className="w-full mb-10">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experienceData.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experienceData.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            experienceData.items.map((item, i) =>
                                                <li key={i} className="bg-[#232329] h-[120px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <h3 className="text-accent text-xl max-w-[265px] min-h-[60px] text-center lg:text-left">{item.content}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                                        <p className="text-white/60 ">{item.duration}</p>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        <TabsContent value="education" className="w-full mb-10">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{educationData.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{educationData.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {
                                            educationData.items.map((item, i) =>
                                                <li key={i} className="bg-[#232329] h-[270px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <h3 className="text-accent text-xl max-w-[265px] min-h-[60px] text-center lg:text-left">{item.institution}</h3>
                                                    <span>{item.degree}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                                        <p className="text-white/60 ">{item.duration}</p>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full mb-10">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skillsData.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skillsData.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                                    {
                                        skillsData.skillList.map((item, i) =>
                                            <li key={i}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {item.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </TabsContent>


                        <TabsContent value="about" className="w-full text-center xl:text-left mb-10">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{aboutData.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[750px] mx-auto xl:mx-0">
                                    {
                                        aboutData.info.map((item, i) =>
                                            <li key={i} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60 text-sm">{item.fieldName}</span>
                                                <span className="text-accent">:</span>
                                                <span>{item.fieldValue}</span>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default About