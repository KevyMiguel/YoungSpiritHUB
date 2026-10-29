

// como usar css:

// <style>
//       {`
//         body {
//         background-color: red !important;
//         }
//       `}
//     </style>

// Importação Item e seus estilos
import Item from '../components/Item.jsx'

// Importar estado do usuário
import { useState } from "react";

import '../assets/global.css'

function Home() {
  const [index, setIndex] = useState(0)
  const images = [
            "/src/assets/images/Administrar.png",
            "/src/assets/images/Consolo.png",
            "/src/assets/images/Sabedoria.png",
            "/src/assets/images/Salvacao.png"
          ]

          function nextSlide() {
            setIndex((prev) => (prev + 1) % images.length)
          }

          function prevSlide() {
            setIndex((prev) => (prev - 1 + images.length) % images.length)
          }

  return (
    <>
    <style>
      {`
        body {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        main {
          display: flex;
          border: red dashed 2px;
          height: 100%;
        }
      `}
    </style>
      <main>
        <h1>TESTE</h1>
      </main>
        
    </>
  )
}

export default Home