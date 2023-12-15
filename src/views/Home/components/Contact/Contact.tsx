import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { defaultValues } from '../../constants';
import { FormContact } from '../../types';
import { emailField, namesField } from '@/shared/constants/constants';
import { Button, Input } from '@/shared/components';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { RiFullscreenExitLine } from 'react-icons/ri';
import { useResponsive } from '@/shared/hooks';
import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import Textarea from '@/shared/components/Textarea';

const Contact: React.FC = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useForm<FormContact>({
    mode: 'onChange',
    defaultValues,
  });

  const [names, email, message] = watch(['names', 'email', 'message']);
  const { isMobile } = useResponsive();
  const { toggleMenuContact, toggleMenuContactAbout } = useContactAbout();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section
      className={clsx(
        'dark:bg-[#f3f3f3] py-20 px-8 w-full bg-[#1c1d25] text-white dark:text-black max-w-[585px] md:dark:bg-[#1c1d25] md:text-white md:dark:text-white',
        isMobile && 'h-screen relative',
        !isMobile && 'h-[calc(100vh-8rem)]'
      )}
    >
      {isMobile && (
        <button
          className='absolute top-4 left-4 text-3xl font-bold text-dark'
          onClick={toggleMenuContact}
        >
          <FaAngleDoubleRight />
        </button>
      )}
      {!isMobile && (
        <button
          className='absolute top-4 right-4 text-3xl font-bold text-white'
          onClick={toggleMenuContactAbout}
        >
          <RiFullscreenExitLine />
        </button>
      )}
      <div className='w-full'>
        <h2 className='text-4xl font-bold'>Let's talk.</h2>
        <p className='mb-4'>
          New projects, freelance inquiry or even a coffee.
        </p>
        <form onSubmit={handleSubmit} className='mt-10'>
          <div>
            <Input
              required
              fullWidth
              id='names'
              type='text'
              error={errors.names?.message}
              label='Names'
              {...register('names', namesField)}
            />
          </div>
          <div>
            <Input
              required
              label='Email'
              id='email'
              type='text'
              error={errors.email?.message}
              {...register('email', emailField)}
            />
          </div>
          <div className='mb-4'>
            <Textarea
              label='Message'
              required
              id='message'
              error={errors.message?.message}
              {...register('message')}
            />
          </div>

          <Button type='submit'>Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
