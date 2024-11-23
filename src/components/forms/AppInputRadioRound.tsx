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
        <div className="flex gap-3">
            {
                props.options.map((option: any) => (
                    <label
                        key={option.value}
                        className='label p-0 mb-4 gap-2 justify-start cursor-pointer min-w-32 text-xs font-medium'
                    >
                        <input type="radio" value={option.value} onChange={() => handleChange(option.value)}
                            checked={selectedValue === option.value} name={props?.options[0]?.label + props?.options[0]?.value} className="radio border border-[#D3D3D4] size-5 transition checked:bg-white  checked:border-[7px] checked:!border-[#29CED2]" />
                        {option.label}
                    </label>
                ))
            }
        </div>
    )
}