'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Image } from '..';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import useTranslation from '@/hooks/useTranslation';
import { getCookie } from 'cookies-next';

interface SelectFlagsProps {
    name: string;
    value: string;
    image: string | StaticImport;
}

interface DropdownProps {
    className?: string;
}

const LanguageDropdown = ({className}: DropdownProps) => {
    let lang = getCookie('lang') ?? 'en';

    const { setLanguage } = useTranslation();

    const [open, setOpen] = useState(false),
    [options, setOptions] = useState<Array<SelectFlagsProps>>([]),
    [selected, setSelected] = useState<SelectFlagsProps | null>(null),
    dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetch('/data/flags.json')
        .then(res => res.json())
        .then(data => {
            data.flags.map((flag: SelectFlagsProps) => {
                if(flag.value === lang){
                    setSelected(flag);
                }
            });
            setOptions(data.flags);
        });
    }, []);

    const toggle = () => setOpen(!open);
    const handleSelect = (option: SelectFlagsProps) => {
        setSelected(option);
        setOpen(false);
        return option;
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`${className}`} ref={dropdownRef}>
            <div className="relative w-[150px]">
                {selected ? (
                    <>
                        <button
                            onClick={toggle}
                            className={`w-full flex gap-4 px-2 py-3 items-center rounded cursor-pointer`}
                        >
                            <Image src={selected.image} alt='collapse' width={100} height={100} className={`w-10 rounded-md`} />
                            <p className='text-white font-bold'>{selected.name}</p>
                        </button>

                        <ul
                            className={`flex flex-col items-center absolute z-9999 mt-1 w-full bg-[#031418e6] rounded-sm transition-all duration-300 overflow-hidden ${
                                open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                            }`}
                        >
                            {options && options?.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        handleSelect(option);
                                        setLanguage(option.value);
                                        window.location.reload();
                                    }}
                                    className={`cursor-pointer flex gap-4 px-2 py-3 w-full hover:bg-[#06333D] ${selected.value === option.value ? 'bg-[#06333D]' : ''}`}
                                >
                                    <Image src={option.image} alt='collapse' width={100} height={100} className={`w-10 rounded-md`} />
                                    <p className='text-white font-bold'>{option.name}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                ): null}
            </div>

        </div>
    )
}

export default LanguageDropdown