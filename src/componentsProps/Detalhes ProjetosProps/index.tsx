import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import { Container } from './styled'

interface ComponentProps {
  nome: string
  image: string[]
  texto: string
  lista: string[]
  link?: string

  classe1: string
  porcentagemclass1: string
  classe2: string
  porcentagemclass2: string
  classe3: string
  porcentagemclass3: string

  tecnologia1: string
  cortecnologia1: string
  tecnologia2: string
  cortecnologia2: string
  tecnologia3: string
  cortecnologia3: string

  porcentagem1: string
  porcentagem2: string
  porcentagem3: string

  desafios: string
}

export default function DetalhesProjetosPropsReact(props: ComponentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // troca de imagem a cada uma depois de 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === props.image.length - 1 ? 0 : prevIndex + 1,
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [props.image.length])

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!props.link) {
      event.preventDefault()
      alert('Este projeto não está no ar no momento, desculpa...')
    } else {
      window.open(props.link)
    }
  }

  return (
    <Container>
      <div className='direita'>
        <div className='img'>
          {/* Exibir a imagem atual com base no índice atual */}
          <img src={props.image[currentImageIndex]} alt='' />
        </div>
        <div className='tecnologia-desafios'>
          <div className='tecnologias'>
            <div className='titulo'>
              <h1>Tecnologias Utilizadas</h1>
            </div>
            <div className='porcentagem-tecnologias'>
              <div className='nome-tecnologia'>
                <p className={props.cortecnologia1}>{`${props.tecnologia1}`}</p>
                <p className={props.cortecnologia2}>{props.tecnologia2}</p>
                <p className={props.cortecnologia3}>{props.tecnologia3}</p>
              </div>
              <div className='porcentagem-projeto'>
                <div className={`${props.classe1} ${props.porcentagemclass1}`}>
                  <span>{props.porcentagem1}</span>
                </div>
                <div className={`${props.classe2} ${props.porcentagemclass2}`}>
                  <span>{props.porcentagem2}</span>
                </div>
                <div className={`${props.classe3} ${props.porcentagemclass3}`}>
                  <span>{props.porcentagem3}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='desafios'>
            <h1>Meus desafios</h1>
            <p>{props.desafios}</p>
          </div>
        </div>
      </div>

      <div className='esquerda'>
        <div className='texto-apresentacao'>
          <div className='texto'>
            <h1>{props.nome}</h1>
            <p>{props.texto}</p>
            <h2>Principais aprendizados neste projeto...</h2>
          </div>
          <div className='lista'>
            <ul>
              {/* Mapeando cada item do array para um elemento <li> */}
              {props.lista.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='link-projeto'>
          <p>Se desejar ver este projeto no ar... clique aqui!</p>
          <a onClick={handleClick} href={props.link} target='_blank' rel='noopener noreferrer'>
            ver projeto...
          </a>
        </div>
      </div>
    </Container>
  )
}

DetalhesProjetosPropsReact.propTypes = {
  nome: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  texto: PropTypes.string.isRequired,
  lista: PropTypes.string.isRequired,
  link: PropTypes.string,

  classe1: PropTypes.string.isRequired,
  porcentagemclass1: PropTypes.string.isRequired,
  classe2: PropTypes.string.isRequired,
  porcentagemclass2: PropTypes.string.isRequired,
  classe3: PropTypes.string.isRequired,
  porcentagemclass3: PropTypes.string.isRequired,

  tecnologia1: PropTypes.string.isRequired,
  cortecnologia1: PropTypes.string.isRequired,
  tecnologia2: PropTypes.string.isRequired,
  cortecnologia2: PropTypes.string.isRequired,
  tecnologia3: PropTypes.string.isRequired,
  cortecnologia3: PropTypes.string.isRequired,

  porcentagem1: PropTypes.string.isRequired,
  porcentagem2: PropTypes.string.isRequired,
  porcentagem3: PropTypes.string.isRequired,

  desafios: PropTypes.string.isRequired,
}
