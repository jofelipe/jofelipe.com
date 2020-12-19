import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.article`
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 8px;
  break-inside: avoid;

  a {
    background: ${(props) => props.theme.colors.card};
    color: #fff;
    display: block;
    padding: 24px;
    transition: all 0.1s linear;

    &:hover {
      background: ${(props) => shade(0.15, props.theme.colors.card)};
      opacity: 1 !important;
    }
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
    text-transform: uppercase;

    svg {
      margin-right: 8px;
    }
  }

  @media (max-width: 767px) {
    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
