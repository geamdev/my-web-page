import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { routerFooter } from '@/shared/constants/constants';
import { useResponsive } from '@/shared/hooks';

import logo from '../../../assets/Logo.svg';

const Footer: React.FC = () => {
  const { isMobile } = useResponsive();
  return (
    <footer className='h-[300px] md:h-[380px] bg-[#1c1d25] text-white flex flex-col justify-center items-center gap-8'>
      <button>
        <Link href='/'>
          <Image src={logo} alt='Logo' />
        </Link>
      </button>
      <nav>
        <ul className='flex gap-8 text-2xl'>
          {routerFooter.map((item, index) => (
            <li key={index} className={clsx(!isMobile ? 'li' : '')}>
              <Link href={item.href} target='_blank'>
                {!isMobile ? item.title : item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className='text-sm'>© 2023 Geampiere Jaramillo | @geamdev</p>
    </footer>
  );
};

export default Footer;
