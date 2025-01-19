import React from 'react'
import { IoIosSearch } from 'react-icons/io'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isSearch?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export default function AppInput(props: IProps) {
  const { isSearch, icon, iconPosition, ...rest } = props
  const defaultIcon = props.isSearch ? (
    <IoIosSearch color='#23242780' size={20} />
  ) : (
    props.icon
  )

  return (
    <div
      className={`relative flex items-center ${props.className ? props.className : ''}`}
    >
      {defaultIcon && props.iconPosition === 'left' && (
        <span className='absolute left-3 text-[#23242780]'>{defaultIcon}</span>
      )}

      <input
        style={{
          paddingLeft:
            defaultIcon && props.iconPosition === 'left' ? '2.5rem' : '',
          paddingRight:
            defaultIcon && props.iconPosition === 'right' ? '2.5rem' : ''
        }}
        type='text'
        value={props.value}
        placeholder={props.placeholder}
        className={`h-9 w-full rounded-lg border border-[#2324271A] px-3 text-[13px] font-normal text-[#161624] outline-none ${
          props.iconPosition === 'left' ? 'pl-10' : ''
        } ${props.iconPosition === 'right' ? 'pr-10' : ''}`}
        {...rest}
      />

      {defaultIcon && props.iconPosition != 'left' && (
        <span className='absolute right-3 text-[#23242780]'>{defaultIcon}</span>
      )}
    </div>
  )
}
