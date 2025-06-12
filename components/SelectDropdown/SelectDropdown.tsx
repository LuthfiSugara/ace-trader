
'use client';

import { useEffect, useRef, useState } from 'react';
import { Image } from '..';

export interface SelectProps {
    value: string | number;
    name: string | number;
}

interface DropdownProps {
    options?: Array<SelectProps>;
    onSelect: (value: SelectProps) => void;
    className?: string;
}

const SelectDropdown = ({options, onSelect, className}: DropdownProps) => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<SelectProps | null>(null),
    dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggle = () => setOpen(!open);
    const handleSelect = (option: SelectProps) => {
        setSelected(option);
        onSelect(option);
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

    useEffect(() => {
        if(options){
            setSelected(options[0]);
        }
    }, [options]);

    return (
        <div className={`${className}`} ref={dropdownRef}>
            <div className="relative">
                <button
                    onClick={toggle}
                    className={`w-full flex justify-between gap-4 items-center px-4 py-2 bg-[#06333D] rounded shadow capitalize ${selected ? 'text-white' : 'text-[#2F6F78]'}`}
                >
                    {selected?.name || 'Select a category'}
                    <Image src='/icons/chevron-down.png' alt='collapse' width={100} height={100} className={` transition-transform duration-500 ${open ? 'rotate-180' : 'rotate-0'} w-[18px] h-[8px]`} />
                </button>

                <ul
                    className={`absolute z-10 mt-2 w-full bg-[#06333D] text-[#2F6F78] rounded shadow transition-all duration-300 overflow-hidden ${
                    open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                >
                    {options && options?.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(option)}
                        className={`px-4 py-2 capitalize hover:bg-[#3AA7B8] hover:text-white cursor-pointer ${selected?.value === option.value ? 'bg-[#3AA7B8] text-white' : 'text-[#2F6F78]'}`}
                    >
                        {option.name}
                    </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default SelectDropdown;