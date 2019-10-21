import React from 'react';
import Card from './Card';

const CardList = ({ beers }) => {
  return (
    <div className="cards">
      {
        beers.map(beer => <Card key={beer.id} beer={beer}/>)
      }
    </div>
  )
}

export default CardList;