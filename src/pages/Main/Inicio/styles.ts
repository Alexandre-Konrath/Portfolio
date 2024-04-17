import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;

  .texto-esquerda {
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2rem;
      color: ${({ theme })  => theme.colors.purple};
    }

    .barrinha {
      width: 700px;
      height: 2px;

      margin-bottom: 10px;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.colors.purple};
    }

    h2 {
      color: ${({ theme }) => theme.colors.white400};
    }
  }

  .texto-direita {
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 10rem;
      color: ${({ theme }) => theme.colors.white400};

      span {
        color: ${({ theme }) => theme.colors.purple};
      }
    }

    h2 {
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.white400};

      span {
        color: ${({ theme }) => theme.colors.purple};
      }
    }

    button {
      border: none;
      cursor: pointer;
      font-weight: bold;

      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme }) => theme.colors.white400};

      margin-top: 50px;
      font-size: 1.5rem;
      border-radius: 30px;
      padding: 15px 50px 15px 50px;

      transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.purple100};
        color: ${({ theme }) => theme.colors.white};

        box-shadow: 0px 0px 25px -10px ${({ theme }) => theme.colors.purple};
      }
    }
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .texto-esquerda {
      order: 2;
      width: 100%;
      height: 50%;

    h1 {
      font-size: 2rem;
    }

    .barrinha {
      display: none;
    }
  }

  .texto-direita {
    order: 1;
    width: 100%;
    height: 40%;

    h1 {
      font-size: 6rem;
    }

    h2 {
      font-size: 3rem;
    }

      button {
        font-size: 1rem;
        padding: 10px 25px 10px 25px;
      }
    }
  }
`
