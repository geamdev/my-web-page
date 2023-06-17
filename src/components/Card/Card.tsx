import { IMAGES } from '@/constants';
import { Container, Cards } from './Card.styles';
import { ParticleSkill } from './components';
const Card: React.FC = () => {
  return (
    <Container>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_HTML} scale={0.86} color='#E44E25' />
        </div>
      </Cards>
      
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_CSS} scale={0.56} color='#0277BD' />
        </div>
      </Cards>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_JS} scale={0.17} color='#F1DB4F' />
        </div>
      </Cards>
      {/*
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_REACT} scale={0.66} color='#61DAFB' />
        </div>
      </Cards>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_TS} scale={0.60} color='#1E90FF' />
        </div>
      </Cards>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_NODE} scale={0.13} color='#4F9640' />
        </div>
      </Cards>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_MONGO} scale={0.13} color='#09934E' />
        </div>
      </Cards>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_GIT} scale={0.13} color='#F05033' />
        </div>
      </Cards>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_NPM} scale={0.13} color='#D72C34' />
        </div>
      </Cards>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_SASS} scale={0.13} color='#CD6799' />
        </div>
      </Cards>
      <Cards>
        <div>
          <ParticleSkill src={IMAGES.ICON_TAILWIND} scale={0.1} color='#07ADCA' />
        </div>
      </Cards> */}
    </Container>
  );
};

export default Card;
