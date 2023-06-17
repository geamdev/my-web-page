import styled from '@emotion/styled';
import { ITheme } from '@/interfaces';
import Image from 'next/image';

export const ImageMe = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: 70%;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 400;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;
