import React from 'react'
import { useSelector } from 'react-redux'

const Textarea = ({ className = '', ...props }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
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

export default Textarea
