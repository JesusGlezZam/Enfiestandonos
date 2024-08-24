import React, { useState } from "react";
import PropTypes from "prop-types";
import { PlatillosList } from "./PlatillosList"; // Asegúrate de la ruta correcta

const capitalizeFirstLetter = (text) => {
  if (typeof text !== 'string') return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

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

  const handleCheckboxChange = (platillo) => {
    setSelectedPlatillos(prevSelectedPlatillos =>
      prevSelectedPlatillos.includes(platillo)
        ? prevSelectedPlatillos.filter(p => p !== platillo)
        : [...prevSelectedPlatillos, platillo]
    );
  };

  return (
    <div className="menu">
      <h2 className="menu-title">Menú</h2>
      {data.menu.map((section, index) => (
        <div key={index} className="type-list menu-section">
          <h2
            onClick={() => handleToggleSection(index)}
            className="section-title"
            style={{ cursor: 'pointer' }}
          >
            <span className="capitalize-first-letter">
              {capitalizeFirstLetter(section.seccion || section.section)}
            </span>
          </h2>
          {openSections.includes(index) && (
            section.platillos ? (
              <PlatillosList
                platillos={section.platillos.map(capitalizeFirstLetter)}
                selectedPlatillos={selectedPlatillos}
                onCheckboxChange={handleCheckboxChange}
                className="list"
              />
            ) : (
              section.subSections && Object.keys(section.subSections).map(subSectionKey => (
                <div key={subSectionKey} className="sub-section">
                  <h3 className="capitalize-first-letter">{capitalizeFirstLetter(subSectionKey)}</h3>
                  <PlatillosList
                    platillos={section.subSections[subSectionKey].map(capitalizeFirstLetter)}
                    selectedPlatillos={selectedPlatillos}
                    onCheckboxChange={handleCheckboxChange}
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
