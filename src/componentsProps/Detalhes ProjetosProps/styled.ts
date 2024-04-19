import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    margin-bottom: 100px;

    border-bottom: 3px solid ${({theme}) => theme.colors.black200};

    .direita {
      width: 60%;
      height: 81vh;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .img {
        width: 90%;
        height: 90vh;

        display: flex;
        justify-content: start;

        img {
          width: 95%;
          height: 100%;
          border-radius: 8px;

          object-fit: cover;
        }
      }

      .tecnologia-desafios {
        width: 100%;
        height: 30vh;
        margin-top: 20px;

        display: flex;
        flex-direction: row;

        .tecnologias {
          display: flex;
          flex-direction: column;

          width: 40%;
          height: 50vh;


        .titulo{
          display: flex;
          flex-direction: column;
          align-items: center;

          margin-bottom: 20px;

          h1 {
            font-size: 1.8rem;

            color: ${({theme}) => theme.colors.purple_secondary};
            border-bottom: 3px solid ${({theme}) => theme.colors.blackTitle};
          }

        }

        .porcentagem-tecnologias{
          display: flex;
          flex-direction: row;
          align-items: start;

          .nome-tecnologia {
            width: 20%;
            height: 100%;
            margin-left: 20px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
              font-size: 1.2rem;
              margin-bottom: 20px;
            }
          }

          .porcentagem-projeto {
            width: 70%;
            height: 1rem;

          }
        }
      }

        .desafios {
          width: 50%;
          height: 50vh;

          display: flex;
          flex-direction: column;
          align-items: center;

          h1 {
            font-size: 1.8rem;
            color: ${({theme}) => theme.colors.purple_secondary};
            border-bottom: 3px solid ${({theme}) => theme.colors.blackTitle};
          }

          p {
            font-size: 1.1rem;
            text-align: center;
            color: ${({theme}) => theme.colors.white400};
            line-height: 1.6rem;
          }
        }
      }
    }

    .esquerda {
      width: 40%;
      height: 81vh;

      display: flex;
      flex-direction: column;
      align-items: center;


      .texto-apresentacao {
        width: 95%;
        height: 90%;

        margin-top: 10px;
        margin-right: 60px;

        .texto{
          display: flex;
          flex-direction: column;
          align-items: center;

          h1 {
          color: ${({theme}) => theme.colors.purple_secondary};
          border-bottom: 3px solid ${({theme}) => theme.colors.blackTitle};
          }

          h2 {
            font-size: 1.4rem;
            color: ${({theme}) => theme.colors.purple_secondary};
            border-bottom: 3px solid ${({theme}) => theme.colors.blackTitle};
            margin-bottom: 20px;
          }

          p {
            font-size: 1.1rem;
            text-align: center;
            color: ${({theme}) => theme.colors.white400};
            line-height: 1.6rem;
            margin-bottom: 50px;
          }
        }

        .lista {
            display: flex;
            flex-direction: column;
            align-items: start;

              ul li {
              font-size: 1.1rem;
              margin-bottom: 10px;
              color: ${({theme}) => theme.colors.white400};
            }
          }
      }

      .link-projeto {
        display: flex;
        flex-direction: row;
        align-items: center;

        p {
          font-size: 1.2rem;
          line-height: 1.8rem;
          margin-right: 20px;
          border-bottom: 1px solid ${({theme}) => theme.colors.blackTitle};
          color: ${({theme}) => theme.colors.white300};
        }

        a {
          padding: 10px 10px;
          border-radius: 40px;
          color: ${({theme}) => theme.colors.white100};
          font-weight: bold;
          background-color: ${({theme}) => theme.colors.purple};
          transition: background-color 0.3s;

          &:hover {
            background-color: ${({theme}) => theme.colors.purple200};
            color: ${({theme}) => theme.colors.white};
          }
        }
      }
    }
//
//
//
//
//
//
//
@media (max-width: 720px) {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    border-bottom: none;

    .direita {
      order: 2;
      width: 100%;
      height: 50vh;

      .img {
        width: 100%;
        height: 50vh;
        margin-bottom: 100px;
      }

      .tecnologias {
        display: none;
      }
    }

    .esquerda {
      order: 1;
      width: 100%;

      .texto-apresentacao {
        width: 90%;
        height: 70%;

        h1 {
          font-size: 1.5rem;
        }

        h2 {
          font-size: 1.3rem;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            font-size: 1rem;
          }
        }

        p {
          font-size: 1rem;
          margin-bottom: 30px;
        }
      }

      .link-projeto {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        align-items: center;
        p {
          font-size: 1.1rem;
          border: none;
        }

        a {
          padding: 10px 20px;
          margin-top: 10px;
          font-size: 1rem;
        }
      }
    }
}
`
