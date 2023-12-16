import { MongoDB, Node, ReactIcon } from '@/assets/Icons';
import Express from '@/assets/Icons/Express/Express';
import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useResponsive } from '@/shared/hooks';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const AboutMe: React.FC = () => {
  const t = useTranslations();
  const { isMobile } = useResponsive();
  const { isMenuOpenAbout, toggleMenuAbout, toggleMenuContact } =
    useContactAbout();

  const handleContact = () => {
    toggleMenuAbout();
    setTimeout(() => {
      toggleMenuContact();
      setTimeout(() => {
        document.body.classList.add('no-scroll');
        window.location.href = '#inicio';
      }, 20);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (isMenuOpenAbout) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    if (isMenuOpenAbout) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('scroll', handleScroll, { passive: false });
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('scroll', handleScroll);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpenAbout]);

  return (
    <section
      className={clsx(
        'dark:bg-[#f3f3f3] py-20 px-8 w-full bg-[#1c1d25] text-white dark:text-black max-w-[585px] max-h-[655px] md:bg-[#fff] md:dark:bg-[#f3f3f3] md:text-black md:dark:text-black',
        isMobile && 'h-screen relative',
        !isMobile && 'lg:h-[calc(100vh-8rem)] md:h-[600px]'
      )}
    >
      {isMobile && (
        <button
          className='absolute top-4 right-4 text-3xl font-bold text-dark'
          onClick={toggleMenuAbout}
        >
          <FaAngleDoubleLeft />
        </button>
      )}
      <div>
        {isMobile && (
          <div className='flex mt-2 justify-between mb-8'>
            <MongoDB />
            <Express />
            <ReactIcon />
            <Node />
          </div>
        )}
        <div className='flex justify-between'>
          <div>
            <h2 className='text-4xl font-bold'>{t('ABOUT_TITLE')}</h2>
            <h3 className='mb-4'>
              <i>{t('HEADER_DESCRIPTION_JOB')}</i>
            </h3>
          </div>
          {!isMobile && (
            <div className='flex gap-2 mt-2'>
              <MongoDB />
              <Express />
              <ReactIcon />
              <Node />
            </div>
          )}
        </div>
        <p className='text-justify '>{t('ABOUT_DESCRIPTION')}</p>
        <p className='mt-4'>
          <i>{t('ABOUT_HEART')}</i>
        </p>
      </div>
      {isMobile && (
        <button
          className='mt-8 bg-[#f3f3f3] dark:bg-[#1c1d25] dark:text-white text-black px-4 py-2 rounded-md font-bold w-full'
          onClick={handleContact}
        >
          {t('ABOUT_CONTACT')}
        </button>
      )}
    </section>
  );
};

export default AboutMe;
