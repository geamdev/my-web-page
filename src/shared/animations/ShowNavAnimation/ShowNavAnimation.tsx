import clsx from 'clsx';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { IoMdClose } from 'react-icons/io';

import { routerFooter } from '@/shared/constants';
import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useResponsive } from '@/shared/hooks';

const ShowNavAnimation: React.FC = () => {
  const t = useTranslations();
  const { isMobile } = useResponsive();

  const {
    isMenuOpenNav,
    toggleMenuNav,
    toggleMenuContact,
    toggleMenuContactAbout,
  } = useContactAbout();

  const home = t('NAVBAR_HOME');
  const skills = t('NAVBAR_SKILLS');
  const projects = t('NAVBAR_PROJECTS');
  const contact = t('NAVBAR_CONTACT');

  const routesLinks = [
    {
      title: home,
      href: '#',
      section: true,
    },
    {
      title: skills,
      href: '#skills',
      section: true,
    },
    {
      title: projects,
      href: '#projects',
      section: true,
    },
    {
      title: contact,
      href: '#',
      click: true,
      onCLick: isMobile ? toggleMenuContact : toggleMenuContactAbout,
    },
  ];

  const slideDownVariants = {
    hidden: { y: '-100%', x: '100%', opacity: 0 },
    visible: { y: 0, x: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const closeNav = () => {
    toggleMenuNav();
    setTimeout(() => {
      document.body.classList.add('no-scroll');
      window.location.href = '#inicio';
    }, 1010);
  };

  const closeNavAndNavigate = (href: string) => {
    closeNav();
    setTimeout(() => {
      window.location.href = href;
      document.body.classList.remove('no-scroll');
    }, 1010);
  };

  const closeNavAndNavigateClick = (functionClick: () => void) => {
    closeNav();
    setTimeout(() => {
      functionClick();
    }, 500);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className={clsx('absolute inset-0 z-[11] flex w-full top-0 lef-0')}>
        <m.div
          initial='hidden'
          animate={isMenuOpenNav ? 'visible' : 'hidden'}
          exit='hidden'
          variants={slideDownVariants}
          className='w-full'
        >
          <div
            className={clsx(
              'flex px-20 items-center dark:bg-[#f3f3f3] bg-[#1c1d25] text-white dark:text-black',
              isMobile && 'bg-[#1c1d25] h-screen',
            )}
          >
            <button
              className='absolute top-4 right-4 text-3xl font-bold text-dark'
              onClick={toggleMenuNav}
            >
              <IoMdClose />
            </button>
            <div className='absolute bottom-8 text-3xl font-bold text-dark flex gap-4'>
              {routerFooter.map((item, index) => (
                <li key={index} className='list-none'>
                  <Link href={item.href} target='_blank'>
                    {item.icon}
                  </Link>
                </li>
              ))}
            </div>

            <ul className='flex flex-col list-none gap-8'>
              {routesLinks.map((link, index) => (
                <li className='flex' key={index}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      link.section && closeNavAndNavigate(link.href);
                      link.click && closeNavAndNavigateClick(link.onCLick);
                    }}
                    className='text-3xl font-bold'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default ShowNavAnimation;
