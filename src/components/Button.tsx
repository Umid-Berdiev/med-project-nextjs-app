import classnames from 'classnames'
import React from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'contained' | 'outlined' | 'text' | 'tonal'
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'white'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  color = 'secondary',
  size = 'small',
  rounded = false,
  startIcon,
  endIcon,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    small: 'px-2 py-2 text-sm',
    medium: 'px-4 py-2 text-base font-semibold',
    large: 'px-5 py-3 text-lg font-semibold'
  }

  const baseStyles = `inline-flex items-center justify-center gap-2 focus:outline-none ${rounded ? 'rounded-full' : 'rounded-lg'}`

  const variantStyles = {
    contained: `bg-${color} text-white`,
    outlined: `bg-transparent border-[1px] border-${color} text-${color} hover:bg-soft-${color}`,
    text: `bg-transparent text-${color} hover:bg-${color}`,
    tonal: `bg-soft-${color} text-${color} hover:bg-${color}`
  }

  const buttonStyles = `
    ${baseStyles} 
    ${sizeStyles[size]} 
    ${variantStyles[variant]} 
    ${className}
  `

  return (
    <button
      className={classnames(
        'flex h-9 items-center gap-2 whitespace-nowrap rounded-lg border-0  px-5 ',
        buttonStyles
      )}
      {...props}
    >
      {startIcon && <span className='flex items-center'>{startIcon}</span>}
      <span className='flex  items-center gap-2 whitespace-nowrap'>
        {children}
      </span>
      {endIcon && <span className='flex  items-center'>{endIcon}</span>}
    </button>
  )
}

export default Button
