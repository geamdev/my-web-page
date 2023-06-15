import { IMAGES } from '@/constants';
import { ImageMe } from './Info.styles';
const Info: React.FC = () => {
  return (
    <main>
      <div>
        <ImageMe
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlZH-Jt5TP4U_ETtE4KlkY01Xa7ld0jSeCg&usqp=CAU'
          alt='Geam'
          width={150}
          height={150}
        />
        <h1>
          Hi, I&#39;m <span>Geam</span>👋🏻
        </h1>
        <p>
          I&#39;m a <span>Frontend Developer</span>
        </p>
      </div>
    </main>
  );
};

export default Info;
