import GevimaUi from 'assets/GevimaUI.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Button } from '@/shared/components';

const Project = () => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const goToProject = () => {
    router.push('/projects');
  };

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

  return (
    <section
      className='md:h-screen flex flex-col md:items-center md:justify-center px-4 py-14 dark:bg-[#1c1d25]'
      id='projects'
    >
      <h1 className='text-4xl font-bold text-[#4a4a4a] mb-8 dark:text-white'>
        Latest Works
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
          <h4 className='text-4xl md:text-7xl font-bold'>GevimaUI</h4>
          <p>A modern library for reactJS components</p>
          <Button className='relative px-4 py-2 text-lg text-white bg-[#4c4f65] z-10'>
            See more
          </Button>
        </motion.div>
      </div>
      <div className='flex items-center justify-center w-full mt-2'>
        <Button
          className='relative px-4 py-2 text-lg text-white dark:text-black bg-black dark:bg-white z-10 mt-4 w-full md:w-fit rounded'
          onClick={goToProject}
        >
          All Projects
        </Button>
      </div>
    </section>
  );
};

export default Project;
