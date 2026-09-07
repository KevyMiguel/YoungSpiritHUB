// import './Login.css'
import { Link, Navigate } from 'react-router-dom'
import React, { useState } from "react";
import axios from 'axios';

const Login = ({userLogged, setUserLogged}) => {

  // Estou usando uma varíavel de estado que dá dois argumentos (valores), o 
  // primeiro se refere à variavel que estou criando: "email", o 
  // segundo se refereà função que atualiza o valor entre 'parentêses' 
  // após a palavra "useState"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      try {
        // Se os dois campos estão preenchidos
        const { data: userDoc } = await axios.post('/users/login', {
          email,
          password
        });

        setUserLogged(userDoc);
        setRedirect(true);

        console.log(userDoc);
      } catch (error) {
        alert(`Deu um erro ao logar: ${error.response.data}`)
      }
    } else {
      alert('Você precisa preencher o e-mail e a senha')
    }

  };


console.log("Usuário logado:", userLogged);
console.log("Redirecionar:", redirect);

  // Verificação

  if (redirect || userLogged) return <Navigate to='/' />
  return (
    <>
      <style>
        {`
          body {
          margin: 0;
      }

      #loginWrapper {
          display: flex;
          height: 100vh;
          justify-content: center;
          align-items: center;
      }

      #elementsLogin {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          gap: 10px;
          width: 85vw;
          max-width: 400px;
          height: 85vh;
          max-height: 400px;
          border-radius: 15px;
      }

      #elementsLogin input,
      #elementsLogin button {
          height: 5vh;
          width: 20vh;
          border-radius: 5px;
          border: none;
          text-align: center;
      }

      #elementsLogin button {
          background-color: var(--button);
      }

      #elementsLogin button:hover {
          background-color: var(--buttonHover);
      }

`}
      </style>

    <form id='loginWrapper' onSubmit={handleSubmit}>
      <section id="elementsLogin">
        <h1>Faça seu login</h1>
        {/* Toda vez que eu alterar o meu input, eu estou capturando o evento de interação */}
        <input type="email" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Entrar</button>
        <p className='internalRedirect'><Link to="/register" style={{ color: "inherit"}}>Não tenho uma conta.</Link></p>
      </section>
    </form>
    </>
  )
}

export default Login