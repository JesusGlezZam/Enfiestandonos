import React, { useState } from 'react';
import { FaRing, FaBaby, FaCrown, FaBirthdayCake, FaTree, FaHome, FaBriefcase, FaWheelchair, FaCarrot, FaParking, FaWifi, FaMusic, FaTheaterMasks, FaUserPlus, FaHeart, FaCreditCard, FaDoorOpen, FaHeadphones, FaPaintBrush } from 'react-icons/fa';
import { FaCouch } from 'react-icons/fa6';
import { GiDress, GiJumpingRope } from 'react-icons/gi';
import { MdLocalFlorist, MdOutlineScreenShare } from 'react-icons/md';

const iconMap = {
  'bodas': <FaRing className="icon" />,
  'quinceaños': <FaCrown className="icon" />,
  'bautizos': <FaBaby className="icon" />,
  'cumpleaños': <FaBirthdayCake className="icon" />,
  'picnics corporativos': <FaBriefcase className="icon" />,
  'eventos al aire libre': <FaTree className="icon" />,
  'fiestas de compromiso': <FaHeart className="icon" />,
  'reuniones familiares': <FaHome className="icon" />,
  'acceso a discapacitados': <FaWheelchair className="icon" />,
  'recibidor': <FaCouch className="icon" />,
  'cambiador': <GiDress className="icon" />,
  'área de cocina': <FaCarrot className="icon" />,
  'estacionamiento': <FaParking className="icon" />,
  'área de juegos o brincolín': <GiJumpingRope className="icon" />,
  'wifi': <FaWifi className="icon" />,
  'pantalla para proyectar': <MdOutlineScreenShare className="icon" />,
  'salida de emergencia': <FaDoorOpen className="icon" />,
  'acepta pago (tc, td)': <FaCreditCard className="icon" />,
  'coordinador de eventos': <FaUserPlus className="icon" />,
  'animador de eventos': <FaTheaterMasks className="icon" />,
  'dj': <FaHeadphones className="icon" />,
  'decoración temática': <FaPaintBrush className="icon" />,
  'arreglos florales': <MdLocalFlorist className="icon" />,
  'música en vivo': <FaMusic className="icon" />
};

const iconColorMap = {
  'bodas': '#007bff',
  'quinceaños': '#e83e8c',
  'bautizos': '#17a2b8',
  'cumpleaños': '#ffc107',
  'picnics corporativos': '#28a745',
  'eventos al aire libre': '#dc3545',
  'fiestas de compromiso': '#FF0000',
  'reuniones familiares': '#6f42c1',
  'acceso a discapacitados': '#0d6efd',
  'recibidor': '#D381E0',
  'cambiador': '#C8102E',
  'área de cocina': '#fd7e14',
  'estacionamiento': '#6610f2',
  'área de juegos o brincolín': '#20c997',
  'wifi': '#0dcaf0',
  'pantalla para proyectar': '#198754',
  'salida de emergencia': '#dc3545',
  'acepta pago (tc, td)': '#ffc107',
  'coordinador de eventos': '#6f42c1',
  'animador de eventos': '#dc3545',
  'dj': '#fd7e14',
  'decoración temática': '#20c997',
  'arreglos florales': '#e83e8c',
  'música en vivo': '#0d6efd'
};

const getIconByEventName = (name) => {
  return iconMap[name.toLowerCase()] || <span className="icon-placeholder">Icono no disponible</span>; // Devuelve un marcador de posición si no se encuentra el icono
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
    gridTemplateColumns: `repeat(${columns}, 1fr)` // Establece el número de columnas
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
                {React.cloneElement(getIconByEventName(item.name), { style: { color: iconColorMap[item.name.toLowerCase()] || '#000000' } })}
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
