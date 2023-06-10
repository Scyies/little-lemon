import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className='rounded-2xl bg-primary_2 font-bold font-karla py-4 px-6 text-highlight_2 max-w-fit active:scale-95 transition-all disabled:bg-primary_2/50 disabled:cursor-not-allowed'
      {...rest}
    >
      {children}
    </button>
  );
}
