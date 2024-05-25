import React from 'react';
import './styles/card.css';

const Card = ({color, text}) => {

  const borderColor= { 
    borderColor:color,
  }

  const textColor = {
    color:color,
  }


  return (
    <article className='card' style={borderColor}>
        <h2 className='card_header'>Header</h2>
        <h3 className='card_title'>{text}Primary card Tittle</h3>
        <p style ={textColor} className='card_text'>
          No hay nadie que ame el dolor mismo,
           que lo busque y lo quiera tener, simplemente porque es el dolor           
        </p>
    </article>
  )
}

export default Card