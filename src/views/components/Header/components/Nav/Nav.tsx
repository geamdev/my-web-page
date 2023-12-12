import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';
import { useResponsive } from '@/shared/hooks';
import { FaBarsStaggered } from 'react-icons/fa6';

const links = ['About Me', 'Skills', 'Projects', 'Contact'];

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  });

  const { isMobile } = useResponsive();

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
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMobile ? (
        <nav className='w-full  dark:bg-[#1c1d25] dark:text-white'>
          <div className='flex justify-between w-full p-4 text-2xl'>
            <button onClick={handleChangeTheme}>
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </button>
            <button onClick={handleMenuToggle}>
              <FaBarsStaggered />
            </button>
          </div>
          {isMenuOpen && (
            <div className=''>
              <ul className='flex flex-col items-center list-none'>
                {links.map((link, index) => (
                  <li className='flex gap-4' key={index}>
                    <Link href={`#${link.toLowerCase().replace(' ', '-')}`}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      ) : (
        <nav className='flex justify-between items-center p-4 cursor-pointer dark:bg-[#1c1d25] dark:text-white text-lg'>
          <ul className='flex justify-center items-center list-none gap-2'>
            <li className='flex gap-2'>
              <button onClick={handleChangeTheme}>
                {theme ? <FaMoon /> : <FaSun />}
              </button>
            </li>
          </ul>
          <ul className='flex justify-center items-center list-none gap-8'>
            <li className='flex gap-4 li'>
              {links.map((link, index) => (
                <Link
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  key={index}
                >
                  {link}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
