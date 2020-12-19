import styled from 'styled-components';

export const Wrapper = styled.article`
  margin-bottom: 64px;

  @media (max-width: 767px) {
    padding-top: 16px;
    margin-bottom: 48px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 780px;
  width: 100%;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 48px;
    line-height: 58px;
    font-weight: 900;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 36px;
    line-height: 46px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 24px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  img {
    margin-bottom: 24px;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1140px) {
    p {
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
    padding: 0 32px;

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
  background-color: #fff;
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
  padding-top: 32px;
`;
