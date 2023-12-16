import clsx from 'clsx';

import { Loader } from './components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary';
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  loading = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'relative',
        {
          'px-10 py-2 text-lg text-white bg-[#4c4f65]': variant === 'primary',
          'w-full': fullWidth,
          'cursor-not-allowed': loading,
        },
        'flex items-center justify-center gap-2'
      )}
      disabled={loading}
      {...props}
    >
      {children}
      {loading && (
        <div className='absolute right-2 flex items-center'>
          <Loader size={22} borderSize={3} color='#fff' />
        </div>
      )}
    </button>
  );
};

export default Button;
