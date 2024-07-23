
import styled from 'styled-components'
import './App.css'
import Menulateral from './assets/Componentes/MenuLateral'
import Inicio from './assets/Telas/Inicio'
import { AppProvider } from './assets/Context'

const ContainerApp = styled.div`
  display: flex;
`

function App() {

  return (
    <AppProvider>
      <ContainerApp>
        <Menulateral />
        <Inicio />
      </ContainerApp>
    </AppProvider>

  )
}

export default App
