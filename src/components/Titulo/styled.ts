import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15%;
  margin-bottom: 30px;

  .titulo {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .h1 {
      position: relative;
      z-index: 2;
      font-size: 4.5rem;
      margin-top: 65px;
      color: ${({ theme }) => theme.colors.white400};

      span {
        font-size: 4.5rem;
        color: ${({ theme }) => theme.colors.purple};
      }
    }

    h2 {
      position: relative;
      z-index: 1;
      font-size: 5.5rem;
      margin-top: -150px;
      word-spacing: 80px; // espaço entre as palavras
      color: ${({ theme }) => theme.colors.blackTitle};
    }
  }

  @media (max-width: 720px) {

    .titulo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .h1 {
        position: relative;
        z-index: 2;
        font-size: 2.5rem;
        margin-top: 30px;
        color: ${({ theme }) => theme.colors.white400};

        span {
          font-size: 2.5rem;
          color: ${({ theme }) => theme.colors.purple};
        }
      }

      h2 {
        position: relative;
        z-index: 1;
        font-size: 2.2rem;
        margin-top: -60px;
        word-spacing: 20px; // espaço entre as palavras
        color: ${({ theme }) => theme.colors.blackTitle};
      }
    }
  }
`
