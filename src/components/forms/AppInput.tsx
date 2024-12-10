import React from 'react'
import { BiSearch } from 'react-icons/bi'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isSearch?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export default function AppInput({
  className = '',
  isSearch = false,
  icon,
  iconPosition = 'left',
  value,
  placeholder
}: IProps) {
  // const { isSearch, icon, iconPosition, ...rest } = props
  const defaultIcon = isSearch ? <BiSearch size={20} /> : icon

  return (
    <label
      className={`input input-bordered flex h-9 min-w-40 items-center gap-2 rounded-lg text-sm ${className}`}
    >
      {defaultIcon && iconPosition === 'left' && (
        <span className='text-[#23242780]'>{defaultIcon}</span>
      )}

      <input
        // style={{
        //   paddingLeft:
        //     defaultIcon && props.iconPosition === 'left' ? '2.5rem' : '',
        //   paddingRight:
        //     defaultIcon && props.iconPosition === 'right' ? '2.5rem' : ''
        // }}
        className={`grow`}
        type='text'
        defaultValue={value}
        placeholder={placeholder}
      />

      {defaultIcon && iconPosition === 'right' && (
        <span className='text-[#23242780]'>{defaultIcon}</span>
      )}
    </label>
  )
}
