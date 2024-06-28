"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { contactData, statusData } from "../data/Data"
import emailjs from '@emailjs/browser';
import { emailJsData } from "../data/Data"
import React, { useEffect, useRef, useState } from 'react';
import AnimatedMessage from "./AnimatedMessage"

const ContactForm = () => {

    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = emailJsData
    const { IDLE, SUCCESS, FAILED } = statusData

    const form = useRef();
    const [status, setStatus] = useState(IDLE);

    const handleSubmit = e => {
        e.preventDefault()
        setStatus(IDLE)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
            .then(
                () => {
                    setStatus(SUCCESS)
                    form.current.reset();
                },
                error => setStatus(FAILED)
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
        <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit} ref={form}>
                <h3 className="text-4xl text-accent">
                    {contactData.title}
                </h3>
                <p className="text-white/60">
                    {contactData.description}
                </p>
                <div className="grid grid-cols-1 gap-6">
                    {
                        contactData.input.map((item, i) =>
                            <Input key={i} type={item.type} placeholder={item.placeHolder} name={item.name} />
                        )
                    }
                </div>
                <Textarea
                    className="h-[200px]"
                    placeholder={contactData.textArea.text}
                    name={contactData.textArea.name}
                />
                <div className="flex gap-5 items-center">
                    <Button size="md" className="max-w-40">Send</Button>
                    <Button size="md" onClick={handleReset} className="max-w-40">Reset</Button>
                    {status === SUCCESS && <AnimatedMessage sequence={["Sent Successfully", 1000]} />}
                    {status === FAILED && <AnimatedMessage sequence={["Sent Failed", 1000]} />}
                </div>
            </form>
        </div>
    )
}

export default ContactForm
