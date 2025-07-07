import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({ children, className = '', ...props }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <div
      className={`rounded-lg border shadow-sm gaming-card ${
        isDarkMode
          ? 'bg-[#0c0e27]/80 text-cyan-100 border-cyan-700'
          : 'bg-white text-black border-gray-300'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = '', ...props }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${
        isDarkMode ? 'text-cyan-100' : 'text-black'
      } ${className}`}
      {...props}
    >
      {children}
    </h3>
  )
}

export { Card, CardHeader, CardContent, CardFooter, CardTitle }
