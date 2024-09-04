import React, { useState } from "react";
import PropTypes from "prop-types";
import { ItemList } from "./ItemList"; // Asegúrate de la ruta correcta
import { GiForkKnifeSpoon } from "react-icons/gi";


// Función para capitalizar la primera letra de un texto
const capitalizeFirstLetter = (text) => {
  if (typeof text !== 'string') return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const MenuWithSections = ({ data }) => {
  // Estado para gestionar las secciones abiertas
  const [openSections, setOpenSections] = useState([]);

  // Estado para gestionar los ítems seleccionados en cada subsección
  const [selectedItems, setSelectedItems] = useState({});

  // Función para alternar la visibilidad de las secciones del menú
  const handleToggleSection = (sectionIndex) => {
    setOpenSections(prevOpenSections =>
      prevOpenSections.includes(sectionIndex)
        ? prevOpenSections.filter(index => index !== sectionIndex) // Cerrar la sección si ya está abierta
        : [...prevOpenSections, sectionIndex] // Abrir la sección si no está abierta
    );
  };

  // Función para gestionar el cambio de selección de los ítems (checkboxes)
  const handleCheckboxChange = (item, subSectionKey) => {
    setSelectedItems(prevSelectedItems => {
      // Obtener los ítems actualmente seleccionados para la subsección dada
      const currentItems = prevSelectedItems[subSectionKey] || [];
      return {
        ...prevSelectedItems,
        [subSectionKey]: currentItems.includes(item)
          ? currentItems.filter(i => i !== item) // Desmarcar el ítem si ya está seleccionado
          : [...currentItems, item] // Marcar el ítem si no está seleccionado
      };
    });
  };

  return (
    <div className="menu">
      <h2 className="menu-title">Menú</h2>
      {data.menu.map((section, index) => (
        <div key={index} className="type-list menu-section">
          {/* Título de la sección con un manejador de clic para alternar su visibilidad */}
          <h2
            onClick={() => handleToggleSection(index)}
            className="section-title"
            style={{ cursor: 'pointer' }}
          >
           <span className="capitalize-first-letter with-sections">
            {capitalizeFirstLetter(section.seccion || section.section)}
            <GiForkKnifeSpoon className={`icon-menu ${openSections.includes(index) ? 'icon-expanded' : 'icon-collapsed'}`} />
          </span>
          </h2>
          {openSections.includes(index) && (
            <div className="section-content">
              {/* Mostrar subsecciones si existen */}
              {section.subSections && Object.keys(section.subSections).map(subSectionKey => (
                <div key={subSectionKey} className="sub-section">
                  {/* Título de la subsección con primera letra capitalizada */}
                  <h3 className="capitalize-first-letter">
                   {capitalizeFirstLetter(subSectionKey)}
                  </h3>
                  <ItemList
                    items={section.subSections[subSectionKey].map(capitalizeFirstLetter)} // Capitalizar cada ítem en la subsección
                    selectedItems={selectedItems[subSectionKey] || []} // Ítems seleccionados en la subsección
                    onCheckboxChange={(item) => handleCheckboxChange(item, subSectionKey)} // Manejar cambio de selección
                    itemType={subSectionKey} // Tipo de ítem basado en el nombre de la subsección
                    className="list" // Clase CSS para estilizar la lista
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

// Validación de las propiedades del componente
MenuWithSections.propTypes = {
  data: PropTypes.shape({
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        seccion: PropTypes.string,
        section: PropTypes.string,
        subSections: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)), // Las subsecciones se representan como un objeto donde cada clave es un nombre de subsección y el valor es una lista de ítems
      })
    ).isRequired,
  }).isRequired,
};

export default MenuWithSections;
