import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;

  .breve-descricao {
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      margin-bottom: 10px;
      font-size: 1.1rem;

      color: ${({theme}) => theme.colors.grey};
    }
  }

  .componetes-projetos {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }


  @media (max-width: 720px) {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;

  .breve-descricao {
    justify-content: center;

    p{
      text-align: center;
      font-size: 0.9rem;
    }
  }

    .componetes-projetos {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`
