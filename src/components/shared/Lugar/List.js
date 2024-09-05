import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {  } from 'react-icons/md'; // Importa el ícono para la viñeta

export const List = ({ items, itemType }) => {
  // Mostrar un mensaje si no hay ítems disponibles
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No hay {itemType}s disponibles.</p>;
  }

  return (
    <ul className="item-list">
      {/* Mapeo a través de los ítems y renderizar cada uno con una viñeta */}
      {items.map((item, index) => (
        <li key={index} className="item include">
          <div>
            <FaCheckCircle className="item-bullet" />
          </div>
          
          <span className="item-text">
            {item} {/* Mostrar el nombre del ítem */}
          </span>
        </li>
      ))}
    </ul>
  );
};
