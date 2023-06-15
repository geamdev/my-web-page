import { createContext } from 'react';

const ThemeToggleContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export default ThemeToggleContext;
