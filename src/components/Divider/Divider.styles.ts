import { ITheme } from '@/interfaces';
import styled from '@emotion/styled';

export const DividerStyles = styled.div<Partial<ITheme>>`
  margin: 0 5%;
  height: 1px;
  background-color: #000;
`;
