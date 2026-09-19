export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#18181B] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    primary: 'bg-[#966042] text-white hover:bg-[#7d4d32] shadow-sm',
    secondary: 'bg-slate-100 text-[#18181B] hover:bg-slate-200 border border-slate-300',
    outline: 'border-2 border-[#966042] text-[#966042] hover:bg-[#966042] hover:text-white',
    ghost: 'text-[#966042] hover:bg-slate-100',
    accent: 'bg-[#966042] text-white hover:bg-[#7d4d32] shadow-sm',
  }

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
