import GevimaUi from 'assets/GevimaUI.png';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Button, Layout } from '@/shared/components';

const Projects = () => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const t = useTranslations();

  const goToGevimaUi = () => {
    router.push('/projects/gevima-ui');
  };

  const textHoverEffects = {
    whileHover: { scale: 1.2, transition: { duration: 0.4 } },
  };

  const numberAnimation = {
    initial: { opacity: 0, color: '#d9d9d9' },
    animate: hovered
      ? { opacity: 1, color: '#fff', transition: { duration: 0.4 } }
      : {},
  };

  const comingSoonAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <Layout
      project
      title='Projects'
      description='Projects of Geampiere Jaramillo'
      head={
        <>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta
            name='keywords'
            content='Geampiere Jaramillo, Geampiere, Jaramillo, Full Stack'
          />
          <meta name='author' content='Geampiere Jaramillo' />
          <meta
            name='copyright'
            content='© 2023 Geampiere Jaramillo | @geamdev'
          />
          <meta http-equiv='cache-control' content='no-cache' />
          <meta name='robots' content='index, follow' />
          <link rel='icon' href='/favicon.ico' sizes='any' />
        </>
      }
    >
      <section
        className='flex flex-col md:items-center px-4 py-14 dark:bg-[#1c1d25] md:h-[calc(100vh-3.5rem)]'
        id='projects'
      >
        <h1 className='text-4xl font-bold text-[#4a4a4a] mb-8 dark:text-white'>
          {t('LATEST_WORKS')}
        </h1>
        <div
          className='relative max-w-[900px] max-h-[460px] overflow-hidden cursor-pointer'
          onClick={goToGevimaUi}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={GevimaUi}
            alt='Gevima UI'
            className='w-full h-[300px] md:h-[460px]'
          />
          <motion.div
            className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start md:items-center text-white text-center p-5'
            whileHover={textHoverEffects.whileHover}
          >
            <motion.span
              className='absolute top-10 right-20 text-9xl font-bold'
              variants={numberAnimation}
              initial='initial'
              animate='animate'
            >
              01
            </motion.span>
            <h4 className='text-4xl md:text-7xl font-bold'>
              {t('NAME_LIBRERY')}
            </h4>
            <p>{t('DESCRIPTION_LIBRERY')}</p>
            <Button className='relative px-4 py-2 text-lg text-white bg-[#4c4f65] z-10'>
              {t('SEE_MORE')}
            </Button>
          </motion.div>
        </div>

        <AnimatePresence>
          <motion.div
            className='mt-12 text-2xl text-center font-semibold text-gray-800 dark:text-gray-200 typing'
            variants={comingSoonAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            {t('WORKING_ON')}
          </motion.div>
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default Projects;
