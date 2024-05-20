import React, { useContext } from 'react'
import AuthContext from "../../../Context/AuthContext"
import "./Card.css"

function Card(card) {

  const {mobile} = useContext(AuthContext);

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