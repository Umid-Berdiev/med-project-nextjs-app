import { useState } from 'react'

interface IProps {
  options: { label: string; value: string }[]
  onChange: (selectedValue: string) => void
}

export default function AppInputRadio(props: IProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    props.options[0]?.value || ''
  )
  const handleChange = (value: string) => {
    setSelectedValue(value)
    props.onChange(value)
  }
  return (
    <div className='grid grid-flow-col rounded-lg border border-[#ECEDEF] p-[3px]  text-center '>
      {props.options.map((option: any) => (
        <label
          key={option.value}
          className={`cursor-pointer rounded-md px-4 py-[6px] text-sm leading-4 transition 
          ${
            selectedValue === option.value
              ? 'border-blue-500 bg-secondary text-white'
              : 'bg-white text-[#161624] '
          }`}
        >
          <input
            type='radio'
            name='tabGroup'
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleChange(option.value)}
            className='hidden' // Hide the actual radio input
          />
          {option.label}
        </label>
      ))}
    </div>
  )
}
