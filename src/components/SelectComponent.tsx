'use client';

import React, { useState } from 'react';

interface SelectProps {
    label: string;
    options: string[];
    onSelect: (value: string) => void;
}

const SelectComponent: React.FC<SelectProps> = ({ label, options, onSelect }) => {
    const [selectedValue, setSelectedValue] = useState<string>(options[0] || '');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedValue(value);
        onSelect(value); // Notify parent component of the selection
    };

    return (
        <div className="w-full">
            <label className='mb-1 font-semibold text-xs leading-4 text-[#232427]' >
                <span className='text-[#E6533C] pr-1'>*</span>
                {label}
            </label>
            <select
               style={{
                backgroundImage: "url('/images/SelectArrow.svg')",
                backgroundPosition: 'right 12px center',
                backgroundRepeat: 'no-repeat',
                // backgroundSize: '16px 16px', // Size of the arrow icon
              }}
                id="select" value={selectedValue} onChange={handleChange} className="appearance-none border h-9 px-3 border-[#2324271A] rounded-lg text-[#161624] font-normal text-[13px] outline-none w-full"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {/* <p className="mt-2 text-gray-600">You selected: {selectedValue}</p> */}
        </div>
    );
};

export default SelectComponent;
