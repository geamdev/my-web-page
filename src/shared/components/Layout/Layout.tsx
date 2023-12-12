import Head from 'next/head';
import React, { ReactNode } from 'react';

import NavBar from '../NavBar';

interface LayoutProps {
  title?: string;
  head?: ReactNode;
  children: ReactNode;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  head,
  title,
  description,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Default Title'}</title>
        <meta
          name='description'
          content={description || 'Default Description'}
        />
        {head}
      </Head>
      <div className='flex h-full bg-primary dark:bg-[#1c1d25] dark:text-white'>
        <div className='relative w-full h-full overflow-y-auto'>
          <NavBar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
