import DetalhesProjetosProps from '../../../componentsProps/Detalhes ProjetosProps'
import Titulo from '../../../components/Titulo'
import { Container } from './styles'

import { useState } from 'react'

import { projetosJavaScript } from '../../../dadosprojetos'

export default function DetalhesProjetos() {
  const [projetoSelecionado] = useState(0)

  const Projetos = [projetosJavaScript]

  return (
    <Container>
      <Titulo nome='Detalhes dos' subnome='Projetos' />

      {Projetos[projetoSelecionado].map((projeto) => (
        <DetalhesProjetosProps
          key={projeto.nome}
          nome={projeto.nome}
          image={projeto.img}
          texto={projeto.texto}
          lista={projeto.lista}
          link={projeto.link}
          classe1={projeto.classe1}
          porcentagemclass1={projeto.porcentagemclass1}
          classe2={projeto.classe2}
          porcentagemclass2={projeto.porcentagemclass2}
          classe3={projeto.classe3}
          porcentagemclass3={projeto.porcentagemclass3}
          tecnologia1={projeto.tecnologia1}
          cortecnologia1={projeto.cortecnologia1}
          tecnologia2={projeto.tecnologia2}
          cortecnologia2={projeto.cortecnologia2}
          tecnologia3={projeto.tecnologia3}
          cortecnologia3={projeto.cortecnologia3}
          porcentagem1={projeto.porcentagem1}
          porcentagem2={projeto.porcentagem2}
          porcentagem3={projeto.porcentagem3}
          desafios={projeto.desafios}
        />
      ))}
    </Container>
  )
}
