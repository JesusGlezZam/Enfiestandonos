import React from 'react';
import PropTypes from 'prop-types';
import { GiAppleMaggot, GiCheckMark, GiCircle, GiSettingsKnobs } from 'react-icons/gi';
import { FaCircle } from 'react-icons/fa';

// Componente generalizado para mostrar listas de ítems
export const ItemList = ({ items, selectedItems, onCheckboxChange, itemType, className }) => {
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
          <input
            type="checkbox"
            checked={selectedItems.includes(item)} // Indicar si el ítem está seleccionado
            onChange={() => onCheckboxChange(item)} // Manejar el cambio de selección
            id={`${itemType}-checkbox-${index}`} // ID único para el checkbox
            className="checkbox-input"
          />
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

// Validación de las propiedades del componente
ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
  className: PropTypes.string,
};
