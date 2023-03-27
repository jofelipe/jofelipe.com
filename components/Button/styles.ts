import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.span`
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  padding: 16px 24px;
  border: 2px solid ${(props) => props.theme.colors.background};
  box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.1s linear;

  &:hover {
    background: ${(props) => shade(0.2, props.theme.colors.primary)};
    box-shadow: 0px 0px 0px 1px
      ${(props) => shade(0.2, props.theme.colors.primary)};
  }

  &.center {
    margin: 0 auto;
  }
`;
