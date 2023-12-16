import { Layout } from '@/shared/components';

import { Header, Skills } from './components';

const Home: React.FC = () => {
  return (
    <Layout
      title='Geampiere Jaramillo'
      description='Soy un apasionado de la tecnología, descubrí la programación cuando tenía 16 años, por lo que me especialicé en desarrollo web y actualmente mis tecnologías favoritas son ReactJS y NodeJS.'
      head={
        <>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta
            name='keywords'
            content='Geampiere Jaramillo, Geampiere, Jaramillo, Full Stack'
          />
          <meta name='author' content='Geampiere Jaramillo' />
          <meta
            name='copyright'
            content='© 2023 Geampiere Jaramillo | @geamdev'
          />
          <meta http-equiv='cache-control' content='no-cache' />
          <meta name='robots' content='index, follow' />
          <link rel='icon' href='/favicon.ico' sizes='any' />
        </>
      }
    >
      <Header />
      <Skills />
    </Layout>
  );
};

export default Home;
