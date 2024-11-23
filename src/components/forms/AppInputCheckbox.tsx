import { useState } from "react";

interface IProps {
    options: { label: string; value: string }[];
    className?: string;
    isRadio?: string;
    onChange: (selectedValue: string) => void;
}

export default function AppInputCheckbox(props: IProps) {
    const [selectedValue, setSelectedValue] = useState<string>(props.options[0]?.value || '');
    const handleChange = (value: string) => {
        setSelectedValue(value);
        props.onChange(value);
    };
    return (

        <div className={`grid ${props.className}`}>
            {

                props.options.map((option: any) => (
                    <label
                        key={option.value}
                        className={`flex items-center gap-2 leading-9 mb-0 cursor-pointer text-xs`}
                    >
                        <input
                            type="checkbox"
                            name="tabGroup"
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={() => handleChange(option.value)}
                            className="checkbox checkbox-sm border-secondary rounded [--chkbg:theme(colors.secondary)] [--chkfg:white] "

                        />
                        {option.label}
                    </label>
                ))
            }
        </div>
    )
}