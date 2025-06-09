import React from 'react'
import Lottie from "lottie-react"

interface LottieProps {
    loop?: boolean;
    autoplay?: boolean;
    animationData: object;
    className?: string;
    height?: number | string;
    width?: number | string;
}

const LottieFile = ({loop, autoplay, animationData, className, ...props}: LottieProps) => {

    return (
        <div className={`${className}`}>
            <Lottie
                loop={loop ?? true}
                autoplay={autoplay ?? true}
                animationData={animationData}
                height={props.height}
                width={props.width}
            />
        </div>
    )
}

export default LottieFile