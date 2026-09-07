// Arquivo principal, importar COMPONENTES e CSS aqui!

import React from 'react'
import Header from './components/Header.jsx'
import Home from './pages/Home/Home.jsx'
import '../src/assets/global.css'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
console.log(import.meta.env);

// Rotas frontend
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Salvation from './pages/salvation.jsx';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/salvation' element={<Salvation/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App