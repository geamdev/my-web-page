import { useTranslations } from 'next-intl';

import { useResponsive } from '@/shared/hooks';
import { Logo } from '@/assets';

import clsx from 'clsx';
import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Button } from '@/shared/components';

const Header = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const t = useTranslations();
  const { toggleMenuAbout, toggleMenuContactAbout } = useContactAbout();

  const onMenuClick = () => {
    !isMobile ? toggleMenuContactAbout() : toggleMenuAbout();
  };

  const backgroundSlide = {
    initial: { width: '100%', left: 0 },
    animate: {
      width: 0,
      left: '100%',
      transition: { duration: 1, delay: 0.1 },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id='home'
        className='flex flex-col justify-center h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] dark:text-white tw-text-primary relative overflow-hidden tw-bg-primary dark:bg-[#1c1d25] md:px-[150px]'
      >
        <div className='flex flex-col items-start mx-auto relative z-10 gap-2'>
          <div className='md:ml-[200px]'>
            <h1 className='relative text-4xl md:text-7xl font-bold z-10'>
              <span className='block md:inline'>Geampiere</span> Jaramillo
              {!isMobile && (
                <m.div
                  className='absolute inset-0 bg-white'
                  variants={backgroundSlide}
                  initial='initial'
                  animate='animate'
                />
              )}
            </h1>

            <div className='relative text-lg z-10'>
              <p>
                <i>
                  {t('HEADER_DESCRIPTION')}
                  <span>{t('HEADER_DESCRIPTION_JOB')}</span>
                </i>
              </p>

              {!isMobile && (
                <m.div
                  className='absolute inset-0 bg-white'
                  variants={backgroundSlide}
                  initial='initial'
                  animate='animate'
                />
              )}
            </div>

            <Button
              className='relative px-4 py-2 text-lg text-white bg-[#4c4f65] z-10'
              onClick={onMenuClick}
            >
              {t('ABOUT')}
              {!isMobile && (
                <m.div
                  className='absolute inset-0 bg-white'
                  variants={backgroundSlide}
                  initial='initial'
                  animate='animate'
                />
              )}
            </Button>
          </div>
          {!isMobile && (
            <div
              className={clsx(
                'absolute  z-2',
                isMobile && 'left-[-23px] top-[-50px]',
                isDesktop && 'left-0 top-[-200px]',
                isTablet && 'left-[-50px] top-[-200px]'
              )}
            >
              <Logo
                width={isMobile ? 224 : 544}
                height={isMobile ? 259 : 579}
              />
            </div>
          )}
        </div>
      </section>
    </LazyMotion>
  );
};

export default Header;
