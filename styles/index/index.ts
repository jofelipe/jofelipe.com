import styled, { css } from 'styled-components';
import { shade } from 'polished';

const titleHome = css`
  color: ${(props) => props.theme.colors.primary};
  font-size: 48px;
  font-weight: 700;
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

export const Wrapper = styled.div`
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
    line-height: 32px;
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
      margin-bottom: 48px;
    }
  }

  .wave-animation {
    animation-name: wave-animation;
    animation-duration: 3s;
    animation-iteration-count: 3;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
    15% { transform: rotate(14.0deg) }
    30% { transform: rotate(-8.0deg) }
    40% { transform: rotate(14.0deg) }
    50% { transform: rotate(-4.0deg) }
    60% { transform: rotate(10.0deg) }
    70% { transform: rotate( 0.0deg) }
   100% { transform: rotate( 0.0deg) }
  }

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 64px;
    line-height: 74px;
    font-weight: 700;
    margin: 0 0 24px;
  }

  @media (min-width: 1900px) {
    .fixed-scroll {
      max-width: 800px;
      padding-left: 0;
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
  }
`;

export const Content = styled.section`
  padding: 0 64px;
  flex: 1;

  @media (min-width: 1900px) {
    padding-right: 0;
  }

  @media (max-width: 1140px) {
    padding-left: 32px;
  }

  @media (max-width: 960px) {
    padding: 0 32px;
  }

  @media (max-width: 767px) {
    footer {
      padding: 0 0 32px;
    }
  }
`;

export const PhotoSocial = styled.div`
  background: url(/assets/svg/checkered.svg) no-repeat right top;
  display: flex;
  align-items: flex-end;
  margin-left: auto;
  position: relative;
  ${marginBottomHome};

  img {
    margin: 81px 0 0 auto !important;
  }

  &:before {
    content: none;
    background: linear-gradient(
      to right,
      rgba(34, 34, 34, 1) 0%,
      rgba(34, 34, 34, 1) 25%,
      rgba(34, 34, 34, 0) 100%
    );
    width: 25%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }

  @media (max-width: 1700px) {
    &:before {
      content: '';
    }
  }

  @media (max-width: 1400px) {
    img {
      margin-top: 161px !important;
      width: 184px !important;
      height: 184px !important;
    }
  }

  @media (max-width: 1140px) {
    img {
      margin-top: 81px !important;
      position: absolute !important;
      top: 0;
      right: 0;
    }
  }

  @media (max-width: 960px) {
    margin: 0 auto 64px;
  }

  @media (max-width: 767px) {
    background-position: left top;
    width: auto;
    margin: 0 -32px 64px;

    img {
      right: auto;
      left: 184px;
    }

    &:before {
      content: none;
    }
  }
`;

export const Social = styled.div`
  position: relative;

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
