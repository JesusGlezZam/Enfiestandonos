import React, { useState } from 'react';
import { ItemList } from './ItemList';
import { GiMeal } from 'react-icons/gi';
import '../../../styles/events/menuwithsections.css'


// Función para capitalizar la primera letra de un texto
const capitalizeFirstLetter = (text) => {
    if (typeof text !== 'string') return text;
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const MenuSection = ({ data, type }) => {
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

    // Filtrar las secciones basándose en el prop type
    const filteredSections = data.menu.filter(section =>
        section.type === type
    );

    return (
        <div className="menu">
            <h3 className="menu-title promo">Menú</h3>
            {filteredSections.map((section, index) => (
                <div key={index} className="type-list menu-section package">
                    {/* Título de la sección con un manejador de clic para alternar su visibilidad */}
                    <h2
                        onClick={() => handleToggleSection(index)}
                        className="section-title"
                    >
                       <span className="capitalize-first-letter with-sections">
                            {capitalizeFirstLetter(section.seccion || section.section)}
                            <GiMeal className={`icon-menu ${openSections.includes(index) ? 'icon-expanded' : 'icon-collapsed'}`} /> {/*<MdFastfood className="detail-icon menu" /> <GiFoodTruck className="detail-icon menu" />  <GiBowlOfRice className="detail-icon menu" />*/}
                           
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
