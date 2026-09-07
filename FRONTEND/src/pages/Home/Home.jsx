// 09.05.2026 - Por enquanto mexer em outros... depois pensar em ITEMS

// Importação estilos do Home
import './Home.css'

// Importação Item e seus estilos
import Item from '../../components/Item.jsx'

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