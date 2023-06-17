import styled from '@emotion/styled';
import { ITheme } from '@/interfaces';

export const Container = styled.header<Partial<ITheme>>`
  background: ${({ theme }) => theme.colors.background};
  background-position: 0 0, 15px 15px;
  background-size: 20px 20px;
  background-attachment: fixed;
  height: 100vh;
`;
