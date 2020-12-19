import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title="Jonathan Felipe"
        titleTemplate="%s - Jonathan Felipe"
        description="Site pessoal do Desenvolvedor Front-end Jonathan Felipe. Um espaço para divulgação de seus projetos e posts relacionados ao seu trabalho."
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
