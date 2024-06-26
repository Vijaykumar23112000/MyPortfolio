"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/contact/ContactForm"
import Info from "@/components/contact/Info"

const page = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.3, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <ContactForm />
                    <Info />
                </div>
            </div>
        </motion.div>
    )
}

export default page
