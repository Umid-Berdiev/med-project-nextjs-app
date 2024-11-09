import { useState } from "react";

interface IProps {
    options: { label: string; value: string }[];
    onChange: (selectedValue: string) => void;
}

export default function AppInputRadio(props: IProps) {
    const [selectedValue, setSelectedValue] = useState<string>(props.options[0]?.value || '');
    const handleChange = (value: string) => {
        setSelectedValue(value);
        props.onChange(value);
      };
    return (
        <div className="p-[3px] block border rounded-lg  border-[#ECEDEF] ">
            {
                props.options.map((option: any) => (
                    <label
                        key={option.value}
                        className={`px-4 py-[6px] text-[13px] leading-4 cursor-pointer rounded-[5px] transition 
          ${selectedValue === option.value
                                ? 'bg-[#29CED2] text-white border-blue-500'
                                : 'bg-white text-[#161624] '
                            }`}
                    >
                        <input
                            type="radio"
                            name="tabGroup"
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={() => handleChange(option.value)}
                            className="hidden" // Hide the actual radio input
                        />
                        {option.label}
                    </label>
                ))
            }
        </div>
    )
}