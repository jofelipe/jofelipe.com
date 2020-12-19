import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 64px;
  overflow: hidden;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 64px;
  }

  .mansory {
    margin-bottom: 64px;

    &:hover a {
      opacity: 1;
    }
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

    .mansory {
      margin-bottom: 48px;
    }
  }
`;

export const Search = styled.div`
  position: relative;
  margin-bottom: 32px;

  svg {
    position: absolute;
    top: 0;
    left: 24px;
    bottom: 0;
    margin: auto;
  }

  input {
    background: #151515;
    border: 0;
    color: #666;
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
  font-size: 24px;

  @media (max-width: 960px) {
    font-size: 18px;
    margin-top: 8px;
    text-align: center;
  }
`;
