import React from 'react'

export const List = ({ items, selectedItems, itemType, className }) => {
    // Mostrar un mensaje si no hay ítems disponibles
    if (!Array.isArray(items) || items.length === 0) {
      return <p>No hay {itemType}s disponibles.</p>;
    }
  
    console.log(selectedItems)
  
    return (
      <ul className={`item-list ${className}`}>
        {/* Mapeo a través de los ítems y renderizar cada uno con un checkbox */}
        {items.map((item, index) => (
          <li key={index} className="item">
            <label htmlFor={`${itemType}-checkbox-${index}`} className="item-label">
              <span className={`item-text ${selectedItems.includes(item) ? 'selected' : ''}`}>
                {item} {/* Mostrar el nombre del ítem */}
              </span>
            </label>
          </li>
        ))}
      </ul>
    );
  };