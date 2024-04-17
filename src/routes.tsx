import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import ProjetosPage from './pages/Main/Projetos'
import Iniciopage from './pages/Main/Inicio'
import SobrePages from './pages/Main/Sobre'
import DetalheProjetosReact from './pages/Detalhes dos Projetos/ReactProps'
import DetalheProjetosJavaScript from './pages/Detalhes dos Projetos/JavaScriptProps'
import DetalheProjetosHtmlCss from './pages/Detalhes dos Projetos/HtmlCssProps'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Iniciopage />} />
        <Route path='projetos' element={<ProjetosPage />} />
        <Route path='sobre' element={<SobrePages />} />
        <Route path='reactprops' element={<DetalheProjetosReact />} />
        <Route path='javascriptprops' element={<DetalheProjetosJavaScript />} />
        <Route path='htmlcssprops' element={<DetalheProjetosHtmlCss />} />
      </Route>
    </Routes>
  )
}
