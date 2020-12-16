import { FC } from 'react';

import GoogleFonts from 'next-google-fonts';

import Header from 'components/Header';

import 'normalize.css';
import GlobalStyle from 'styles/global';

interface ILayout {
  headerStatic?: boolean;
}

const Main: FC<ILayout> = ({ headerStatic, children }) => {
  return (
    <>
      <GlobalStyle />

      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" />

      <Header isStatic={headerStatic} />

      <main>
        {children}
      </main>
    </>
  )
}

export default Main;

