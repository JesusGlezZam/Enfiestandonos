import React from 'react'

import { getImagePath } from './Images';

export const Cards = ({ items, itemType }) => {
  return (
    <section className='event-items'>
      <h1><strong>{itemType}</strong> ideales para eventos.</h1>
      <div className={`${itemType}-cards-container`}>
        {items.map((item) => (
          <div key={item.id} className={`${itemType}-card`}>
            <img src={getImagePath(itemType, item.name)} alt={item.name} className={`${itemType}-image`} />
            <div className={`${itemType}-info`}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
