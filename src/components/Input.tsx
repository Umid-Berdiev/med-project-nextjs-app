import React, { InputHTMLAttributes } from 'react'
import classnames from 'classnames'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // You can add custom props here if needed
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className={classnames(
        'h-9 w-full rounded-lg border border-[#2324271A] px-3 text-[13px] font-normal text-[#161624] outline-none',
        props.className
      )}
    />
  )
}

export default Input
