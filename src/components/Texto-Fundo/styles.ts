import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 200px;
    z-index: -999;

    h1 {
      color: ${({ theme }) => theme.colors.black150};

      font-size: 30rem;
      margin-top: -90px;
    }
    h2 {
      color: ${({ theme }) => theme.colors.black150};

      font-size: 30rem;
      margin-top: -310px;
    }

    @media (max-width: 720px) {
    position: fixed;
    left: -10px;
    z-index: -999;

    h1 {
      color: ${({ theme }) => theme.colors.black150};

      font-size: 12em;
      margin-top: 100px;
    }
    h2 {
      color: ${({ theme }) => theme.colors.black150};

      font-size: 12rem;
      margin-top: -125px;
    }
    }

`
