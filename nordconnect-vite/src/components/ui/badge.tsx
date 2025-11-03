import * as React from 'react'
export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'secondary' | 'outline' }> =
({ className='', variant='default', ...p }) => {
  const styles = {
    default: 'bg-blue-600/10 text-blue-700',
    secondary: 'bg-slate-100 text-slate-700',
    outline: 'border border-slate-300 text-slate-700'
  }
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-xl text-xs ${styles[variant]} ${className}`} {...p} />
}
