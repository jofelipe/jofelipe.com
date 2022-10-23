import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    height: 100%;
  }
  
  body {
    background: #222;
    color: #DDD;
    font-family: 'Archivo', Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  main {
    max-width: 1600px;
    margin: 0 auto;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  .mansory {
    column-count: 2;
    column-gap: 8px;

    &:hover a {
      opacity: 0.25;
    }

    a:hover {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    .mansory {
      column-count: 1;
    }
  }
`;
