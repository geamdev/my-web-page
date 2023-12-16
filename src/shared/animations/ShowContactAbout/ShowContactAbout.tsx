import { domAnimation, LazyMotion, m } from 'framer-motion';

import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { AboutMe, Contact } from '@/views/Home/components';

const ShowContactAbout: React.FC = () => {
  const { isMenuOpenContactAbout } = useContactAbout();

  const slideVariantsUp = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const slideVariantsDown = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className='absolute inset-0 z-[11] flex  justify-center h-screen tw-bg-primary dark:bg-[#1c1d25]'>
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
    </LazyMotion>
  );
};

export default ShowContactAbout;
