import { LazyMotion, domAnimation, m, Variants } from 'framer-motion';

const Loader: React.FC = () => {
  const backgroundSlide: Variants = {
    initial: { width: 0 },
    animate: {
      width: '100%',
      transition: { duration: 0.45, delay: 0.5 },
    },
  };

  const loaderSlide: Variants = {
    initial: { x: '-40%' },
    animate: {
      x: '50%',
      transition: {
        duration: 0.1,
        delay: 0,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className='h-screen tw-bg-primary-loader relative flex justify-center items-center'>
        <m.div
          variants={loaderSlide}
          className='bg-white h-[25px] w-[25px] rounded-full'
          initial='initial'
          animate='animate'
        />

        <m.div
          className='absolute inset-0 tw-bg-secondary-loader h-screen'
          initial='initial'
          animate='animate'
          variants={backgroundSlide}
        />
      </div>
    </LazyMotion>
  );
};

export default Loader;
