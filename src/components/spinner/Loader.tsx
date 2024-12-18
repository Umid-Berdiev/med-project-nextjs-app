import React from 'react'

import './WhisperSpinner.css'
interface WhisperSpinnerProps {
  size?: number
  loading?: boolean
  sizeUnit?: string
  width?: number
  height?: number
  sizeHeight?: string
}

export const Loader: React.FC<WhisperSpinnerProps> = ({
  size = 150,
  sizeUnit = 'px',
  width = '100%',
  height = '100%'
}) => {
  return (
    <div className='flex items-center justify-center' style={{ width, height }}>
      <div
        className='lds-ripple'
        style={{
          width: `${size}${sizeUnit}`,
          height: `${size}${sizeUnit}`
        }}
      >
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
