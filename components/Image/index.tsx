'use client'

import Image, { ImageProps } from 'next/image'
import React, { memo, useEffect, useState } from 'react'

interface CustomImageProps extends ImageProps {
    className?: string
    fallbackSrc?: string;
}

const Index = memo(({className, fallbackSrc, ...props}: CustomImageProps) => {

    const {src, ...rest} = props;

    const [imageSrc, setImageSrc] = useState(src)

    const handleError = () => {
        setImageSrc('/images/image-not-found.png');
        if (fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
    };

    useEffect(() => {
        setImageSrc(props.src);
    }, [props.src]);

    return (
        <>
            <Image 
                src={imageSrc}
                className={`${className}`}
                onError={handleError}
                {...rest}
            />
        </>
    )
});

Index.displayName = "Image";

export default Index

