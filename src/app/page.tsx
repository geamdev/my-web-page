'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import useDarkMode from 'use-dark-mode';
import { ThemeToggleContext } from '@/contexts';
import { themes } from '@/themes';

import { Header, Skills } from '../components';

export default function Home() {
  const darkMode = useDarkMode(true);
  const currentTheme = darkMode.value ? themes.dark : themes.light;

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      {isMounted && (
        <ThemeToggleContext.Provider
          value={{
            isDarkTheme: darkMode.value,
            toggleTheme: darkMode.toggle,
          }}
        >
          <Header />
          <Skills />
        </ThemeToggleContext.Provider>
      )}
    </ThemeProvider>
  );
}
