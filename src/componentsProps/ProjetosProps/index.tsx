import PropTypes from 'prop-types'

import { Container } from './styles'
import { NavLink } from 'react-router-dom'

interface ComponentProps {
  nome: string
  image: string
  descricao: string
  pasta: string
}

export default function ComponentesProjeto(props: ComponentProps) {
  return (
    <Container>
      <div className='componentes'>
        <div className='titulo'>
          <h1>{props.nome}</h1>
        </div>
        <div className='imagem'>
          <img src={props.image} alt='' />
        </div>
        <div className='descricao'>
          <p>{props.descricao}</p>
        </div>
        <div className='verMais'>
          <NavLink to={props.pasta}>
            <button>Ver mais...</button>
          </NavLink>
        </div>
      </div>
    </Container>
  )
}

ComponentesProjeto.propTypes = {
  nome: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  pasta: PropTypes.string.isRequired,
}
