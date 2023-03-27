import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.article`
  margin-bottom: 8px;

  a {
    background: ${(props) => props.theme.colors.card};
    color: #fff;
    display: block;
    padding: 24px;
    transition: all 0.1s linear;

    &:hover {
      background: ${(props) => shade(0.25, props.theme.colors.card)};
    }
  }

  time {
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    margin: 24px 0;

    svg {
      color: ${(props) => props.theme.colors.primary};
      vertical-align: middle !important;
    }
  }

  span {
    color: ${(props) => props.theme.colors.textSecondary};
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
