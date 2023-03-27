import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.article`
  margin-bottom: 8px;

  a {
    background: ${(props) => props.theme.colors.card};
    color: #fff;
    display: block;
    transition: all 0.1s linear;

    &:hover {
      background: ${(props) => shade(0.25, props.theme.colors.card)};
      opacity: 1 !important;

      img {
        opacity: 1 !important;
      }
    }
  }

  img {
    max-width: 100%;
    height: auto;
    transition: all 0.1s linear;
  }

  .spacing {
    padding: 24px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }

  span {
    color: ${(props) => props.theme.colors.textSecondary};
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 300;

    svg {
      margin-right: 8px;
      min-width: 16px;
    }
  }
`;
