// 09.05.2026 - Por enquanto mexer em outros... depois pensar em ITEMS

// Importação Item e seus estilos
import Item from '../components/Item.jsx'

// Importar estado do usuário
import { useState } from "react";



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
        main {
        flex-direction: column; /* Não tirar de 'column' que senão o layout quebra */
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .slider {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; /* Não remover, senão os botões não ficarão centralizados! */
        margin-bottom: 0;
        background: var(--surface);
      }

      .slider img {
        align-items: center;
        height: 70vh;
        margin-right: 10px;
        margin-left: 10px;
      }

      .slider button {
        font-size: 5vh;
        text-align: center;
      }

      #home-slider-counter {
        margin-top: 0;
        border-radius: 25px;
        width: 5vw;
        font-size: 25px;
        text-align: center;
      }

      #categoriesDevotionals {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
        background-color: var(--surface);
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding: 32px;
        gap: 10px;
      }
      `}
    </style>
      <main>
        <h2 id="titleDevotionalsRecent">Acesse nossos devocionais mais recentes!</h2>
        <section className="slider">
          <button onClick={prevSlide}>◀</button>

          <img src={images[index]} alt="slide" />
          <button onClick={nextSlide}>▶</button>
        </section>
          <nav>
            <p id='home-slider-counter'>{index + 1 } / {images.length}</p>
          </nav>
        
        <hr/>
          <h1>Devocionais!</h1>
        <section id="categoriesDevotionals">
            <Item />
            <Item />
            <Item />
        </section>
      </main>
        
    </>
  )
}

export default Home