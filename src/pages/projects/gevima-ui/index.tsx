import { GetStaticProps } from 'next';
import { League_Spartan } from 'next/font/google';
import { useEffect, useState } from 'react';

import { Loader } from '@/shared/components';
import { GevimaUI } from '@/views/Projects/pages';

const inter = League_Spartan({ subsets: ['latin'] });
const MyLibraryGevimaUI = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={`min-h-screen ${inter.className}`}>
      <GevimaUI />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || 'en';

  try {
    const messages = (await import(`../i18n/${locale}.json`)).default;

    return {
      props: {
        messages,
      },
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);

    return {
      notFound: true,
    };
  }
};

export default MyLibraryGevimaUI;
