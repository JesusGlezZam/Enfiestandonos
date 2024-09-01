import React, { useState } from 'react';
import { List } from './List';
import { MenuSection } from './MenuSection';
import '../../../styles/events/promociones.css';
import { MdCelebration } from 'react-icons/md';
import { GiForkKnifeSpoon } from 'react-icons/gi';

// Función para capitalizar la primera letra de un texto
const capitalizeFirstLetter = (text) => {
  if (typeof text !== 'string') return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const PromotionSections = ({ data, subSection, type }) => {
  // Estado para gestionar las secciones abiertas
  const [openSections, setOpenSections] = useState([]);

  // Estado para gestionar los ítems seleccionados en cada subsección
  const [selectedItems, setSelectedItems] = useState({});

  // Estado para el número de personas
  const [peopleCount, setPeopleCount] = useState(data.capacity_initial);

  // Estado para el mensaje de alerta
  const [alertMessage, setAlertMessage] = useState('');

  // Función para alternar la visibilidad de las secciones del menú
  const handleToggleSection = (sectionIndex) => {
    setOpenSections(prevOpenSections =>
      prevOpenSections.includes(sectionIndex)
        ? prevOpenSections.filter(index => index !== sectionIndex) // Cerrar la sección si ya está abierta
        : [...prevOpenSections, sectionIndex] // Abrir la sección si no está abierta
    );
  };

  // Manejar el cambio en el número de personas
  const handlePeopleCountChange = (event) => {
    const value = Number(event.target.value);
    let message = '';

    if (!isNaN(value)) {
      if (value < data.capacity_initial) {
        message = `El mínimo es ${data.capacity_initial} personas.`;
      } else if (value > data.capacity_max) {
        message = `El máximo es ${data.capacity_max} personas.`;
      } else {
        message = ''; // Sin mensaje si el valor está en el rango permitido
      }
      setPeopleCount(value);
    } else {
      message = ''; // Si el valor no es un número, no mostrar mensaje
    }

    setAlertMessage(message);
  };

  // Manejar el doble clic para seleccionar el texto del campo
  const handleDoubleClick = (event) => {
    event.target.select(); // Seleccionar el texto del campo
  };

  // Filtrar las secciones basándose en el prop subSection
  const filteredSections = data.paquetes.filter(section =>
    section.seccion === subSection
  );

  return (
    <div className="promociones">
      {filteredSections.map((section, index) => {
        // Calcular el precio total para el paquete actual
        const pricePerPerson = section.price;
        const minimumCapacity = data.capacity_initial;
        const totalPrice = peopleCount ? pricePerPerson * peopleCount : 0;

        return (
          <div key={index} className="type-list menu-section package">
            {/* Título de la sección con un manejador de clic para alternar su visibilidad */}
            <div className="section-header" onClick={() => handleToggleSection(index)}>
              <span className="section-title">
              <MdCelebration className='detail-icon-promotion celebration'/> {capitalizeFirstLetter(section.seccion)}
              </span>
              <span className="section-price">
                ${pricePerPerson} MXN por persona
              </span>
            </div>
            <div clasName='test'>
            {openSections.includes(index) && (
              <div className="section-content">
                {/* Información de precios */}
                <div className="pricing-info"> 
                  <p className="package-description">
                    ¡Este paquete está diseñado para ofrecerte la mejor experiencia en tu evento! 
                  </p>
                  <div className="people-selector">
                    <label htmlFor="people-count">Número de personas:</label>
                    <input 
                      id="people-count" 
                      type="number" 
                      min={minimumCapacity} 
                      max={data.capacity_max} 
                      value={peopleCount || ''} 
                      onChange={handlePeopleCountChange} 
                      onDoubleClick={handleDoubleClick} 
                      placeholder="Introduce número" 
                    />
                    {alertMessage && <p className="alert-message">{alertMessage}</p>}
                  </div>
                  <h4>
                    <strong>Precio por persona:</strong> ${pricePerPerson} MXN
                  </h4>
                  <h4>
                    <strong>Precio total para el salón:</strong> ${totalPrice.toLocaleString()} MXN
                  </h4>
                  <p className="pricing-note">
                    Este paquete tiene un costo inicial de ${pricePerPerson} MXN por persona, 
                    con un mínimo de {minimumCapacity} personas. Si planeas invitar a más personas, 
                    ajustaremos el costo total para que se adapte a tus necesidades hasta {data.capacity_max} personas.
                  </p>
                  <p className="pricing-disclaimer">
                    *El precio total puede variar según el número final de asistentes.
                  </p>
                </div>
           
                {/* Contenedor para las subsecciones en tres columnas */}
                <div className='top-sections'>
                  {section.subSections && Object.keys(section.subSections).map((subSectionKey, idx) => (
                    <div key={subSectionKey} className={`sub-section col-${(idx % 3) + 1}`}>
                      {/* Título de la subsección con primera letra capitalizada */}
                      <h3 className="capitalize-first-letter">
                         {capitalizeFirstLetter(subSectionKey)}
                      </h3>
                      <List
                        items={section.subSections[subSectionKey].map(capitalizeFirstLetter)} // Capitalizar cada ítem en la subsección
                        selectedItems={selectedItems[subSectionKey] || []} // Ítems seleccionados en la subsección
                        itemType={subSectionKey} // Tipo de ítem basado en el nombre de la subsección
                      />
                    </div>
                  ))}
                </div>

                {/* Menú en la parte inferior */}
                <div className='menu-section-bottom'>
                  <MenuSection data={data} type={type} />
                </div>
              </div>
            )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
