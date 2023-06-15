import { ITheme } from '@/interfaces';
import Link from 'next/link';
import styled from '@emotion/styled';

export const NavStyles = styled.nav<Partial<ITheme>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  margin: 0 5%;
`;

export const Button = styled.button<Partial<ITheme>>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: none;
  cursor: pointer;
  gap: 0.5rem;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
`;

export const Item = styled.li`
  margin-right: 0.5rem;
`;

export const StyledLink = styled(Link)<Partial<ITheme>>`
  font-family: 'Outfit', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  gap: 0.5rem;
`;

export const Links = styled.a<Partial<ITheme>>`
  font-family: 'Outfit', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  gap: 0.5rem;
`;
