import React from 'react'
import { Container } from './styled'

interface TituloProps {
  nome: string
  subnome: string
}

const Titulo: React.FC<TituloProps> = ({ nome, subnome }) => {
  return (
    <Container>
      <div className='titulo'>
        <h1 className='h1'>
          {nome && (
            <>
              {nome} <span> {subnome} </span>
            </>
          )}
        </h1>
        <h2>{nome && `${nome} ${subnome}`}</h2>
      </div>
    </Container>
  )
}

export default Titulo
