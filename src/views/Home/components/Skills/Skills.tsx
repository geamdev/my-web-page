import { SvgSkills } from '@/assets';
import { useResponsive } from '@/shared/hooks';
import { useTranslations } from 'next-intl';

const Skills: React.FC = () => {
  const { isDesktop } = useResponsive();
  const t = useTranslations();

  return (
    <section
      id='skills'
      className='bg-white lg:h-[calc(100vh)] dark:bg-[#1c1d25] pb-8 lg:px-[150px] tw-text-primary dark:text-white flex flex-col md:flex-row items-center gap-4 lg:gap-15 md:pt-8 lg:justify-center'
    >
      <div className='px-4 md:px-[50px] pt-4 min-w-[300px] max-w-[600px]'>
        <h2 className='text-4xl lg:text-5xl font-bold'>{t('SKILLS_TITLE')}</h2>
        <p className='text-lg lg:text-xl dark:tw-text-secondary-dark'>
          <i>{t('SKILLS_DESCRIPTION')}</i>
        </p>
      </div>
      <div className='min-w-[300px] md:mr-[50px]'>
        <SvgSkills
          width={!isDesktop ? 300 : 500}
          height={!isDesktop ? 300 : 500}
        />
      </div>
    </section>
  );
};

export default Skills;
