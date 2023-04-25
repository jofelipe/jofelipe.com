import styled from 'styled-components';

export const Button = styled.span`
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  padding: 16px 24px;
  transition: all 0.1s linear;

  &:hover {
    background: #fff;
    color: ${(props) => props.theme.colors.primary};
  }

  svg {
    margin-left: 4px;
  }

  &.center {
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
