import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Componente para mostrar los platillos de una sección
const PlatillosList = ({ platillos, selectedPlatillos, onCheckboxChange }) => {
  if (!Array.isArray(platillos)) {
    return <p>No hay platillos disponibles.</p>;
  }

  return (
    <ul className="platillos-list">
      {platillos.map((platillo, index) => (
        <li key={index} className="platillo-item">
        {/*  <input
            type="checkbox"
            checked={selectedPlatillos.includes(platillo)}
            onChange={() => onCheckboxChange(platillo)}
            id={`checkbox-${index}`}
            className="checkbox-input"
          />*/}
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



// Componente principal para mostrar todo el menú y las secciones
const MenuWithSections = ({ data }) => {
  const [openSections, setOpenSections] = useState([]);
  const [selectedPlatillos, setSelectedPlatillos] = useState([]);

  const handleToggleSection = (sectionIndex) => {
    setOpenSections(prevOpenSections =>
      prevOpenSections.includes(sectionIndex)
        ? prevOpenSections.filter(index => index !== sectionIndex)
        : [...prevOpenSections, sectionIndex]
    );
  };

 /* const handleCheckboxChange = (platillo) => {
    setSelectedPlatillos(prevSelectedPlatillos =>
      prevSelectedPlatillos.includes(platillo)
        ? prevSelectedPlatillos.filter(p => p !== platillo)
        : [...prevSelectedPlatillos, platillo]
    );
  };*/

  return (
    <div className="menu">
      <h2 className="menu-title">Menú</h2>
      {data.menu.map((section, index) => (
        <div key={index} className="type-list menu-section">
          <h2 onClick={() => handleToggleSection(index)} className="section-title" style={{ cursor: 'pointer' }}>
            {section.seccion || section.section}
          </h2>
          {openSections.includes(index) && (
            section.platillos ? (
              <PlatillosList
                platillos={section.platillos}
                selectedPlatillos={selectedPlatillos}
                //onCheckboxChange={handleCheckboxChange}
              />
            ) : (
              Object.keys(section.subSections).map(subSectionKey => (
                <div key={subSectionKey} className="sub-section">
                  <h3>{subSectionKey}</h3>
                  <PlatillosList
                    platillos={section.subSections[subSectionKey]}
                    selectedPlatillos={selectedPlatillos}
                   // onCheckboxChange={handleCheckboxChange}
                  />
                </div>
              ))
            )
          )}
        </div>
      ))}
    </div>
  );
};

MenuWithSections.propTypes = {
  data: PropTypes.shape({
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        seccion: PropTypes.string,
        section: PropTypes.string,
        platillos: PropTypes.arrayOf(PropTypes.string),
        subSections: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
      })
    ).isRequired,
  }).isRequired,
};

export default MenuWithSections;
