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
        width: 100%;
        height: 90vh;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 95%;
          height: 100%;
          border-radius: 8px;

          object-fit: cover;
        }
      }

      .tecnologias {
        width: 90%;
        height: 50vh;

        display: flex;
        flex-direction: column;

        .titulo{
          display: flex;
          flex-direction: column;
          align-items: center;

          margin-bottom: 20px;

          h1 {
            font-size: 2rem;

            color: ${({theme}) => theme.colors.purple_secondary};
            border-bottom: 2px solid ${({theme}) => theme.colors.blackTitle};;
          }

        }
        .porcentagem-tecnologias{
          display: flex;
          flex-direction: row;
          align-items: start;

          .nome-tecnologia {
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }


          .porcentagem-projeto {
            width: 80%;
            height: 100%;

            .porcentagem1 {
              display: flex;
              align-items: start;

              width: 80%;
              height: 2rem;
              margin-bottom: 10px;
              border-radius: 50px;

              background-color: ${({theme}) => theme.colors.html};

              span {
                color: ${({theme}) => theme.colors.black};
                font-size: 1.5rem;
                margin-left: 10px;
                margin-top: 3px;
              }
            }
            .porcentagem2 {
              display: flex;
              align-items: start;

              width: 50%;
              height: 2rem;
              margin-bottom: 10px;
              border-radius: 50px;

              background-color: ${({theme}) => theme.colors.css};

              span {
                color: ${({theme}) => theme.colors.black};
                font-size: 1.5rem;
                margin-left: 10px;
                margin-top: 3px;
              }
            }
            .porcentagem3 {
              display: flex;
              align-items: start;

              width: 8%;
              height: 2rem;
              margin-bottom: 10px;
              border-radius: 50px;

              background-color: ${({theme}) => theme.colors.javascript};

              span {
                color: ${({theme}) => theme.colors.black};
                font-size: 1.5rem;
                margin-left: 10px;
                margin-top: 3px;
              }
            }
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
        width: 80%;
        height: 70%;

        margin-top: 10px;
        margin-bottom: 30px;

        h1 {
          text-align: center;
          color: ${({theme}) => theme.colors.purple_secondary};
        }

        h2 {
          font-size: 1.4rem;
          text-align: center;
          color: ${({theme}) => theme.colors.purple_secondary};
          margin-bottom: 20px;
        }

        ul li {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: ${({theme}) => theme.colors.white400};
        }

        p {
          font-size: 1.2rem;
          text-align: center;
          color: ${({theme}) => theme.colors.white400};
          line-height: 1.6rem;
          margin-bottom: 50px;

          br {
            margin-bottom: 10px;
          }
        }
      }

      .link-projeto {
        display: flex;
        flex-direction: row;
        margin-top: 80px;
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

.t5 {
  width: 5%;
}
.t10 {
  width: 10%;
}
.t18 {
  width: 18%;
}
.t20 {
  width: 20%;
}
.t25 {
  width: 25%;
}
.t30 {
  width: 30%;
}
.t40 {
  width: 40%;
}
.t45 {
  width: 45%;
}
.t50 {
  width: 50%;
}
.t60 {
  width: 60%;
}
.t70 {
  width: 70%;
}
.t75 {
  width: 75%;
}
.t80 {
  width: 80%;
}
.t90 {
  width: 90%;
}
.t95 {
  width: 95%;
}
.t100 {
  width: 100%;
}

.T {
  font-size: 1.5rem;
  margin-bottom: 14px;
  color: ${({theme}) => theme.colors.typescript};
}
.J {
  font-size: 1.5rem;
  margin-bottom: 14px;
  color: ${({theme}) => theme.colors.javascript};
}
.H {
  font-size: 1.5rem;
  margin-bottom: 14px;
  color: ${({theme}) => theme.colors.html};
}
.C {
  font-size: 1.5rem;
  margin-bottom: 14px;
  color: ${({theme}) => theme.colors.css};
}
.R {
  font-size: 1.5rem;
  margin-bottom: 14px;
  color: ${({theme}) => theme.colors.react};
}

.typescript {
  display: flex;
  align-items: start;

  height: 2rem;
  margin-bottom: 10px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.typescript};
}
.typescript span {
  color: ${({theme}) => theme.colors.black};
  font-size: 1.5rem;
  margin-left: 10px;
  margin-top: 3px;
}

.html {
  display: flex;
  align-items: start;

  height: 2rem;
  margin-bottom: 10px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.html};
}
.html span {
  color: ${({theme}) => theme.colors.black};
  font-size: 1.5rem;
  margin-left: 10px;
  margin-top: 3px;
}

.css {
  display: flex;
  align-items: start;

  height: 2rem;
  margin-bottom: 10px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.css};
}
.css span {
  color: ${({theme}) => theme.colors.black};
  font-size: 1.5rem;
  margin-left: 10px;
  margin-top: 3px;
}

.javascript {
  display: flex;
  align-items: start;

  height: 2rem;
  margin-bottom: 10px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.javascript};
}
.javascript span {
  color: ${({theme}) => theme.colors.black};
  font-size: 1.5rem;
  margin-left: 10px;
  margin-top: 3px;
}

.react {
  display: flex;
  align-items: start;

  height: 2rem;
  margin-bottom: 10px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.typescript};
}
.react span {
  color: ${({theme}) => theme.colors.black};
  font-size: 1.5rem;
  margin-left: 10px;
  margin-top: 3px;
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
