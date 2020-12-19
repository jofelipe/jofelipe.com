import styled, { css } from 'styled-components';
import { shade } from 'polished';

const titleHome = css`
  color: ${(props) => props.theme.colors.primary};
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 32px;

  @media (max-width: 1140px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 30px;
    margin-bottom: 24px;
  }
`;

const marginBottomHome = css`
  margin-bottom: 128px;

  @media (max-width: 1140px) {
    margin-bottom: 64px;
  }
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  align-items: stretch;
  padding-top: 155px;

  @media (max-width: 1400px) {
    padding-top: 124px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding-top: 16px;
  }
`;

export const TextHome = styled.article`
  flex: 0 0 50%;

  .fixed-scroll {
    width: 50%;
    position: fixed;
    padding: 0 64px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 32px;

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

    &:last-of-type {
      margin-bottom: 24px;
    }
  }

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 64px;
    line-height: 74px;
    font-weight: 900;
    margin: 0 0 24px;
  }

  .current-stack {
    display: flex;

    li {
      list-style: none;

      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }

  @media (max-width: 1140px) {
    .fixed-scroll {
      padding-right: 32px;
    }

    h1 {
      font-size: 56px;
      line-height: 64px;
    }

    p {
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media (max-width: 960px) {
    .fixed-scroll {
      position: static;
      width: 100%;
      padding: 0 48px;
      margin-bottom: 64px;
    }
  }

  @media (max-width: 767px) {
    .fixed-scroll {
      padding: 0 32px;
    }

    h1 {
      font-size: 40px;
      line-height: 50px;
    }

    .current-stack {
      display: flex;

      li {
        list-style: none;
        width: 32px;

        img {
          max-width: 100%;
          height: auto;
        }

        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
  }
`;

export const Content = styled.section`
  padding: 0 64px;
  flex: 1;

  @media (max-width: 1140px) {
    padding-left: 32px;
  }

  @media (max-width: 960px) {
    padding: 0 32px;
  }
`;

export const PhotoSocial = styled.div`
  background: url(/assets/svg/checkered.svg) no-repeat;
  display: flex;
  align-items: flex-end;
  width: 552px;
  ${marginBottomHome};

  div:nth-child(2) {
    margin: 81px 0 0 auto;
  }

  @media (max-width: 1400px) {
    width: 460px;

    div:nth-child(2) {
      margin-top: 161px;
      width: 184px !important;
      height: 184px !important;
    }
  }

  @media (max-width: 1140px) {
    width: 368px;
    position: relative;

    div:nth-child(2) {
      margin-top: 81px;
      position: absolute !important;
      top: 0;
      right: 0;
    }
  }

  @media (max-width: 960px) {
    margin: 0 auto 64px;
  }

  @media (max-width: 767px) {
    width: auto;
    margin: 0 -32px 64px;

    div:nth-child(2) {
      right: auto;
      left: 184px;
    }
  }
`;

export const Social = styled.div`
  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    margin-bottom: 24px;

    span {
      color: #666;
      text-decoration: line-through;
    }
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  a {
    .custom-fill {
      fill: ${(props) => props.theme.colors.text};
      transition: all 0.1s linear;
    }

    .custom-stroke {
      stroke: ${(props) => props.theme.colors.text};
      transition: all 0.1s linear;
    }

    &:hover {
      .custom-fill {
        fill: ${(props) => props.theme.colors.primary};
      }

      .custom-stroke {
        stroke: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 1140px) {
    margin-top: 252px;
  }

  @media (max-width: 1140px) {
    margin-left: 32px;
  }
`;

export const LatestPosts = styled.section`
  ${marginBottomHome};

  h2 {
    ${titleHome};
  }
`;

export const RecentProjects = styled.section`
  ${marginBottomHome};

  h2 {
    ${titleHome};
  }

  .hover-effect:hover a {
    opacity: 0.25;
  }
`;

export const Now = styled.section`
  ${marginBottomHome};

  h4 {
    ${titleHome};
  }

  p {
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 32px;

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

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1140px) {
    p {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
