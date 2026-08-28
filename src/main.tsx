import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main2 from './pages/App2'
import Header from './components/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Main2/>
  </StrictMode>,
)
