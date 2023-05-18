import { shade } from 'polished';
import styled from 'styled-components';

interface IContent {
  isPage?: boolean;
}

export const Wrapper = styled.article`
  margin-bottom: 64px;

  @media (max-width: 767px) {
    padding-top: 16px;
    margin-bottom: 48px;
  }
`;

export const Navigation = styled.nav`
  background: ${(props) => props.theme.colors.card};
  position: sticky;
  top: 0;
  z-index: 10;

  ul {
    display: flex;
    max-width: 780px;
    margin: 0 auto;

    li {
      list-style: none;
      width: 33.3%;
    }
  }

  button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.text};
    border: 0;
    cursor: pointer;
    font-size: 18px;
    padding: 24px 32px;
    width: 100%;
    transition: all 0.1s linear;

    &.active {
      background: ${(props) => shade(0.15, props.theme.colors.card)};
    }

    svg {
      margin-right: 8px;
    }
  }

  @media (min-width: 960px) {
    button {
      &:hover {
        background: ${(props) => shade(0.15, props.theme.colors.card)};
      }
    }
  }

  @media (max-width: 480px) {
    button {
      padding: 16px 24px;

      svg {
        display: none !important;
      }
    }
  }
`;

export const Content = styled.div<IContent>`
  margin: 0 auto;
  max-width: 780px;
  width: 100%;
  margin-bottom: ${(props) => (props.isPage ? '64px' : '0')};

  header {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  .btn-back {
    background: none;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    padding: 0;
    border: 0;
    outline: 0;
    margin: 0 24px 0 -8px;
  }

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 48px;
    line-height: 58px;
    font-weight: 700;
  }

  h2 {
    font-size: 36px;
    line-height: 46px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  h3 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 16px;
  }

  h5 {
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 20px;
    line-height: 32px;
    font-weight: 300;
    font-style: italic;
    margin-bottom: 24px;
  }

  hr {
    border: 0;
    border-top: 1px solid ${(props) => props.theme.colors.card};
    margin: 0 0 32px;
  }

  p {
    font-size: 20px;
    line-height: 32px;
    margin: 0 0 32px;

    &:last-of-type:not(.margin) {
      margin-bottom: 0;
    }

    a {
      color: #fff;
      border-bottom: 1px dotted #fff;
      padding-bottom: 2px;
      transition: all 0.1s linear;

      &:hover {
        border-bottom-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.primary};
      }
    }

    code {
      background: #2a2c30;
      color: hsl(220, 14%, 71%);
      text-shadow: 0 1px rgba(0, 0, 0, 0.3);
      font: 14px 'Fira Code', 'Fira Mono', Menlo, Consolas, 'DejaVu Sans Mono',
        monospace;
      padding: 4px 8px;
      border-radius: 0.3em;

      &::selection {
        background: hsl(220, 13%, 28%);
        color: inherit;
        text-shadow: none;
      }
    }
  }

  ul {
    margin: 0 0 32px;
    padding: 0;

    li {
      font-size: 20px;
      line-height: 32px;
      list-style: disc inside none;

      a {
        color: #fff;
        border-bottom: 1px dotted #fff;
        padding-bottom: 2px;
        transition: all 0.1s linear;

        &:hover {
          border-bottom-color: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }

  blockquote {
    border-left: 4px solid ${(props) => props.theme.colors.card};
    margin: 0 0 32px;
    padding-left: 24px;

    p {
      font: 300 18px/24px Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium',
        'Nimbus Sans Narrow', sans-serif-condensed, sans-serif;
    }
  }

  .margin {
    margin-bottom: 32px;
  }

  ol {
    margin: 0 0 32px;
    padding: 0;

    li {
      font-size: 20px;
      line-height: 32px;
      list-style: decimal inside none;

      a {
        color: #fff;
        border-bottom: 1px dotted #fff;
        padding-bottom: 2px;
        transition: all 0.1s linear;

        &:hover {
          border-bottom-color: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }

  img {
    display: block;
    margin: 0 auto 32px;
    max-width: 100%;
    height: auto;
  }

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    padding-top: 64px;
    justify-content: space-between;

    .bg {
      background: ${(props) => props.theme.colors.card};
      border-left: 8px solid ${(props) => props.theme.colors.primary};
      display: flex;
      align-items: center;
      padding: 8px 16px;

      svg {
        margin-right: 16px;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin-bottom: 0;
    }

    button {
      background: none;
      border: 1px dashed ${(props) => props.theme.colors.card};
      color: ${(props) => props.theme.colors.text};
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 8px 8px 8px 12px;
      transition: all 0.1s linear;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }

      svg {
        margin-left: 4px;
      }
    }
  }

  .text-content {
    margin-bottom: 64px;
  }

  pre[class*='language-'] {
    margin-bottom: 32px;
  }

  &.project-page img {
    max-width: none;
    margin: 48px auto 48px 50%;
    transform: translateX(-50%);
    image-rendering: pixelated;
  }

  @media (max-width: 1600px) {
    &.project-page img {
      max-width: 85vw;
      image-rendering: initial;
    }
  }

  @media (max-width: 1140px) {
    p,
    ul li,
    ol li {
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media (max-width: 960px) {
    padding: 0 48px;

    h1 {
      font-size: 40px;
      line-height: 50px;
    }

    h2 {
      font-size: 30px;
      line-height: 40px;
    }
  }

  @media (max-width: 767px) {
    padding: ${(props) => (props.isPage ? '0' : '0 32px')};

    header {
      margin-bottom: 8px;
    }

    h1 {
      font-size: 30px;
      line-height: 40px;
    }

    h2 {
      font-size: 22px;
      line-height: 32px;
    }

    h3 {
      font-size: 18px;
      line-height: 28px;
    }

    h4 {
      font-size: 16px;
      line-height: 24px;
    }

    blockquote p {
      font-size: 18px;
    }

    .btn-back {
      margin-right: 16px;

      svg {
        width: 24px;
      }
    }

    .title {
      padding-top: 32px;

      .bg {
        border-left-width: 4px;
      }
    }

    &.project-page img {
      margin-bottom: 32px;
      margin-top: 32px;
    }
  }
`;

export const PostInfo = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 16px;
  font-weight: 300;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  div {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 32px;

      &:after {
        content: '.';
        font-size: 20px;
        font-weight: 900;
        padding-left: 32px;
        position: relative;
        top: -5px;
      }
    }
  }

  svg {
    margin-right: 8px;
    position: relative;
    top: -1px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;

    svg {
      width: 16px;
    }

    div {
      &:not(:last-child) {
        margin: 0 0 8px;

        &:after {
          content: none;
        }
      }
    }
  }
`;

export const FeaturedImage = styled.div`
  background-position: center;
  background-size: cover;
  height: 480px;
  margin-bottom: 64px;

  @media (max-width: 960px) {
    height: 320px;
    margin-bottom: 48px;
  }

  @media (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const Pagination = styled.div`
  opacity: 0;
  transition: all 0.5s linear;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  & > div {
    position: fixed;
    top: 50%;
  }

  a {
    background: ${(props) => props.theme.colors.card};
    display: block;
    padding: 16px 24px;
    transition: all 0.1s linear;

    &:hover {
      background: ${(props) => shade(0.15, props.theme.colors.card)};
    }
  }

  .previous {
    left: 0;
  }

  .next {
    right: 0;
  }

  @media (max-width: 1140px) {
    display: flex;
    justify-content: space-between;
    margin-top: 36px;

    & > div {
      position: static;
    }
  }

  @media (max-width: 480px) {
    a {
      background: ${(props) => props.theme.colors.primary};
      padding: 8px 16px;
    }
  }
`;

export const Comments = styled.div`
  padding-top: 48px;

  @media (max-width: 767px) {
    padding-top: 32px;
  }
`;

export const BackToTop = styled.button`
  background: none;
  border: 0;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  position: fixed;
  right: 16px;
  bottom: 24px;
  opacity: 0;
  transition: all 0.2s linear;

  &.active {
    opacity: 1;
  }

  &:focus {
    outline: 0;
  }

  @media (max-width: 767px) {
    right: 0;
    bottom: 8px;

    svg {
      width: 24px;
    }
  }
`;
