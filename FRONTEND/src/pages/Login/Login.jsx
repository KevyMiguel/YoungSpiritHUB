import './Login.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

  // Estou usando uma varíavel de estado que dá dois argumentos (valores), o 
  // primeiro se refere à variavel que estou criando: "email", o 
  // segundo se refereà função que atualiza o valor entre 'parentêses' 
  // após a palavra "useState"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      // Se os dois campos estão preenchidos
      const axiosResponse = await axios.post('/users/login', {
        email,
        password
      });
      console.log(axiosResponse);
    } else {
      alert('Você preencher o e-mail e a senha')
    }

  }
  return (
    <>
    <form id='loginWrapper' onSubmit={handleSubmit}>
      <section id="elementsLogin">
        <h1>Faça seu login</h1>
        {/* Toda vez que eu alterar o meu input, eu estou capturando o evento de interação */}
        <input type="email" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Entrar</button>
        <Link to="/register">Não tenho uma conta.</Link>
      </section>
    </form>
    </>
  )
}

export default Login