import React from 'react'
import { useSelector } from 'react-redux'

const Button = ({ children, className = '', variant = 'default', size = 'default', onClick, ...props }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'

  // Define variants with conditional dark mode handling
  const variants = {
    default: isDarkMode
      ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(var(--primary)/0.5)]'
      : 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: isDarkMode
      ? 'border border-input hover:bg-accent hover:text-accent-foreground hover:border-primary'
      : 'border border-input hover:bg-accent hover:text-accent-foreground',
    secondary: isDarkMode
      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  }

  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
