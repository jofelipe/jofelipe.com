import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 48px;
  text-align: center;

  p {
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    margin: 0;
  }

  @media (max-width: 767px) {
    padding: 0 32px 32px;
  }
`;
