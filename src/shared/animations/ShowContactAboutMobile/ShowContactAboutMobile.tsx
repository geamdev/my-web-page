import clsx from 'clsx';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { AboutMe, Contact } from '@/views/Home/components';

const ShowContactAboutMobile: React.FC = () => {
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);

  const { isMenuOpenAbout, isMenuOpenContact } = useContactAbout();

  const slideVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };
  const slideVariantsInverse = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  };

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

  return (
    <LazyMotion features={domAnimation}>
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
    </LazyMotion>
  );
};

export default ShowContactAboutMobile;
