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

export const Spinner: React.FC<WhisperSpinnerProps> = ({
  size = 50,
  sizeUnit = 'px',
  width = '100%',
  sizeHeight,
  height = 400
}) => {
  return (
    <div
      className='flex items-center justify-center '
      style={{ width: width, height: sizeHeight ?? height }}
    >
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
