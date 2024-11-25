import React from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isSearch?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  showPassword?: boolean
  onShowPassword?: () => void
}
export default function AppInputPassword(props: IProps) {
  const {
    isSearch,
    icon,
    iconPosition,
    showPassword,
    onShowPassword,
    ...rest
  } = props
  const defaultIcon = icon

  return (
    <div
      className={`relative flex items-center ${props.className ? props.className : ''}`}
    >
      {defaultIcon && iconPosition === 'left' && (
        <span className='absolute left-3 text-[#23242780]'>{defaultIcon}</span>
      )}

      <input
        style={{
          paddingLeft: defaultIcon && iconPosition === 'left' ? '2.5rem' : '',
          paddingRight: defaultIcon && iconPosition === 'right' ? '2.5rem' : ''
        }}
        type={showPassword ? 'text' : 'password'}
        value={props.value}
        placeholder={props.placeholder}
        className={`h-9 w-full rounded-lg border border-[#2324271A] px-3 text-[13px] font-normal text-[#161624] outline-none ${iconPosition === 'left' ? 'pl-10' : ''} ${iconPosition === 'right' ? 'pr-10' : ''}`}
        {...rest}
      />

      <span
        className='absolute right-3 cursor-pointer text-[#23242780]'
        onClick={onShowPassword}
      >
        {showPassword ? <LuEye /> : <LuEyeOff />}
      </span>
    </div>
  )
}
