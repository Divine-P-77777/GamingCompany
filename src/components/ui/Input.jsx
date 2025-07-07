import React from 'react'
import { useSelector } from 'react-redux'

const Input = ({ className = '', ...props }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <input
      className={`flex h-10 w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
        ${
          isDarkMode
            ? 'border-cyan-700 bg-[#0c0e27] text-cyan-100 ring-cyan-500 ring-offset-[#0c0e27]'
            : 'border-input bg-background text-black ring-ring ring-offset-background'
        }
        ${className}
      `}
      {...props}
    />
  )
}

export default Input
