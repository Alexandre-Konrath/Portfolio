import { NavLink } from 'react-router-dom'
import TextoFundo from '../../../components/Texto-Fundo'
import { Container } from './styles'

export default function Inicio() {
  return (
    <Container>
      <TextoFundo />

      <div className='texto-esquerda'>
        <h1>Developer Front-end</h1>
        <div className='barrinha'></div>
        <h2> Designer e Developer Web</h2>
      </div>

      <div className='texto-direita'>
        <h1>
          Hell<span>o</span>,
        </h1>
        <h2>
          <span>I</span> am Alexandre
        </h2>
        <NavLink to='sobre'>
          <button>about me!</button>
        </NavLink>
      </div>
    </Container>
  )
}
