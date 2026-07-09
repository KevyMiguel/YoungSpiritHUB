// Arquivo principal, importar COMPONENTES e CSS aqui!

import React from 'react'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import '../src/assets/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login.jsx'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App