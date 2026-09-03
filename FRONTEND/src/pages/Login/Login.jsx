import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <section id='loginWrapper'>
      <div id="elementsLogin">
        <h1>Faça seu login</h1>
        <input type="email" placeholder='Digite seu email'/>
        <input type="password" placeholder='Digite sua senha'/>
        <button type="submit">Entrar</button>
        <a href="#">Não tenho uma conta.</a>
      </div>
    </section>
    </>
  )
}

export default Login