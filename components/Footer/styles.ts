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

    a {
      display: inline-block;
      font-size: 80%;
    }
  }

  @media (max-width: 767px) {
    padding: 0 32px 32px;
  }
`;

export const NowPlaying = styled.div`
  background: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.card};
  display: inline-flex;
  align-items: center;
  text-align: left;
  margin-bottom: 24px;
  height: 64px;
  max-width: 100%;

  a {
    color: ${(props) => props.theme.colors.textSecondary};
    display: block;
    max-width: 216px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cover {
    width: 64px;
    height: 64px;
    margin: -1px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 16px;

    strong {
      margin-bottom: 2px;
    }

    p {
      line-height: 18px;
    }
  }

  .animation {
    padding-right: 16px;
  }
`;
