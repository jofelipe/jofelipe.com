import styled, { css } from 'styled-components';

interface IHeader {
  isStatic: boolean;
}

interface IMenu {
  isOpen: boolean;
}

export const Wrapper = styled.header<IHeader>`
  background: ${(props) => props.theme.colors.background};
  padding: 64px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  .alignment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
  }

  .logo {
    height: 50px;
    display: block;
    width: 180px;
  }

  ${(props) =>
    props.isStatic &&
    css`
      position: static;
    `}

  @media (max-width: 1400px) {
    padding: 48px 64px;
  }

  @media (max-width: 960px) {
    padding: 48px;
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    position: static;
    padding: 32px;

    .logo {
      height: 37px;
      width: 140px;
    }

    .alignment {
      margin: 0;
    }
  }
`;

export const Menu = styled.nav<IMenu>`
  ul {
    display: flex;
  }

  li {
    list-style: none;
    font-size: 20px;

    &:not(:last-child) {
      margin-right: 48px;
    }
  }

  .active a {
    color: ${(props) => props.theme.colors.primary};
  }

  a {
    color: #fff;
    transition: all 0.15s linear;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (max-width: 960px) {
    li {
      font-size: 18px;

      &:not(:last-child) {
        margin-right: 32px;
      }
    }
  }

  @media (max-width: 767px) {
    display: none;

    ul {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    li {
      font-size: 24px;
      font-weight: 700;

      &:not(:last-child) {
        margin-right: 0;
      }
    }

    a {
      display: block;
      padding: 16px 0;
    }

    ${(props) =>
      props.isOpen &&
      css`
        display: flex;
        align-items: center;
        position: fixed;
        background: ${(props) => props.theme.colors.card};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 15;
      `}
  }
`;

export const MobileMenu = styled.button<IMenu>`
  background: none;
  border: 0;
  width: 24px;
  padding: 3px 0;
  position: relative;
  z-index: 20;

  .fill {
    background: #fff;
    height: 3px;
    display: block;
    transition: all 0.1s linear;
    width: 75%;
    margin-left: 25%;

    &:nth-child(2) {
      width: 100%;
      margin-left: 0;
    }

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }

  &:focus {
    outline: 0;
  }

  ${(props) =>
    props.isOpen &&
    css`
      position: fixed;
      top: 32px;
      right: 32px;
      padding-top: 10px;

      .fill {
        &:first-child {
          width: 100%;
          margin-left: 0;
          transform: rotate(-45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:last-child {
          transform: rotate(45deg);
          margin: -7px 0 0 0;
          width: 100%;
        }
      }
    `}

  @media (min-width: 767px) {
    display: none;
  }
`;
