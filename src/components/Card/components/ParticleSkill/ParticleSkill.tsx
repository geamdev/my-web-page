import {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from 'react-particle-image';
import { Container, ParticleImages } from './ParticleSkill.styles';

interface Props {
  src?: string;
  scale?: number;
  color?: string;
}

const ParticleSkill: React.FC<Props> = ({ src = '', scale, color = '' }) => {
  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => color,
    radius: () => Math.random() * 1.2 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2,
      );
    },
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
  };
  return (
    <Container>
      <div>
        <ParticleImages
          src={src}
          scale={scale}
          entropy={10}
          maxParticles={2500}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor={'#000000'}
        />
      </div>
    </Container>
  );
};

export default ParticleSkill;
