import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.section`
  overflow: hidden;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 64px;
  }

  .masonry {
    margin-bottom: 64px;

    &:hover a {
      opacity: 1;
    }
  }

  @media (max-width: 1600px) {
    padding: 0 64px;
  }

  @media (max-width: 1140px) {
    padding: 16px 64px 0;
  }

  @media (max-width: 767px) {
    padding: 16px 32px 0;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    .masonry {
      margin-bottom: 48px;
    }
  }
`;

export const BlogHeader = styled.header`
  margin-bottom: 64px;
  text-align: center;

  h1 {
    margin-bottom: 0;
  }

  p {
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 767px) {
    margin-bottom: 32px;

    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

export const Search = styled.div`
  position: relative;
  margin-bottom: 32px;

  svg {
    color: ${(props) => props.theme.colors.text};
    position: absolute;
    top: 0;
    left: 24px;
    bottom: 0;
    margin: auto;
  }

  input {
    background: #151515;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: 300;
    padding: 24px 24px 24px 72px;
    outline: 0;
    width: 100%;
  }

  @media (max-width: 767px) {
    margin-bottom: 16px;

    svg {
      width: 24px;
    }

    input {
      font-size: 18px;
      padding: 16px 16px 16px 60px;
    }
  }
`;

export const NoPostsFound = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  break-inside: avoid;
  font-size: 20px;

  @media (max-width: 960px) {
    font-size: 18px;
    margin-top: 8px;
    text-align: center;
  }
`;

export const ErrorWrapper = styled.section`
  text-align: center;
  margin-bottom: 128px;

  p {
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 24px;
  }

  .btn-home {
    background: ${(props) => props.theme.colors.primary};
    border: 0;
    padding: 8px 16px;
    display: inline-block;
    transition: all 0.1s linear;

    &:hover {
      background: ${(props) => shade(0.2, props.theme.colors.primary)};
    }
  }

  @media (max-width: 1140px) {
    margin-bottom: 64px;

    p {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
