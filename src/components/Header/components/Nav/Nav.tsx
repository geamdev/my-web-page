'use client';

import { ThemeToggleContext } from '@/contexts';
import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { NavStyles, Button, List, Item, StyledLink, Links } from './Nav.styles';

const Nav: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeToggleContext);
  return (
    <NavStyles>
      <List>
        <Item>
          <Button onClick={toggleTheme}>
            {isDarkTheme ? <FaMoon /> : <FaSun />}
          </Button>
        </Item>
      </List>
      <List>
        <Item>
          <StyledLink href='/'>Home</StyledLink>
        </Item>
        <Item>
          <Links href='#about'>About Me</Links>
        </Item>
        <Item>
          <Links href='#skills'>Skills</Links>
        </Item>
        <Item>
          <Links href='#projects'>Projects</Links>
        </Item>
        <Item>
          <Links href='#contact'>Contact Me</Links>
        </Item>
      </List>
    </NavStyles>
  );
};

export default Nav;
