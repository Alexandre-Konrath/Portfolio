import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.black100};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.white200};
    font-family: "Lato", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul,
  li {
    list-style: none;
  }
  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
      background: transparent; /* Cor de fundo da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.purple200}; /* Cor do "thumb" (alça) da barra de rolagem */
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.purple300}; /* Cor do "thumb" (alça) da barra de rolagem ao passar o mouse */
  }

  /* Cor da barra de rolagem ao ser arrastada */
  ::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.colors.purple400};
  }

  //
  //
  //

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

  height: 1.4rem;
  margin-left: 15px;
  margin-bottom: 20px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.typescript};
}
.typescript span {
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  font-size: 1.2rem;
  margin-left: 10px;
}

.html {
  display: flex;
  align-items: start;

  height: 1.4rem;
  margin-left: 15px;
  margin-bottom: 20px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.html};
}
.html span {
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  font-size: 1.2rem;
  margin-left: 10px;
}

.css {
  display: flex;
  align-items: start;

  height: 1.4rem;
  margin-left: 15px;
  margin-bottom: 20px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.css};
}
.css span {
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  font-size: 1.2rem;
  margin-left: 10px;
}

.javascript {
  display: flex;
  align-items: start;

  height: 1.4rem;
  margin-left: 15px;
  margin-bottom: 20px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.javascript};
}
.javascript span {
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  font-size: 1.2rem;
  margin-left: 15px;
}

.react {
  display: flex;
  align-items: start;

  height: 1.4rem;
  margin-left: 15px;
  margin-bottom: 20px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.colors.typescript};
}
.react span {
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  font-size: 1.2rem;
  margin-left: 10px;
}
`
