import clsx from 'clsx';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { ReactNode, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { Footer, NavBar } from '@/shared/components';
import { routerFooter } from '@/shared/constants/constants';
import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useResponsive } from '@/shared/hooks';
import { AboutMe, Contact } from '@/views/Home/components';

interface LayoutProps {
  title?: string;
  head?: ReactNode;
  children: ReactNode;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  head,
  title,
  description,
}) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);
  const [showContactAbout, setShowContactAbout] = useState<boolean>(false);

  const t = useTranslations();

  const { isMobile } = useResponsive();
  const {
    isMenuOpenNav,
    isMenuOpenAbout,
    isMenuOpenContact,
    isMenuOpenContactAbout,
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

  const slideVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };

  const slideVariantsUp = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const slideVariantsDown = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const slideVariantsInverse = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  };

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

  useEffect(() => {
    if (isMenuOpenNav) {
      setShowNav(true);
      window.location.href = '#inicio';
      document.body.classList.add('no-scroll');
    } else {
      setTimeout(() => {
        setShowNav(false);
        document.body.classList.remove('no-scroll');
      }, 1000);
    }
  }, [isMenuOpenNav]);

  useEffect(() => {
    if (isMenuOpenAbout) {
      setShowAbout(true);
      window.location.href = '#inicio';
      document.body.classList.add('no-scroll');
    } else {
      setTimeout(() => {
        setShowAbout(false);
        document.body.classList.remove('no-scroll');
      }, 1000);
    }
  }, [isMenuOpenAbout]);
  useEffect(() => {
    if (isMenuOpenContact) {
      setShowContact(true);
      window.location.href = '#inicio';
      document.body.classList.add('no-scroll');
    } else {
      setTimeout(() => {
        setShowContact(false);
        document.body.classList.remove('no-scroll');
      }, 1000);
    }
  }, [isMenuOpenContact]);
  useEffect(() => {
    if (isMenuOpenContactAbout) {
      setShowContactAbout(true);
      window.location.href = '#inicio';
      document.body.classList.add('no-scroll');
    } else {
      setTimeout(() => {
        setShowContactAbout(false);
        document.body.classList.remove('no-scroll');
      }, 500);
    }
  }, [isMenuOpenContactAbout]);

  return (
    <>
      <Head>
        <title>{title || 'Default Title'}</title>
        <meta
          name='description'
          content={description || 'Default Description'}
        />
        {head}
      </Head>
      <LazyMotion features={domAnimation}>
        <div id='inicio' className='flex h-fulldark:text-white'>
          <div className='relative w-full h-full overflow-y-auto '>
            {isMobile && (
              <>
                {showAbout && (
                  <div className={clsx('absolute inset-0 z-[11] w-full')}>
                    <m.div
                      initial='hidden'
                      animate={isMenuOpenAbout ? 'visible' : 'hidden'}
                      exit='hidden'
                      variants={slideVariants}
                      transition={{
                        type: 'spring',
                        stiffness: 30,
                        duration: 0.3,
                      }}
                    >
                      <AboutMe />
                    </m.div>
                  </div>
                )}
                {showContact && (
                  <div className='absolute inset-0 z-[11] w-full'>
                    <m.div
                      initial='hidden'
                      animate={isMenuOpenContact ? 'visible' : 'hidden'}
                      exit='hidden'
                      variants={slideVariantsInverse}
                      transition={{
                        type: 'spring',
                        stiffness: 30,
                        duration: 0.3,
                      }}
                    >
                      <Contact />
                    </m.div>
                  </div>
                )}
              </>
            )}

            {showContactAbout && !isMobile && (
              <div className='absolute inset-0 z-[11] flex items-center justify-center h-screen tw-bg-primary dark:bg-[#1c1d25]'>
                <div className='flex m-8 bg-transparent justify-center items-center'>
                  <m.div
                    initial='hidden'
                    animate={isMenuOpenContactAbout ? 'visible' : 'hidden'}
                    exit='hidden'
                    variants={slideVariantsUp}
                    className='w-full bg-transparent'
                  >
                    <AboutMe />
                  </m.div>
                  <m.div
                    initial='hidden'
                    animate={isMenuOpenContactAbout ? 'visible' : 'hidden'}
                    exit='hidden'
                    variants={slideVariantsDown}
                    className='w-full bg-transparent'
                  >
                    <Contact />
                  </m.div>
                </div>
              </div>
            )}

            {showNav && isMobile && (
              <div
                className={clsx(
                  'absolute inset-0 z-[11] flex w-full top-0 lef-0',
                )}
              >
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
                              link.click &&
                                closeNavAndNavigateClick(link.onCLick);
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
            )}

            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </LazyMotion>
    </>
  );
};

export default Layout;
