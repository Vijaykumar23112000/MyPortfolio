"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { aboutMeData } from "@/components/data/Data"

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
                                <h3 className="text-4xl font-bold dark:text-white/80 text-black/80">{aboutMeData.experienceData.title}</h3>
                                <p className="max-w-[600px] dark:text-white/60 text-black/80 mx-auto xl:mx-0">{aboutMeData.experienceData.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            aboutMeData.experienceData.items.map((item, i) =>
                                                <li key={i} className="dark:bg-[#232329] bg-light_card_bg h-[120px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <h3 className="text-accent text-xl max-w-[265px] min-h-[60px] text-center lg:text-left font-bold">{item.content}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                                        <p className="dark:text-white/60 text-black/80 font-bold">{item.duration}</p>
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
                                <h3 className="text-4xl font-bold dark:text-white/80 text-black/80">{aboutMeData.educationData.title}</h3>
                                <p className="max-w-[600px] dark:text-white/60 text-black/80 mx-auto xl:mx-0">{aboutMeData.educationData.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {
                                            aboutMeData.educationData.items.map((item, i) =>
                                                <li key={i} className="font-bold dark:bg-[#232329] bg-light_card_bg h-[270px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <h3 className="text-accent text-xl max-w-[265px] min-h-[60px] text-center lg:text-left">{item.institution}</h3>
                                                    <span className="dark:text-white/60 text-black/80">{item.degree}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                                        <p className="dark:text-white/60 text-black/80">{item.duration}</p>
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
                                    <h3 className="text-4xl font-bold dark:text-white/80 text-black/80">{aboutMeData.skillsData.title}</h3>
                                    <p className="max-w-[600px] dark:text-white/60 text-black/80 mx-auto xl:mx-0">{aboutMeData.skillsData.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                                    {
                                        aboutMeData.skillsData.skillList.map((item, i) =>
                                            <li key={i}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] dark:bg-[#232329] bg-light_card_bg rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl dark:text-white/60 text-black/80 group-hover:text-accent transition-all duration-300">
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
                                <h3 className="text-4xl dark:text-white/80 text-black/80 font-bold">{aboutMeData.aboutData.title}</h3>
                                <p className="max-w-[600px] dark:text-white/60 text-black/80 mx-auto xl:mx-0">{aboutMeData.aboutData.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[750px] mx-auto xl:mx-0">
                                    {
                                        aboutMeData.aboutData.info.map((item, i) =>
                                            <li key={i} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="dark:text-white/60 text-black/80 text-sm font-semibold">{item.fieldName}</span>
                                                <span className="text-accent">:</span>
                                                <span className="dark:text-white/60 text-black/80 font-bold">{item.fieldValue}</span>
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