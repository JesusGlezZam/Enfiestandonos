import React, { useState } from 'react';
import { getImagePath } from './Images';
import '../../styles/general/typeEventCard.css';
import { FaClock, FaMapMarkerAlt, FaSun, FaUser, FaLeaf, FaHome, FaGlassCheers } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { BsFillGiftFill } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';

const getIconByType = (type) => {
  switch (type) {
    case 'jardin':
      return <FaLeaf className="icon-jardin" />;
    case 'infantil':
      return <BsFillGiftFill className="icon-infantil" />;
    case 'salon':
      return <FaGlassCheers className="icon-salon" />;
    case 'hacienda':
      return <FaHome className="icon-hacienda" />;
    case 'terraza':
      return <FaSun className="icon-terraza" />;
    default:
      return null;
  }
};

const formatUrl = (name) => {
  if (typeof name === 'string') {
    return name
      .trim() // Elimina espacios en blanco al principio y al final
      .toLowerCase() // Convierte a minúsculas
      .replace(/\s+/g, '-') // Reemplaza espacios con guiones
      .replace(/[^\w\-]+/g, ''); // Elimina caracteres no alfanuméricos y no guiones
  }
  console.warn('El parámetro `name` no es una cadena válida:', name);
  return ''; // Devuelve una cadena vacía si `name` no es una cadena
};

export const Cards = ({ items, itemType }) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [selectedId, setSelectedId] = useState(null); // Estado para almacenar el ID seleccionado
  const navigate = useNavigate();

  const handleLinkClick = (name, id) => {
    if (typeof name !== 'string' || !name.trim()) {
      console.warn('El nombre proporcionado no es válido:', name);
      return;
    }
  
    setSelectedId(id); // Guardar el ID en el estado
    console.log('Link ID seleccionado:', id); // Puedes usar este ID como lo necesites
  
    // Verifica que `currentUrl` esté definido correctamente
    const formattedUrl = formatUrl(name);
    navigate(`${currentUrl}/${formattedUrl}`, { state: { selectedId: id } }); // Navega a DetalleLugar
  };
  
  
  return (
    <section>
      <div className={`${itemType}-cards-container`}>
        {items.map((item) => (
          <div key={item.id} className={`${itemType}-card`}>
            <div onClick={() => handleLinkClick(item.name, item.id)}>
              <img 
                src={getImagePath(itemType, item.name)} 
                alt={item.name} 
                className={`${itemType}-image`} 
              />
            </div>
            <div className={`${itemType}-info`}>
              <div onClick={() => handleLinkClick(item.name, item.id)}>
                <h2>
                  {getIconByType(itemType)} {item.name}
                </h2>
              </div>
              <section className={`${itemType}-details`}>
                <div className='detail-item'>
                  <div className='detail-container'>
                    <div className='detail-info'>
                      <MdCelebration className='detail-icon celebration' size={20} />
                      <span>
                        {(item.tipos_de_eventos || [])  
                          .filter(evento => evento.available)
                          .slice(0, 3)
                          .map(evento => evento.name)
                          .join(', ') || 'No hay eventos disponibles'}
                      </span>
                    </div>

                    <div className='detail-info'>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="maps-button"
                      >
                        <FaMapMarkerAlt className='detail-icon maps' />
                      </a>
                      <span>{item.address}</span>
                    </div>
                  </div>
                </div>              
                <div className='detail-container'>
                  <div className='detail-info'>
                    <FaUser className='detail-icon user' />
                    <span>Cap. máxima: <span className='capacity'>{item.capacity || 'No disponible'}</span></span>
                  </div>
                  <div className='detail-info'>
                    <FaClock className='detail-icon available' />
                    <span>{item.hours || 'No disponible'}</span>
                    <span>{item.description || 'No disponible'}</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
