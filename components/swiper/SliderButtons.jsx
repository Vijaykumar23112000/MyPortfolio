"use client"

import { useSwiper } from "swiper/react"
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi"

const SliderButtons = ({ containerStyles, btnStyles, iconStyles }) => {

    const swiper = useSwiper()

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div>
    )
}

export default SliderButtons
