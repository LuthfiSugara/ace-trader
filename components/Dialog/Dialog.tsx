'use client'

import React from 'react'
import styles from "./Dialog.module.css";
import Button from '../Button/Button';
import { Image } from '..';

interface ModalProps {
    title?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Index = ({title, size, isOpen, onClose, children}: ModalProps) => {

    return isOpen && (
        <div className={`${styles.overlay}`} onClick={onClose}>
            <div 
                className={`${styles.modal} ${size === 'full' ? 'w-[100vw] h-[100vh] overflow-scroll hide-scrollbar' : 'w-sm'} `} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between gap-4'>
                    <p className='text-lg p-3 font-semibold'>{title}</p>
                    <Button className={styles.closeBtn} onClick={onClose}>
                        <Image src='/icons/Time.svg' alt="close" width={100} height={100} className='' />
                    </Button>
                </div>
                <div className='p-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Index