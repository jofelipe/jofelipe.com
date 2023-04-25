import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { Archivo } from 'next/font/google';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

const archivo = Archivo({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3437870, 6);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title="Jonathan Felipe"
        titleTemplate="%s - Jonathan Felipe"
        description="Site pessoal de Jonathan Felipe, UI Developer. Um espaço para divulgação de seus projetos e posts relacionados ao seu trabalho."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: `${process.env.NEXT_PUBLIC_URL}`,
          site_name: 'Jonathan Felipe',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/assets/img/jonathan.png`,
              alt: 'Jonathan Felipe',
            },
          ],
        }}
      />

      <div className={archivo.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
