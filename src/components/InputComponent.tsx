'use client'

import React, { useState } from 'react';

interface InputProps {
    label: string;
    placeholder: string;
    isRequired?: boolean;
}

const InputComponent: React.FC<InputProps> = ({ label, placeholder }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="w-full">
            <label className='mb-1 font-semibold text-xs leading-4 text-[#232427]' >
                <span className='text-[#E6533C] pr-1'>*</span>
                {label}
            </label>
            <input
                type="text"
                id="input"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
                className="border h-9 px-3 border-[#2324271A] rounded-lg text-[#161624] font-normal text-[13px] outline-none w-full"
            />
        </div>
    );
};

export default InputComponent;