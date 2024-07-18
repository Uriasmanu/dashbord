
import styled from 'styled-components'
import './App.css'
import Menulateral from './assets/Componentes/MenuLateral'
import Inicio from './assets/Telas/Inicio'

const ContainerApp = styled.div`
  display: flex;
`

function App() {

  return (
    <ContainerApp>
      <Menulateral />
      <Inicio />
    </ContainerApp>
  )
}

export default App
