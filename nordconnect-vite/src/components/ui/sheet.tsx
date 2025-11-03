import * as React from 'react'
export const Sheet: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>
export const SheetTrigger: React.FC<React.PropsWithChildren & { asChild?: boolean }> = ({ children }) => <>{children}</>
export const SheetContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...p }) => (
  <div className={`fixed right-4 top-16 z-50 w-72 rounded-2xl border bg-white p-4 shadow-xl ${className}`} {...p} />
)
export const SheetHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...p }) => (
  <div className={`mb-2 ${className}`} {...p} />
)
export const SheetTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...p }) => (
  <div className={`text-base font-semibold ${className}`} {...p} />
)
