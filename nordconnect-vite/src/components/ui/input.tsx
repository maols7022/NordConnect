import * as React from 'react'
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className='', ...p }, ref) => (
    <input
      ref={ref}
      className={`h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 ${className}`}
      {...p}
    />
  )
)
Input.displayName = 'Input'
