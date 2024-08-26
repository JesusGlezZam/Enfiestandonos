import React from 'react';
import PropTypes from 'prop-types';

// Componente generalizado para mostrar listas de ítems
export const ItemList = ({ items, selectedItems, onCheckboxChange, itemType, className }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No hay {itemType}s disponibles.</p>;
  }

  return (
    <ul className={`item-list ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="item">
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => onCheckboxChange(item)}
            id={`${itemType}-checkbox-${index}`}
            className="checkbox-input"
          />
          <label htmlFor={`${itemType}-checkbox-${index}`} className="item-label">
            <span className={`item-text ${selectedItems.includes(item) ? 'selected' : ''}`}>
              {item}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
  className: PropTypes.string,
};
