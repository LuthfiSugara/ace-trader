'use client'

import React, { useEffect, useRef, useState } from 'react'

interface CollapseProps {
    className?: string;
    children: React.ReactNode;
    startingHeight: number;
    show: boolean;
}

const Collapse = ({className, children, startingHeight, show}: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsOpen(show);
    }, [show]);

    return (
        <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${className}`}
            style={{
                maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : `${startingHeight}px`,
            }}
        >
            <div className={''} ref={contentRef}>
                {children}
            </div>
        </div>
    )
}

export default Collapse