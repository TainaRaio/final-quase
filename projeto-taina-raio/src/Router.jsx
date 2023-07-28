import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Cursos from './pages/Cursos'
import Tecnologia from './pages/Tecnologia'
import Financas from './pages/Financas'
import Saude from './pages/Saude'
import Contato from './pages/Contato'
import Footer from './components/Footer'


const Router = () => {
  
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/cursos" element={<Cursos/>} />
        <Route path="/tecnologia" element={<Tecnologia/>} />
        <Route path="/financas" element={<Financas/>} />
        <Route path="/saude" element={<Saude/>} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer content="Feito por Tai, com muito amor ♡" />
    </BrowserRouter>
  )
}

export default Router
