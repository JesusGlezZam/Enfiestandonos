import React, { useState } from 'react';
import { FaRing, FaCrown, FaBirthdayCake, FaTree, FaCreditCard, FaCouch, FaWheelchair } from 'react-icons/fa';
import { GiHolySymbol, GiBabyBottle, GiBriefcase, GiLovers, GiFamilyHouse, GiPartyPopper, GiDress, GiJumpingRope, GiAerialSignal, GiExitDoor, GiCigarette, GiSuitcase, GiDramaMasks, GiHeadphones, GiBeerStein, GiTacos, GiBalloons, GiPaintBrush, GiCandyCanes, GiFlowers, GiPianoKeys, GiFrenchHorn, GiTrumpet, GiAccordion, GiDrum, GiSaxophone, GiHotMeal, GiCarSeat } from 'react-icons/gi';
import { MdOutlineScreenShare } from 'react-icons/md';
const iconMap = {

  /** Tipos de eventos */
  'bodas': <FaRing className="icon" />,
  'quinceaños': <FaCrown className="icon" />,
  'bautizos': <GiHolySymbol className="icon" />,
  'cumpleaños': <FaBirthdayCake className="icon" />,  
  'baby shower o revelacion de genero': <GiBabyBottle className="icon pregnat"/>,   //color="#FF1493  
  'picnics corporativos': <GiBriefcase className="icon" />,
  'eventos al aire libre': <FaTree className="icon" />,
  'fiestas de compromiso': <GiLovers className="icon" />,
  'reuniones familiares': <GiFamilyHouse className="icon" />,
  'cualquier otro tipo de evento': <GiPartyPopper className="icon" />,
  
  /* Amenidades   */
  'acceso a discapacitados': <FaWheelchair className="icon" />,
  'recibidor': <FaCouch className="icon" />,
  'cambiador': <GiDress className="icon" />,
  'área de cocina': <GiHotMeal className="icon" />,
  'estacionamiento': <GiCarSeat className="icon" />,
  'área de juegos o brincolín': <GiJumpingRope className="icon" />,
  'wifi': <GiAerialSignal className="icon" />,
  'pantalla para proyectar': <MdOutlineScreenShare className="icon" />,
  'salida de emergencia': <GiExitDoor className="icon" />,
  'acepta pago (tc, td)': <FaCreditCard className="icon" />,
  'área para fumar': <GiCigarette className="icon" />,

  /**    Servicios adicionales */
  'coordinador de eventos': <GiSuitcase className="icon" />,
  'animador de eventos': <GiDramaMasks className="icon" />,
  'dj': <GiHeadphones className="icon" />,
  'barra libre':<GiBeerStein className="icon" />, 
  'torna fiesta':<GiTacos  className="icon" /> , 
  'arreglo de globos':<GiBalloons className="icon" />,
  'decoración temática': <GiPaintBrush className="icon" />,
  'mesa de dulces':<GiCandyCanes className="icon" />,
  'arreglos florales': <GiFlowers className="icon" />,
  'música versatil': <GiPianoKeys className="icon" />,
  'música banda': <GiFrenchHorn className="icon" />,
  'mariachi': <GiTrumpet className="icon" />,
  'norteño':<GiAccordion  className="icon" />,
  'banda de rock': <GiDrum className="icon" />,
  'saxofon':<GiSaxophone  className="icon" />,
};

const iconColorMap = {
  'bodas': '#007bff',
  'quinceaños': '#e83e8c',
  'bautizos': '#17a2b8',
  'cumpleaños': '#ffc107',
  'baby shower o revelacion de genero': '#FF1493',
  'picnics corporativos': '#28a745',
  'eventos al aire libre': '#dc3545',
  'fiestas de compromiso': '#FF0000',
  'reuniones familiares': '#6f42c1',
  'cualquier otro tipo de evento': '#00CED1',
  'acceso a discapacitados': '#0d6efd',
  'recibidor': '#D381E0',
  'cambiador': '#C8102E',
  'área de cocina': '#fd7e14',
  'estacionamiento': '#6610f2',
  'área de juegos o brincolín': '#20c997',
  'área para fumar': '#FF0000',
  'wifi': '#0dcaf0',
  'pantalla para proyectar': '#198754',
  'salida de emergencia': '#dc3545',
  'acepta pago (tc, td)': '#ffc107',
  'coordinador de eventos': '#6f42c1',
  'animador de eventos': '#dc3545',
  'dj': '#fd7e14',
  'barra libre': '#FFD700',
  'torna fiesta': '#6F4F28',
  'arreglo de globos': '#FF69B4',
  'decoración temática': '#20c997',
  'mesa de dulces': '#FF4500',
  'arreglos florales': '#e83e8c',
  'música versatil': '#1E90FF',
  'música banda': '#8B4513',
  'mariachi': '#CD5C5C',
  'norteño': '#4CAF50',
  'banda de rock': '#8B4513',
  'saxofon': '#FFD700',
};

// Helper function to get the icon component and apply color
const getIconComponent = (name) => {
  const IconComponent = iconMap[name.toLowerCase()] || <span className="icon-placeholder">Icono no disponible</span>;
  const color = iconColorMap[name.toLowerCase()] || '#000000';
  return React.cloneElement(IconComponent, { style: { color } });
};

export const FilteredItemList = ({ type, items, columns = 3, initialVisibleCount = 6 }) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showAll, setShowAll] = useState(false);
  const [isExpanded, setIsExpanded] = useState(type === "Servicios adicionales" ? false : true);

  if (!items || items.length === 0) {
    return <p>No hay {type} disponibles.</p>;
  }

  const availableItems = items.filter(item => item.available);

  if (availableItems.length === 0) {
    return <p>No hay {type} disponibles.</p>;
  }

  const handleToggleVisibility = () => {
    setShowAll(!showAll);
    setVisibleCount(showAll ? initialVisibleCount : availableItems.length);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`
  };

  const containerClass = type === "Servicios adicionales" ? "type-list menu-section" : "type-list";

  return (
    <div className={containerClass}>
      <h2 onClick={type === "Servicios adicionales" ? handleToggleExpand : null}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h2>
      {isExpanded && (
        <>
          <ul style={gridStyle}>
            {availableItems.slice(0, visibleCount).map((item) => (
              <li key={item.id} className={`${type}-item`}>
                {getIconComponent(item.name)}
                <div className="item-text">{item.name}</div>
              </li>
            ))}
          </ul>
          {availableItems.length > initialVisibleCount && (
            <button onClick={handleToggleVisibility} className="show-more-button">
              {showAll ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </>
      )}
    </div>
  );
};