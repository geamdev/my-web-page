import { domAnimation, LazyMotion, m } from 'framer-motion';

import { useTheme } from '@/shared/contexts/DarkModeContext';

interface Props extends React.SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
}

const SvgComponent: React.FC<Props> = ({ height, width, ...props }) => {
  const { theme } = useTheme();
  const fadeInVariants = {
    hidden: { strokeDashoffset: '100%' },
    visible: {
      strokeDashoffset: '40%',
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 244 279'
        fill='none'
        {...props}
      >
        <m.g
          initial='hidden'
          animate='visible'
          stroke={theme === 'light' ? '#213B6D' : '#fff'}
          fill={theme === 'light' ? '#748FBD' : '#213B6D'}
          fillRule='evenodd'
          clipRule='evenodd'
          variants={fadeInVariants}
          strokeWidth={2}
          strokeLinecap='round'
          strokeDasharray='100%'
        >
          <m.path d='M107.772 7.603c36.822 2.88 73.213 26.982 79.706 62.897H243v23h-77.5V82c0-25.792-25.899-48.838-59.522-51.467-16.166-1.265-33.037 2.508-47.645 12.814-14.28 10.074-27.134 26.917-34.833 53.16-.003 6.918-.021 13.965-.04 21.023v.001c-.059 22.256-.118 44.631.323 63.471.296 12.652.811 23.374 1.66 31.203.427 3.947.903 6.813 1.375 8.689.05.198.097.375.141.533 48.376 41.33 96.514 39.953 132.89 24.381 18.638-7.978 34.201-19.721 44.984-31.538 5.387-5.904 9.425-11.655 12.063-16.758 2.705-5.233 3.604-9.13 3.604-11.512 0-1.899-.486-2.815-1.006-3.46-.672-.833-2.093-2.011-5.003-3.171-6.098-2.431-15.598-3.586-27.877-3.732-10.766-.127-22.487.508-34.237 1.144h-.001c-1.379.075-2.76.15-4.139.223-10.746.573-21.632 1.089-31.006.749l12.518-22.973c5.302-.134 11.094-.414 17.264-.743l4.145-.224c11.627-.631 24.148-1.311 35.728-1.174 12.721.151 25.846 1.268 36.123 5.365 5.278 2.104 10.482 5.254 14.388 10.097 4.058 5.031 6.103 11.14 6.103 17.899 0 7.368-2.507 14.983-6.173 22.074-3.733 7.221-9.031 14.605-15.504 21.699-12.936 14.177-31.185 27.874-52.922 37.179-44.022 18.846-102.304 19.536-158.456-29.397-2.276-1.982-3.527-4.366-4.208-5.892-.754-1.691-1.304-3.483-1.726-5.165-.847-3.37-1.46-7.436-1.935-11.816-.956-8.825-1.487-20.334-1.787-33.143-.448-19.167-.388-41.998-.329-64.341.02-7.546.04-15.037.04-22.313v-1.59l.432-1.531c8.855-31.397 24.66-53.465 44.142-67.21 19.423-13.704 41.74-18.59 62.698-16.951Z' />
        </m.g>
        <m.g
          initial='hidden'
          animate='visible'
          stroke={theme === 'light' ? '#213B6D' : '#fff'}
          fill={theme === 'light' ? '#748FBD' : '#213B6D'}
          fillRule='evenodd'
          clipRule='evenodd'
          variants={fadeInVariants}
          strokeWidth={2}
          strokeLinecap='round'
          strokeDasharray='100%'
        >
          <m.path d='M175.129 20.321c2.279.233 4.496.59 6.64 1.06 22.293 4.873 36.031 20.985 36.312 35.351l19.997-.392c-.519-26.434-23.781-48.321-52.038-54.498-13.704-2.996-28.81-2.48-44.04 2.604l33.129 15.875ZM103.318 40 55.846 88.606 53 91.52v135.823l20 8.578V99.666l49.312-50.49L103.318 40Z' />
        </m.g>
      </svg>
    </LazyMotion>
  );
};
export default SvgComponent;
