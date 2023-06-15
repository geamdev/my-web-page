import styled from '@emotion/styled';
import { ITheme } from '@/interfaces';
import Image from 'next/image';

export const ImageMe = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: 70%;
`;

export const Title = styled.h1`
  font-size: 14px;
`;
