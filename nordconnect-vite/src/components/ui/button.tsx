import * as React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<Props> = ({ className = '', variant='default', size='md', ...props }) => {
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-slate-300 bg-white hover:bg-slate-50',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900',
    ghost: 'bg-transparent hover:bg-slate-100'
  }
  const sizes = { sm:'h-8 px-3 text-sm', md:'h-10 px-4 text-sm', lg:'h-11 px-5 text-base' }
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl font-medium transition ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
