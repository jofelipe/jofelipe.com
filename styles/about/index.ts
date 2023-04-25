import styled, { css } from 'styled-components';

const marginBottomHome = css`
  margin-bottom: 64px;

  @media (max-width: 1140px) {
    margin-bottom: 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  align-items: stretch;

  ${marginBottomHome};

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding-top: 16px;
  }
`;

export const Text = styled.article`
  flex: 0 0 60%;
  padding: 0 32px 0 64px;

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

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 64px;
    line-height: 74px;
    font-weight: 700;
    margin: 0 0 24px;
  }

  @media (min-width: 1900px) {
    padding-left: 0;
  }

  @media (max-width: 1280px) {
    flex: 0 0 50%;
    padding-right: 0;
  }

  @media (max-width: 1140px) {
    margin-bottom: 48px;
    padding: 0 48px;

    h1 {
      font-size: 56px;
      line-height: 64px;
    }

    p {
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media (max-width: 767px) {
    padding: 0 32px;

    h1 {
      font-size: 40px;
      line-height: 50px;
    }
  }
`;

export const ExperienceSkills = styled.section`
  display: flex;
  padding: 0 64px;
  flex: 1;

  h2 {
    margin: 24px 0 48px;
  }

  @media (min-width: 1900px) {
    padding-right: 0;
  }

  @media (max-width: 1140px) {
    padding-left: 48px;
  }

  @media (max-width: 960px) {
    padding: 0 48px;
  }

  @media (max-width: 767px) {
    display: block;
    padding: 0 32px;

    h2 {
      margin: 0 0 32px;
    }
  }
`;

export const Experience = styled.div`
  flex: 0 0 60%;
  padding-right: 32px;

  .experience-list {
    li {
      margin-bottom: 32px;
      list-style: none;
      position: relative;
      padding-left: 24px;

      &:before {
        background: ${(props) => props.theme.colors.text};
        content: '';
        width: 7px;
        height: 7px;
        display: block;
        position: absolute;
        top: 3px;
        left: 0;
        z-index: 2;
      }

      &:after {
        content: '';
        height: 100%;
        display: block;
        position: absolute;
        top: 16px;
        left: 3px;
        border-left: 1px dashed #666;
      }
    }

    .period {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .role {
      color: #fff;
      display: block;
    }

    .name {
      font-weight: 300;
    }
  }

  @media (max-width: 1400px) {
    flex: 0 0 50%;
    padding-right: 24px;
  }

  @media (max-width: 767px) {
    margin-bottom: 64px;
    padding: 0;
  }
`;

export const Skills = styled.div`
  flex: 1;
  padding-left: 32px;

  h2 {
    margin-bottom: 48px;
  }

  li {
    list-style: none;
    font-size: 18px;
    line-height: 24px;
  }

  .spacing {
    margin-bottom: 24px;
  }

  @media (max-width: 767px) {
    padding: 0;

    h2 {
      margin-bottom: 32px;
    }
  }
`;
