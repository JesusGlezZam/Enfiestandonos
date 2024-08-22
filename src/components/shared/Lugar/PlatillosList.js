import React, { useState } from 'react';

// Componente para mostrar los platillos de una sección
const PlatillosList = ({ platillos }) => {
  if (!Array.isArray(platillos)) {
    return <p>No hay platillos disponibles.</p>;
  }

  return (
    <ul>
      {platillos.map((platillo, index) => (
        <li key={index}>{platillo}</li>
      ))}
    </ul>
  );
};

// Componente para mostrar una sección con platillos
const MenuSection = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='type-list menu-section'>
      <h2 onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {section.seccion || section.section}
      </h2>
      {isOpen && (
        section.platillos ? (
          <PlatillosList platillos={section.platillos} />
        ) : (
          Object.keys(section.subSections).map((subSectionKey) => (
            <div key={subSectionKey} className="sub-section">
              <h3>{subSectionKey}</h3>
              <PlatillosList platillos={section.subSections[subSectionKey]} />
            </div>
          ))
        )
      )}
    </div>
  );
};

// Componente principal para mostrar todo el menú
const Menu = ({ data }) => (
    <div className="menu">
      <h2>Menú</h2> {/* Encabezado para la sección del menú */}
      {data.menu.map((section, index) => (
        <MenuSection key={index} section={section} />
      ))}
    </div>
  );

export default Menu;
