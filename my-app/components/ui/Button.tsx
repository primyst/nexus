import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full font-medium transition disabled:opacity-50',
        {
          primary: 'bg-gold text-navy hover:opacity-90',
          secondary: 'bg-navy text-white',
          outline: 'border border-gold text-gold hover:bg-gold hover:text-navy'
        }[variant],
        {
          sm: 'px-4 py-2',
          md: 'px-6 py-3',
          lg: 'px-8 py-4'
        }[size],
        className
      )}
      {...props}
    />
  );
}