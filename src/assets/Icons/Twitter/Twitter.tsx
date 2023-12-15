import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useTheme } from '@/shared/contexts/DarkModeContext';

interface Props extends React.SVGProps<SVGSVGElement> {}

const SvgTwitter: React.FC<Props> = (props) => {
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
        d='M36.653 3.808H43.4L28.66 20.655 46 43.58H32.422L21.788 29.676 9.62 43.58H2.869l15.766-18.02L2 3.808h13.922l9.613 12.709 11.118-12.71ZM34.285 39.54h3.738L13.891 7.634H9.879l24.406 31.907Z'
      />
    </svg>
  );
};
export default SvgTwitter;
