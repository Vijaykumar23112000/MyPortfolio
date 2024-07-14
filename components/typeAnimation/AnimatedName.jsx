"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const AnimatedName = ({ name }) => {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className='text-accent'
        >
            <TypeAnimation
                sequence={[
                    name,
                    1000, //time
                    '',
                    100, //speed
                    () => (new Promise(resolve => setTimeout(() => resolve(), 300))),
                    name,
                    1000, //speed
                    '',
                    100, //time
                    () => (new Promise(resolve => setTimeout(() => resolve(), 300))),
                ]}
                wrapper="span"
                speed={20}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
            />
        </motion.span>
    )
}

export default AnimatedName
