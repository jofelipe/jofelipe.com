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

  .masonry {
    display: flex;
    margin-left: -8px;
    width: auto;
  }

  .masonry-column {
    padding-left: 8px;
    background-clip: padding-box;
  }

  @media (min-width: 960px) {

  .text-highlight {
    display: inline-block;
    position: relative;

    &:before {
      background-color: ${(props) => props.theme.colors.primary};
      content: "";
      position: absolute;
      width: calc(100% + 4px);
      height: 15%;
      left: -2px;
      bottom: -2px;
      z-index: -1;
      transform: rotate(-1deg);
    }
  }
  
`;
