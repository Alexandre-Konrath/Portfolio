import { Container } from './styles'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  )
}
