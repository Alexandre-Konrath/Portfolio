import styled from "styled-components";

export const Container = styled.div`
  .filtro {
    margin-top: 30px;
    margin-bottom: 30px;
    button {
      font-size: 1.1rem;
      margin-right: 30px;
      transition: 0.5s color;
      border: none;

      background-color: transparent;
      color: ${({ theme }) => theme.colors.grey};

      &:hover {
        color: ${({ theme }) => theme.colors.white100};
      }

      &:focus {
        color: ${({ theme }) => theme.colors.purple_secondary};
      }
    }
  }

  @media (max-width: 720px) {

    .filtro {
      margin-top: 30px;
      margin-bottom: 30px;
      margin-left: 30px;
      button {
        font-size: 0.9rem;
        margin-right: 30px;
        transition: 0.5s color;
        border: none;

        background-color: transparent;
        color: ${({ theme }) => theme.colors.grey};

        &:hover {
          color: ${({ theme }) => theme.colors.white100};
        }

        &:focus {
          color: ${({ theme }) => theme.colors.purple_secondary};
        }
      }
    }
  }
`
