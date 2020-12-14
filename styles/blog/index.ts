import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 64px;
  overflow: hidden;

  h1 {
    color: ${props => props.theme.colors.primary};
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
  }
`;