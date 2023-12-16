import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { defaultValues } from '../../constants';
import { FormContact } from '../../types';
import { emailField, namesField } from '@/shared/constants/constants';
import { Button, Input } from '@/shared/components';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useResponsive } from '@/shared/hooks';
import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import Textarea from '@/shared/components/Textarea';
import { useTranslations } from 'next-intl';
import { useContact } from './hooks';

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
  const t = useTranslations();
  const { enviarMensaje, loading } = useContact();
  const { isMobile } = useResponsive();
  const { toggleMenuContact, toggleMenuContactAbout } = useContactAbout();

  const data = {
    names,
    email,
    message,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await enviarMensaje(data);
    if (result) {
      toggleMenuContactAbout();
    }
  };
  return (
    <section
      className={clsx(
        'dark:bg-[#f3f3f3] py-20 px-8 w-full bg-[#1c1d25] text-white dark:text-black max-w-[585px] max-h-[655px] md:dark:bg-[#1c1d25] md:text-white md:dark:text-white',
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
          <IoMdClose />
        </button>
      )}
      <div className='w-full'>
        <h2 className='text-4xl font-bold'>{t('LETS_TALK')}.</h2>
        <p className='mb-4'>{t('INQUIRY')}</p>
        <form onSubmit={handleSubmit} className='mt-10'>
          <div>
            <Input
              required
              fullWidth
              id='names'
              type='text'
              error={errors.names?.message}
              label={t('NAMES')}
              {...register('names', namesField)}
            />
          </div>
          <div>
            <Input
              required
              label={t('EMAIL')}
              id='email'
              type='text'
              error={errors.email?.message}
              {...register('email', emailField)}
            />
          </div>
          <div className='mb-4'>
            <Textarea
              label={t('MESSAGE')}
              required
              id='message'
              error={errors.message?.message}
              {...register('message')}
            />
          </div>

          <Button type='submit' loading={loading}>
            {t('SEND_MESSAGE')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
