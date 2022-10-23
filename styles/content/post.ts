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
  }

  ul {
    margin: 0 0 32px;

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
    border-left: 4px solid;
    padding-left: 24px;
    margin: 0 0 32px;
    font-style: italic;
  }

  .margin {
    margin-bottom: 32px;
  }

  ol {
    margin: 0 0 32px;

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

    .btn-back {
      margin-right: 16px;

      svg {
        width: 24px;
      }
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
  }

  svg {
    margin-right: 8px;
    position: relative;
    top: -1px;
  }

  .post-date {
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

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;

    svg {
      width: 16px;
    }

    .post-date {
      margin: 0 0 8px;

      &:after {
        content: none;
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
