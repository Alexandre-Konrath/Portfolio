import React from 'react'
import { Container } from './style'

interface FiltroProps {
  setProjetoSelecionado: (index: number) => void
}

export default function Filtro(props: FiltroProps) {
  const handleClick = (index: number) => {
    props.setProjetoSelecionado(index)
  }

  return (
    <Container>
      <div className='filtro'>
        <button onClick={() => handleClick(1)}> React</button>
        <button onClick={() => handleClick(3)}> JavaScript</button>
        <button onClick={() => handleClick(0)}> Todos</button>
        <button onClick={() => handleClick(2)}> Html e Css</button>
      </div>
    </Container>
  )
}
