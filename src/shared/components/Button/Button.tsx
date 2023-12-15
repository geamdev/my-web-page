import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
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
          'tw-button': variant === 'primary',
          'bg-transparent hover:bg-gray-300 text-black font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded':
            variant === 'outline',
          'w-full': fullWidth,
        },
        'flex items-center justify-center gap-2'
      )}
      disabled={loading}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
