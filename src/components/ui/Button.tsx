'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200'

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'bg-transparent text-primary border border-primary hover:bg-primary/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={buttonClass} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClass} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}
