import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextIntlClientProvider } from 'next-intl';

import '../styles/globals.css';

import { ContactAboutProvider } from '@/shared/contexts/ContactAboutContext';
import { ThemeProvider } from '@/shared/contexts/DarkModeContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone='Europe/Vienna'
      messages={pageProps.messages}
    >
      <ThemeProvider>
        <ContactAboutProvider>
          <Component {...pageProps} />
        </ContactAboutProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
