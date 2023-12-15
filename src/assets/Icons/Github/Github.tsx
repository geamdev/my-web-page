import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useTheme } from '@/shared/contexts/DarkModeContext';

interface Props extends React.SVGProps<SVGSVGElement> {}

const SvgGithub: React.FC<Props> = (props) => {
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
      <g clipPath='url(#a)'>
        <path
          fill={isMenuOpenNav && theme === 'dark' ? '#000' : '#D2D2D3'}
          fillRule='evenodd'
          d='M24.02 0C10.738 0 0 10.817 0 24.198 0 34.895 6.88 43.95 16.424 47.154c1.193.241 1.63-.52 1.63-1.161 0-.561-.039-2.484-.039-4.488-6.682 1.443-8.073-2.884-8.073-2.884-1.074-2.805-2.665-3.525-2.665-3.525-2.187-1.483.16-1.483.16-1.483 2.425.16 3.698 2.484 3.698 2.484 2.147 3.686 5.607 2.644 7 2.003.198-1.562.834-2.644 1.51-3.245-5.329-.56-10.936-2.644-10.936-11.939 0-2.644.954-4.807 2.466-6.49-.239-.6-1.074-3.085.239-6.41 0 0 2.028-.641 6.6 2.484 1.959-.53 3.978-.8 6.006-.802 2.028 0 4.095.281 6.005.802 4.573-3.125 6.601-2.484 6.601-2.484 1.313 3.325.477 5.81.239 6.41 1.55 1.683 2.465 3.846 2.465 6.49 0 9.295-5.607 11.338-10.976 11.94.876.76 1.63 2.202 1.63 4.486 0 3.245-.039 5.85-.039 6.65 0 .642.438 1.403 1.63 1.163C41.12 43.949 48 34.895 48 24.198 48.04 10.817 37.262 0 24.02 0Z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path
            fill={isMenuOpenNav && theme === 'dark' ? '#000' : '#D2D2D3'}
            d='M0 0h48v48H0z'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgGithub;
