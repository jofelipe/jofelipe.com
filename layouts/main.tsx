import GoogleFonts from 'next-google-fonts';

import Header from 'components/Header';

import 'normalize.css';
import GlobalStyle from 'styles/global';

import { Wrapper } from './styles';

const Main = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" />

      <Header />

      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}

export default Main;

