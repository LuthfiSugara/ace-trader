'use client'

import Image, { ImageProps } from 'next/image'
import React, { memo, useEffect, useState } from 'react'

interface CustomImageProps extends ImageProps {
    className?: string
    fallbackSrc?: string;
}

const ImageExternal = memo(({className, fallbackSrc, ...props}: CustomImageProps) => {

    const {src, alt, ...rest} = props;

    const [imageSrc, setImageSrc] = useState(src),
    [isLoading, setIsLoading] = useState<boolean>(true);

    const handleError = () => {
        setImageSrc('/images/image-not-found.png');
        if (fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
        setIsLoading(false);
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        setImageSrc(props.src);
    }, [props.src]);

    return (
        <>
            {isLoading ? (
                <div className="relative animate-pulse">
                    <div className="bg-slate-100 aspect-square h-auto w-full"></div>
                </div>
            ) : null}

            <Image 
                src={imageSrc}
                alt={alt}
                className={`${className} ${isLoading ? 'invisible h-0' : 'visible'}`}
                onLoad={handleLoad}
                onError={handleError}
                {...rest}
            />
        </>
    )
});

ImageExternal.displayName = "ImageExternal";

export default ImageExternal

