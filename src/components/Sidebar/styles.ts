import styled, { css } from "styled-components";


interface ContainerProps {
  isMenuOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`

  ${({ isMenuOpen }) => {
    return isMenuOpen ? css`width: 16.3rem;` : css`width: 7.75rem;`
  }}

${({ isMenuOpen }) => {
    return isMenuOpen ? css`.icones svg {margin-left: 20px;}` : css``
  }}

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
  height: 100vh;
  box-shadow: 3px 2px 9px 0px rgba(0,0,0,0.75);

  transition: width 0.3s;

  background: ${({ theme }) => theme.colors.black150};

  button {
    width: 100%;

    background: none;
    border: none;

    svg {
      width: 3rem;
      height: 3rem;
    }

    .icone1 {
      color: ${({ theme }) => theme.colors.purple};
    }

    .icone2 {
      color: ${({ theme }) => theme.colors.purple};
      rotate: 180deg;
    }

  }
  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      gap: 1.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    li {
      color: ${({ theme }) => theme.colors.purple_secondary};
      &:hover {
        color: ${({ theme }) => theme.colors.purple_tertiary};
      }
      a {
        width: fit-content;
        position: relative;
        display: flex;
        align-items: center;

        padding-left: 1.875rem;
        padding-right: 1.875rem;
        gap: 2rem;

        svg {
          fill: ${({ theme }) => theme.colors.purple};
          width: 4rem;
          height: 4rem;
          transition: fill 0.3s;
        }

        span {
          font-size: 1.3rem;
          font-weight: 500;

          color: ${({ theme }) => theme.colors.purple_secondary};

          transition: color, text-shadow 0.3s;
        }

        &.active {
          &::after {
            content: '';
            position: absolute;

            width: 5px;
            height: calc(100% + 10px);

            left: 10px;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);
            transition: border-bottom 0.3s;
            border-radius: 0 5px 0 5px;

            background-color: ${({ theme }) => theme.colors.purple_secondary};
          }
          svg {
            fill: ${({ theme }) => theme.colors.purple_secondary};
            fill: ${({ theme }) => theme.colors.purple_secondary};
          }
          span {
            border-bottom: 1px solid ${({ theme }) => theme.colors.purple_tertiary};
            color: ${({ theme }) => theme.colors.purple_tertiary};
          }
        }
      }
    }
  }

  .icones {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.purple};
      transition: 0.3s margin-left;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    padding: 0 0;
    overflow-y: auto;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0;

          svg {
            width: 3.25rem;
            height: 3.25rem;
          }

          span {
            display: none;
          }

          &.active {
          &::after {
            content: '';

            rotate: 90deg;
            left: -5px;
            top: 65%;
            height: calc(100% + 5px);

          }
          svg {
            fill: ${({ theme }) => theme.colors.purple100};
            fill: ${({ theme }) => theme.colors.purple100};
          }
        }
        }
      }
    }
  .icones {
    display: none;
    }
  }

`;
