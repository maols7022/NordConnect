import * as React from 'react'
export const Avatar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...p }) => (
  <div className={`inline-flex items-center justify-center rounded-full bg-slate-200 h-8 w-8 ${className}`} {...p} />
)
export const AvatarFallback: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className='', ...p }) => (
  <span className={`text-xs font-medium text-slate-700 ${className}`} {...p} />
)
