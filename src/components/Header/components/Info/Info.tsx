import { IMAGES } from '@/constants';
import { MainContainer, ImageMe, Title, Text, Container } from './Info.styles';
const Info: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <ImageMe
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlZH-Jt5TP4U_ETtE4KlkY01Xa7ld0jSeCg&usqp=CAU'
          alt='Geam'
          width={150}
          height={150}
        />
        <Text>
          Hi, I&#39;m <span>Geam</span>👋🏻
        </Text>
        <Title>
          I&#39;m a <span>Frontend Developer</span>
        </Title>
      </Container>
    </MainContainer>
  );
};

export default Info;
