import React from 'react'
import "./Card.css"

function Card(card) {
    console.log("card" , card);
  return (
    <div className='card'>
        <img 
        src={card?.card?.thumbnail}
        alt={card?.card?.id}
        className='card-image'/>

    </div>
  )
}

export default Card