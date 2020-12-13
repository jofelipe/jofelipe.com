import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.article`
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 8px;
  break-inside: avoid;

  a {
    background: ${props => props.theme.colors.card};
    color: #fff;
    display: block;
    padding: 24px;
    transition: all .1s linear;

    &:hover {
      background: ${props => shade(0.15, props.theme.colors.card)};
    }
  }

  time {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    margin: 24px 0;
  }

  span {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;

    svg {
      color: #999;
      margin-right: 8px;
    }
  }
`;