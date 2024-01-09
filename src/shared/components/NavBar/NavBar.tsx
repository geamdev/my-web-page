import clsx from 'clsx';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';

import { useContactAbout } from '@/shared/contexts/ContactAboutContext';
import { useTheme } from '@/shared/contexts/DarkModeContext';
import { useResponsive } from '@/shared/hooks';

interface NavBarProps {
  project?: boolean;
  casa?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ project, casa = true }) => {
  const { theme, toggleTheme } = useTheme();
  const { toggleMenuNav, toggleMenuContactAbout } = useContactAbout();

  const { isMobile } = useResponsive();
  const t = useTranslations();

  const home = t('NAVBAR_HOME');
  const skills = t('NAVBAR_SKILLS');
  const projects = t('NAVBAR_PROJECTS');
  const contact = t('NAVBAR_CONTACT');

  const routesLinks = [
    {
      title: home,
      href: '/',
    },
    {
      title: skills,
      href: '#skills',
    },
    {
      title: projects,
      href: '#projects',
    },
    {
      title: contact,
      href: '#',
      onClick: () => toggleMenuContactAbout(),
    },
  ];

  const routesLinksProject = [
    {
      title: home,
      href: '/',
    },
    {
      title: contact,
      href: '#',
      onClick: () => toggleMenuContactAbout(),
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        if (theme === 'dark') {
          htmlElement.classList.add('dark');
        } else {
          htmlElement.classList.remove('dark');
        }
      }
    }
  }, [theme]);

  const handleChangeTheme = () => {
    toggleTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header
      className={clsx(
        'lg:px-[150px] tw-bg-primary dark:bg-[#1c1d25] dark:text-white md:px-[50px]',
      )}
    >
      {isMobile ? (
        <nav className='w-full'>
          <div className='flex justify-between w-full p-4 text-2xl'>
            <button onClick={handleChangeTheme}>
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </button>
            <button onClick={toggleMenuNav}>
              <FaBarsStaggered />
            </button>
          </div>
        </nav>
      ) : (
        <nav className='flex justify-between items-center p-4 cursor-pointer text-lg'>
          <ul className='flex justify-center items-center list-none gap-2'>
            <li className='flex gap-2'>
              <button onClick={handleChangeTheme}>
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
              </button>
            </li>
          </ul>
          <ul className='flex justify-center items-center list-none gap-8'>
            <li className='flex gap-4 li '>
              {casa &&
                !project &&
                routesLinks.map((link, index) => (
                  <Link href={link.href} key={index} onClick={link.onClick}>
                    {link.title}
                  </Link>
                ))}
              {project &&
                routesLinksProject.map((link, index) => (
                  <Link href={link.href} key={index} onClick={link.onClick}>
                    {link.title}
                  </Link>
                ))}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
