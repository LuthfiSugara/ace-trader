
'use client';

import { useEffect, useState } from 'react';
import { Button, Image } from '..';

export interface FaqCategoryProps {
    id: number;
    name: string;
}

interface DropdownProps {
    options?: Array<FaqCategoryProps>;
    onSelect: (value: FaqCategoryProps) => void;
}

const Dropdown = ({options, onSelect}: DropdownProps) => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<FaqCategoryProps | null>(null);

    const toggle = () => setOpen(!open);
    const handleSelect = (option: FaqCategoryProps) => {
        console.log('select : ', option);
        setSelected(option);
        onSelect(option);
        setOpen(false);
        return option;
    };

    useEffect(() => {
        if(options){
            const filtered = options
            .filter((category: FaqCategoryProps) => category.id === 1)
            .slice(0, 1);
            
            setSelected(filtered[0]);
        }
    }, [options]);

    return (
        <div>
            <div className="md:hidden relative">
                <button
                    onClick={toggle}
                    className={`w-full flex justify-between items-center px-4 py-2 bg-[#06333D] rounded shadow ${selected ? 'text-white' : 'text-[#2F6F78]'}`}
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
                        className={`px-4 py-2 hover:bg-[#3AA7B8] hover:text-white cursor-pointer ${selected?.id === option.id ? 'bg-[#3AA7B8] text-white' : 'text-[#2F6F78]'}`}
                    >
                        {option.name}
                    </li>
                    ))}
                </ul>
            </div>

            <div className='hidden bg-[#06333D] rounded-xl md:flex flex-col h-fit'>
                {options && options?.map((category: {id: number, name: string}, index: number) => {
                    return (
                        <Button 
                            key={index} 
                            onClick={() => {handleSelect(category)}}
                            className={`${selected?.id == category.id ? 'text-white' : 'text-[#2F6F78]'} text-lg text-left font-medium border-b border-b-[#072B33] py-3 px-6`}
                        >
                            <p>{category.name}</p>
                        </Button>
                    )
                })}
            </div>

        </div>
    );
}


export default Dropdown;