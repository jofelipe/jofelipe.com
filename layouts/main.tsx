import { FC } from 'react';

import GoogleFonts from 'next-google-fonts';

import Header from 'components/Header';

import 'normalize.css';
import GlobalStyle from 'styles/global';

interface ILayout {
  headerFixed?: boolean;
}

const Main: FC<ILayout> = ({ headerFixed, children }) => {
  return (
    <>
      <GlobalStyle />

      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" />

      <Header isFixed={headerFixed} />

      <main>
        {children}
      </main>
    </>
  )
}

export default Main;

