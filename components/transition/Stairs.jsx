import { motion } from "framer-motion"

const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%", },
    exit: { top: ["100%", "0%"] }
}

const reverseIndex = index => {
    const totalSteps = 8
    return totalSteps - index - 1
}

const Stairs = () => {
    return (
        <>
            {
                [...Array(10)].map((_, i) =>
                    <motion.div
                        key={i}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut", delay: reverseIndex(i) * 0.1 }}
                        className="h-full w-full bg-white relative"
                    />
                )
            }
        </>
    )
}

export default Stairs
