"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { contactMeData } from "../data/Data"
import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import AnimatedMessage from "./AnimatedMessage"
import { motion, useInView } from "framer-motion"
import { ContactSvg } from "../svg/ContactSvg"

const ContactForm = () => {

    const { IDLE, SUCCESS, FAILED } = contactMeData.statusData

    const form = useRef();
    const [status, setStatus] = useState(IDLE);
    const ref = useRef()
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY
    const isInView = useInView(ref, {
        margin: "-100px"
    })

    const handleSubmit = e => {
        e.preventDefault()
        setStatus(IDLE)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
            .then(
                () => {
                    setStatus(SUCCESS)
                    form.current.reset();
                },
                error => {
                    setStatus(FAILED)
                    console.log(error)
                }
            )
        form.current.reset();
    }

    const handleReset = e => {
        e.preventDefault()
        form.current.reset()
        setStatus(IDLE);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(IDLE)
        }, 5000);
        return () => clearTimeout(timer);
    }, [status]);

    return (
        <div ref={ref} className="xl:w-[54%] order-2 xl:order-none formContainer relative">
            <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ delay: 3, duration: 1 }}
                className="svg__container stroke-accent absolute mx-auto w-full h-full flex justify-center items-center"
            >
                <div className="">
                    <ContactSvg isInView={isInView} />
                </div>
            </motion.div>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="flex flex-col gap-6 p-10 bg-light_card_bg dark:bg-[#27272c] rounded-xl" onSubmit={handleSubmit} ref={form}
            >
                <h3 className="text-4xl text-accent">
                    {contactMeData.contactData.title}
                </h3>
                <p className="dark:text-white/60 text-black/80">
                    {contactMeData.contactData.description}
                </p>
                <div className="grid grid-cols-1 gap-6">
                    {
                        contactMeData.contactData.input.map((item, i) =>
                            <Input key={i} type={item.type} placeholder={item.placeHolder} name={item.name} />
                        )
                    }
                </div>
                <Textarea
                    className="h-[200px]"
                    placeholder={contactMeData.contactData.textArea.placeHolder}
                    name={contactMeData.contactData.textArea.name}
                />
                <div className="flex gap-5 items-center">
                    <Button size="md" className="max-w-40">Send</Button>
                    <Button size="md" onClick={handleReset} className="max-w-40">Reset</Button>
                    {status === SUCCESS && <AnimatedMessage sequence={["Sent Successfully", 1000]} />}
                    {status === FAILED && <AnimatedMessage sequence={["Sent Failed", 1000]} />}
                </div>
            </motion.form>
        </div>
    )
}

export default ContactForm
