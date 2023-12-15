import { Graphql, MongoDB, Next, Node, ReactIcon } from '@/assets/Icons';
import Express from '@/assets/Icons/Express/Express';
import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useResponsive } from '@/shared/hooks';
import clsx from 'clsx';
import { useEffect } from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const AboutMe: React.FC = () => {
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
        'dark:bg-[#f3f3f3] py-20 px-8 w-full bg-[#1c1d25] text-white dark:text-black max-w-[585px] md:bg-[#fff] md:dark:bg-[#f3f3f3] md:text-black md:dark:text-black',
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
            <h2 className='text-4xl font-bold'>About Me.</h2>
            <h3 className='mb-4'>Front-end developer.</h3>
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
        <p className='text-justify '>
          Soy Geampiere Jaramillo, un desarrollador Full-Stack de 19 años. Soy
          un tipo raro al que le gusta hacer cosas raras con tecnologías web. Me
          gusta resolver problemas de diseño, crear interfaces de usuario
          inteligentes e imaginar interacciones útiles, desarrollando ricas
          experiencias y aplicaciones web. Cuando no estoy trabajando o
          escribiendo código, me gusta jugar videojuegos, ver series, escuchar
          música y aprender cosas nuevas.
        </p>
      </div>
      {isMobile && (
        <button
          className='mt-8 bg-[#f3f3f3] dark:bg-[#1c1d25] dark:text-white text-black px-4 py-2 rounded-md font-bold'
          onClick={handleContact}
        >
          Contact me
        </button>
      )}
    </section>
  );
};

export default AboutMe;
