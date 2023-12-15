import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useTheme } from '@/shared/contexts/DarkModeContext';

interface Props extends React.SVGProps<SVGSVGElement> {}

const SvgLinkedin: React.FC<Props> = (props) => {
  const { theme } = useTheme();
  const { isMenuOpenNav } = useContactAbout();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 48 48'
      fill='none'
      {...props}
    >
      <path
        fill={isMenuOpenNav && theme === 'dark' ? '#000' : '#D2D2D3'}
        d='M48 23.655c0 6.359-1.066 11.517-2.38 11.517-1.316 0-2.38-5.157-2.38-11.517 0-6.36 1.065-11.516 2.38-11.516 1.314 0 2.38 5.156 2.38 11.516ZM41.926 23.655c0 7.099-3.03 12.856-6.77 12.856-3.738 0-6.768-5.757-6.768-12.856 0-7.098 3.03-12.855 6.768-12.855 3.739 0 6.77 5.755 6.77 12.855M27.075 23.655c0 7.542-6.061 13.655-13.537 13.655C6.06 37.31 0 31.195 0 23.655 0 16.115 6.061 10 13.538 10c7.476 0 13.537 6.114 13.537 13.655Z'
      />
    </svg>
  );
};
export default SvgLinkedin;
