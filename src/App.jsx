import './App.css'

// 2 - Reaproveitamento de estrutura

import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <p>Exemplo de roteamento de páginas.</p>
      <Menu/>
      <Outlet/>
      <p>Rodapé</p>
    </>
  )
}

export default App
