import React from 'react';

const Card = ({ beer }) => {
  return (
    <div className="card">
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt=""/>
      <p> {beer.tagline}</p>
    </div>
  )
}

export default Card;