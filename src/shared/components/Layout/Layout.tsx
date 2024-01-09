import { domAnimation, LazyMotion } from 'framer-motion';
import Head from 'next/head';
import React, { ReactNode, useEffect, useState } from 'react';

import { ShowContactAbout, ShowNavAnimation } from '@/shared/animations';
import ShowContactAboutMobile from '@/shared/animations/ShowContactAboutMobile/ShowContactAboutMobile';
import { Footer, NavBar } from '@/shared/components';
import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useResponsive } from '@/shared/hooks';

interface LayoutProps {
  title?: string;
  head?: ReactNode;
  children: ReactNode;
  description?: string;
  project?: boolean;
  casa?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  head,
  title,
  description,
  project,
}) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showContactAbout, setShowContactAbout] = useState<boolean>(false);

  const { isMobile } = useResponsive();
  const { isMenuOpenNav, isMenuOpenContactAbout } = useContactAbout();

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
            {isMobile && <ShowContactAboutMobile />}
            {showContactAbout && !isMobile && <ShowContactAbout />}
            {showNav && isMobile && <ShowNavAnimation />}

            <NavBar project={project ? project : false} />
            {children}
            <Footer />
          </div>
        </div>
      </LazyMotion>
    </>
  );
};

export default Layout;
