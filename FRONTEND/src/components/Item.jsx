import React from 'react'
import './Item.css'
import img from '../../src/assets/images/Sabedoria.png'

const Item = () => {
  return (
    <>
    <article className='item'>
      <img src={img} />
    </article>
    </>
  )
}

export default Item