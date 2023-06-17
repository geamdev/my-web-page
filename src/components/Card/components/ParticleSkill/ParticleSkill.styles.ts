import { ITheme } from '@/interfaces';
import styled from '@emotion/styled';
import ParticleImage from 'react-particle-image';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ParticleImages = styled(ParticleImage)<Partial<ITheme>>`
  width: 100%;
  height: 100%;
`;
