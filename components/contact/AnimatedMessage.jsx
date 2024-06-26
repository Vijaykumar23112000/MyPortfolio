"use client"

import { TypeAnimation } from 'react-type-animation';

const AnimatedMessage = ({ sequence }) =>
    <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        style={{ display: 'inline-block' }}
        repeat={Infinity}
        className="text-white/60"
    />

export default AnimatedMessage
