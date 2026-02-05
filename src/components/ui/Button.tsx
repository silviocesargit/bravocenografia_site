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
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200'

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 active:scale-95',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-90 active:scale-95',
    ghost: 'bg-transparent text-primary border border-primary hover:bg-primary/10 active:scale-95',
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
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}
