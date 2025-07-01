'use client'

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const FacebookPixelTracker = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
       import("react-facebook-pixel")
         .then((x) => x.default)
         .then((ReactPixel) => {
           ReactPixel.init("1802128230344761");
           ReactPixel.pageView();
         });
     }, [pathname, searchParams]);
    
    return null;
    
}

export default FacebookPixelTracker