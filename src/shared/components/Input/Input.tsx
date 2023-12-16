import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes } from 'react';

import { useTheme } from '@/shared/contexts/DarkModeContext';
import { useResponsive } from '@/shared/hooks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  fullWidth?: boolean;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ fullWidth, error, label, ...props }, ref) => {
    const { isMobile } = useResponsive();
    const { theme } = useTheme();
    const spans = label?.split('').map((letter, index) => (
      <span
        key={index}
        style={{ transitionDelay: `${index * 50}ms` }}
        className={clsx({
          'text-black': isMobile && theme === 'dark',
        })}
      >
        {letter}
      </span>
    ));

    return (
      <div
        className={clsx('form-control', {
          'w-full': fullWidth,
          'text-dark': isMobile && theme === 'dark',
        })}
      >
        <input
          ref={ref}
          {...props}
          className={clsx({
            'text-dark': isMobile && theme === 'dark',
          })}
        />
        {error && (
          <p className='text-sm text-red-500 mt-1 text-left'>{error}</p>
        )}
        <label>{spans}</label>
      </div>
    );
  },
);

export default Input;
