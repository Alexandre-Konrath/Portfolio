import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 30rem;
  margin: 30px;
  border-radius: 10px;
  transition: 0.3s box-shadow;

  background-color: ${({theme}) => theme.colors.black200};

  &:hover {
    box-shadow: 0px 0px 10px 10px ${({theme}) => theme.colors.boxShadow};
  }

  .componentes {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .imagem {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 95%;
      height: 100%;
      border-radius: 8px;
      border: 2px solid ${({theme}) => theme.colors.black100};

      object-fit: cover;
    }
  }

  .descricao {
    width: 80%;
    font-size: 1.2rem;

    text-align: center;

    color: ${({theme}) => theme.colors.white400};
  }

  .verMais {
    width: 80%;
    display: flex;
    justify-content: end;

    button {
      border: none;
      font-weight: bold;

      padding: 10px 20px;
      border-radius: 20px;
      font-size: 1.2rem;

      background-color: ${({theme}) => theme.colors.purple100};
      color: ${({theme}) => theme.colors.white400};
      transition: background-color, color, 0.3s;

      &:hover {
        background-color: ${({theme}) => theme.colors.purple200};
        color: ${({theme}) => theme.colors.white};
      }
    }
  }

  @media (max-width: 720px) {
  width: 20rem;
  height: 25rem;

  .componentes {
    .titulo h1 {
      font-size: 1.5rem;
    }
  }

  .descricao {
    width: 90%;
    font-size: 1rem;
  }

  .verMais {
    width: 100%;
    height: 10%;
    justify-content: center;

    button {
      padding: 7px 15px;
      font-size: 1rem;
    }
  }
  }
`
