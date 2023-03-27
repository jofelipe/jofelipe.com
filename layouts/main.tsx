import { FC } from 'react';

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

      <Header isStatic={headerStatic} />

      <main>{children}</main>
    </>
  );
};

export default Main;
