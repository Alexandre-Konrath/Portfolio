import { useState } from 'react'

import ComponentesProjeto from '../../../componentsProps/ProjetosProps'
import Filtro from '../../../components/FiltroTecnologia/index'
import Titulo from '../../../components/Titulo/index'

import { Container } from './styles'
import {
  todosProjetos,
  projetosReact,
  projetosHtml,
  projetosJavaScript,
} from '../../../dadosprojetos'

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(0)

  const Projetos = [todosProjetos, projetosReact, projetosHtml, projetosJavaScript]

  return (
    <Container>
      <Titulo nome='Meus' subnome='Projetos' />

      <div className='breve-descricao'>
        <p>Aqui estão todo os meus projetos que já fiz até hoje.</p>
        <p>
          Se gostou de algum e deseja ver mais detalhes sobre ele, clique no botão para ver mais
          detalhes...
        </p>
      </div>

      <Filtro setProjetoSelecionado={setProjetoSelecionado} />

      <div className='componetes-projetos'>
        {Projetos[projetoSelecionado].map((projeto) => (
          <ComponentesProjeto
            key={projeto.nome}
            nome={projeto.nome}
            image={projeto.img[0]}
            descricao={projeto.descricao}
            pasta={projeto.pasta}
          />
        ))}
      </div>
    </Container>
  )
}
