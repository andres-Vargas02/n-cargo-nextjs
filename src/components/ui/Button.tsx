import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-primary-500 text-dark-900 hover:bg-primary-600 focus:ring-primary-500',
      dark: 'bg-dark-900 text-white hover:bg-dark-800 focus:ring-dark-900',
      outline: 'border-2 border-gray-300 text-dark-900 hover:border-dark-900 focus:ring-dark-900',
      ghost: 'text-gray-700 hover:text-primary-600 focus:ring-primary-500',
    }
    
    const sizes = {
      sm: 'px-5 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-10 py-3.5 text-lg font-bebas tracking-wider',
    }
    
    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }