import React from 'react';
import { GiCheckMark, GiConfirmed } from 'react-icons/gi';

// Componente generalizado para mostrar listas de ítems
export const IconList = ({ items, itemType, className }) => {
  // Mostrar un mensaje si no hay ítems disponibles
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No hay {itemType}s disponibles.</p>;
  }

  

  return (
    <ul className={`item-list ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="item">
            <div>
                <GiConfirmed className="item-icon" /> {/**GiCheckMark */}
            </div>
          <label htmlFor={`${itemType}-checkbox-${index}`} className="item-label ">
            <span>{item}</span> {/* Mostrar el nombre del ítem */}
          </label>
        </li>
      ))}
    </ul>
  );
};
