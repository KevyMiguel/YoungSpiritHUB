// Arquivo principal, importar COMPONENTES e CSS aqui!

// Props são informações ou funções que um componente pai
// envia para um componente filho. Neste caso, o App envia
// o usuário para o Header e a função setUser para o Login.
// Assim, o Login consegue atualizar o estado que pertence
// ao App, e o Header consegue mostrar o usuário atualizado.

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Rotas frontend
import Header from './components/Header.jsx'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
console.log(import.meta.env);

const App = () => {
  const [ userLogged, setUserLogged] = useState(null);

  return (
    <BrowserRouter>
        <Header userLogged={userLogged}/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Login' element={<Login setUserLogged={setUserLogged} />}/>
            <Route path='/Register' element={<Register setUserLogged={setUserLogged} />}/>
            {/* <Route path='/salvation' element={<Salvation/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App