import { useState } from 'react'
import './App.css'
import Header from './components/HeaderPagina'
import Nav from './components/NavPagina'
import Main from './components/MainPagina'
import Footer from './components/FooterPagina'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
