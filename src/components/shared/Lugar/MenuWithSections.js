import React, { useState } from "react";
import PropTypes from "prop-types";
import { ItemList } from "./ItemList"; // Asegúrate de la ruta correcta

const capitalizeFirstLetter = (text) => {
  if (typeof text !== 'string') return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const MenuWithSections = ({ data }) => {
  const [openSections, setOpenSections] = useState([]);
  const [selectedItems, setSelectedItems] = useState({
    guisados: [],
    agua: [],
    adicional: [],
    // Agregar inicialización para subsecciones
  });

  const handleToggleSection = (sectionIndex) => {
    setOpenSections(prevOpenSections =>
      prevOpenSections.includes(sectionIndex)
        ? prevOpenSections.filter(index => index !== sectionIndex)
        : [...prevOpenSections, sectionIndex]
    );
  };

  const handleCheckboxChange = (item, type) => {
    setSelectedItems(prevSelectedItems => {
      if (Object.keys(prevSelectedItems).includes(type)) {
        return {
          ...prevSelectedItems,
          [type]: prevSelectedItems[type] ? (
            prevSelectedItems[type].includes(item)
              ? prevSelectedItems[type].filter(i => i !== item)
              : [...prevSelectedItems[type], item]
          ) : [item]
        };
      }
      return {
        ...prevSelectedItems,
        [type]: [item]
      };
    });
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
            <div className="section-content">
              {/* Mostrar categorías principales si existen */}
              {section.guisados && (
                <div className="category">
                  <h3>Guisados</h3>
                  <ItemList
                    items={section.guisados.map(capitalizeFirstLetter)}
                    selectedItems={selectedItems.guisados}
                    onCheckboxChange={(item) => handleCheckboxChange(item, 'guisados')}
                    itemType="guisado"
                    className="list"
                  />
                </div>
              )}
              {section.agua && (
                <div className="category">
                  <h3>Agua</h3>
                  <ItemList
                    items={section.agua.map(capitalizeFirstLetter)}
                    selectedItems={selectedItems.agua}
                    onCheckboxChange={(item) => handleCheckboxChange(item, 'agua')}
                    itemType="agua"
                    className="list"
                  />
                </div>
              )}
              {section.adicional && (
                <div className="category">
                  <h3>Adicional</h3>
                  <ItemList
                    items={section.adicional.map(capitalizeFirstLetter)}
                    selectedItems={selectedItems.adicional}
                    onCheckboxChange={(item) => handleCheckboxChange(item, 'adicional')}
                    itemType="adicional"
                    className="list"
                  />
                </div>
              )}
              {/* Mostrar subsecciones si existen */}
              {section.subSections && Object.keys(section.subSections).map(subSectionKey => (
                <div key={subSectionKey} className="sub-section">
                  <h3 className="capitalize-first-letter">{capitalizeFirstLetter(subSectionKey)}</h3>
                  <ItemList
                    items={section.subSections[subSectionKey].map(capitalizeFirstLetter)}
                    selectedItems={selectedItems[subSectionKey.toLowerCase()] || []}
                    onCheckboxChange={(item) => handleCheckboxChange(item, subSectionKey.toLowerCase())}
                    itemType={subSectionKey.toLowerCase()}
                    className="list"
                  />
                </div>
              ))}
            </div>
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
        guisados: PropTypes.arrayOf(PropTypes.string),
        agua: PropTypes.arrayOf(PropTypes.string),
        adicional: PropTypes.arrayOf(PropTypes.string),
        subSections: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
      })
    ).isRequired,
  }).isRequired,
};

export default MenuWithSections;
