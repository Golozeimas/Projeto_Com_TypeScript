import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main2 from './pages/App2'
import Header from './components/header'
import PerfilUsuario from './components/componenteTeste'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PerfilUsuario usuarioId={1}/>
  </StrictMode>,
)
