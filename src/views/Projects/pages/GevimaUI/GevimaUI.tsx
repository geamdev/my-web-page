import gevimaUi from 'assets/GevimaUI.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';

import { Layout } from '@/shared/components';

const GevimaUI: React.FC = () => {
  return (
    <Layout
      project
      title='Project Gevima UI'
      description='Project Gevima UI of Geampiere Jaramillo'
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
      <div className='bg-white dark:bg-[#1c1d25] lg:px-[150px] tw-text-primary dark:text-white flex flex-col  gap-4  md:pt-8 lg:h-[calc(100vh-3.5rem)] py-4'>
        <div className='mx-auto px-4'>
          <div className='mb-4'>
            <Link
              href='/projects'
              className='flex gap-2 text-[#213B6D] dark:text-[#748FBD]'
            >
              <FaArrowLeft className='text-xl' />
              Volver
            </Link>
          </div>
          <p className='text-xl lg:text-xl dark:tw-text-secondary-dark min-w-[300px] max-w-[900px] mb-4'>
            GevimaUI es una biblioteca de componentes ReactJS de alta calidad y
            moderna, completamente escrita en TypeScript. Ofrece un conjunto de
            componentes intuitivos y estilizados, con herramientas de diseño
            integradas que facilitan el desarrollo. Es fácil de instalar y usar,
            promoviendo la eficiencia y la elegancia en el desarrollo de
            interfaces de usuario. Además, invita a la comunidad a contribuir y
            mejorar constantemente su conjunto de herramientas y documentación.
          </p>
          <Image src={gevimaUi} alt='Gevima UI' width={900} height={900} />
          <div className='flex mt-4 flex-col md:flex-row'>
            <h3 className='text-xl font-bold mr-2'>Tecnologias Usadas: </h3>
            <p className='text-xl'>ReactJS, TypeScript</p>
          </div>

          <div className='flex mt-6 md:mt-10 gap-2 justify-center flex-col md:flex-row'>
            <button className='mr-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center px-4 py-2 rounded-md gap-2'>
              Visitar Repositorio <FaGithub className='text-xl' />
            </button>
            <button className='bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center px-4 py-2 rounded-md gap-2'>
              Visitar Demo <TfiWorld className='text-xl' />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GevimaUI;