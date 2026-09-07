import '../assets/global.css'
import { Link, Navigate } from 'react-router-dom'
import React, { useState } from "react";
import axios from 'axios';

const Register = ({setUserLogged}) => {

  // Estou usando uma varíavel de estado que dá dois argumentos (valores), o 
  // primeiro se refere à variavel que estou criando: "email", o 
  // segundo se refereà função que atualiza o valor entre 'parentêses' 
  // após a palavra "useState"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (email !== "" && password !== "") {
    //   try {
    //     // Se os dois campos estão preenchidos
    //     const { data: userDoc } = await axios.post('/users/login', {
    //       email,
    //       password
    //     });

    //     setUserLogged(userDoc);
    //     setRedirect(true);

    //     console.log(userDoc);
    //   } catch (error) {
    //     alert(`Deu um erro ao logar: ${error.response.data}`)
    //   }
    // } else {
    //   alert('Você precisa preencher o e-mail e a senha')
    // }

  };

  // Verificação

  if (redirect) return <Navigate to='/' />
  return (
    <>
        <style>
            {`
                #registerWrapper {
                    background: red;
                    border: 4mm ridge rgb(211 220 50 / 0.6);
                }

                .internalRedirect {
                    color: #e5e7eb;
                }

                .internalRedirect a {
                    color: inherit;
                    text-decoration: none;
                }
            `}
        </style>

        <form id="registerWrapper" onSubmit={handleSubmit}>
            <section id="registerElements">
                <h1>Faça seu cadastro</h1>

                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Entrar</button>

                <p className="internalRedirect">
                    <Link to="/login">Tenho uma conta</Link>
                </p>
            </section>
        </form>
    </>
  )
}

export default Register