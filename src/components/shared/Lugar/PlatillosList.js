import React from 'react';
import PropTypes from 'prop-types';

// Componente para mostrar los platillos de una sección
export const PlatillosList = ({ platillos, selectedPlatillos, onCheckboxChange, className }) => {
  if (!Array.isArray(platillos) || platillos.length === 0) {
    return <p>No hay platillos disponibles.</p>;
  }

  return (
    <ul className={`platillos-list ${className}`}>
      {platillos.map((platillo, index) => (
        <li key={index} className="platillo-item">
          <input
            type="checkbox"
            checked={selectedPlatillos.includes(platillo)}
            onChange={() => onCheckboxChange(platillo)}
            id={`checkbox-${index}`}
            className="checkbox-input"
          />
          <label htmlFor={`checkbox-${index}`} className="platillo-label">
            <span className={`platillo-text ${selectedPlatillos.includes(platillo) ? 'selected' : ''}`}>
              {platillo}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

PlatillosList.propTypes = {
  platillos: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPlatillos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
