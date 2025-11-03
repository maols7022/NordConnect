import * as React from 'react'
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...p }) => (
  <div className={`rounded-2xl border bg-white shadow-sm ${className}`} {...p} />
)
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...p }) => (
  <div className={`p-5 border-b ${className}`} {...p} />
)
export const CardTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...p }) => (
  <div className={`text-lg font-semibold ${className}`} {...p} />
)
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...p }) => (
  <div className={`p-5 ${className}`} {...p} />
)
