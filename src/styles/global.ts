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
`
