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
      color: ${(props) => props.theme.colors.textSecondary};
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &:hover {
        color: ${(props) => props.theme.colors.text};

        .tooltip {
          opacity: 1;
        }
      }

      .tooltip {
        position: absolute;
        top: -1.5px;
        right: -16px;
        opacity: 0;
        transition: all 0.1s linear;
      }
    }
  }

  .mail {
    display: block;
    position: relative;
    left: -2px;
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
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .animation {
    padding-right: 16px;
  }
`;
