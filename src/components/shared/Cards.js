import React, { useState } from 'react';
import { getImagePath } from './Images'; // Función para obtener la ruta de la imagen
import '../../styles/general/typeEventCard.css'; // Archivo de estilos CSS
import { FaClock, FaMapMarkerAlt, FaSun, FaUser, FaLeaf, FaHome, FaGlassCheers } from 'react-icons/fa'; // Iconos de react-icons
import { MdCelebration } from 'react-icons/md';
import { BsFillGiftFill } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

// Función para obtener el icono según el tipo de evento
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
      return null; // Si no hay coincidencia, no se muestra ningún icono
  }
};

// Función para formatear la URL a partir del nombre
const formatUrl = (name) => {
  if (typeof name === 'string') {
    return name
      .trim() // Elimina espacios en blanco al principio y al final
      .toLowerCase() // Convierte a minúsculas
      .replace(/\s+/g, '-') // Reemplaza espacios con guiones
      .replace(/[^\w\-]+/g, ''); // Elimina caracteres no alfanuméricos y no guiones
  }
  console.warn('El parámetro `name` no es una cadena válida:', name); // Advertencia si `name` no es una cadena válida
  return ''; // Devuelve una cadena vacía si `name` no es una cadena
};

// Componente principal que renderiza las tarjetas
export const Cards = ({ items, itemType }) => {
  const location = useLocation(); // Obtiene la ubicación actual
  const currentUrl = location.pathname; // Ruta actual
  const [selectedId, setSelectedId] = useState(null); // Estado para almacenar el ID seleccionado
  const navigate = useNavigate(); // Hook para navegación

  // Maneja el clic en un enlace y navega a la página de detalle del lugar
  const handleLinkClick = (name, id) => {
    if (typeof name !== 'string' || !name.trim()) {
      console.warn('El nombre proporcionado no es válido:', name); // Advertencia si `name` no es válido
      return;
    }
  
    setSelectedId(id); // Guardar el ID en el estado
    console.log('Link ID seleccionado:', id); // Registro del ID seleccionado
  
    const formattedUrl = formatUrl(name); // Formatea el nombre para la URL
    navigate(`${currentUrl}/${formattedUrl}`, { state: { selectedId: id } }); // Navega a DetalleLugar con el ID
  };
  
  return (
    <section>
      <div className={`${itemType}-cards-container`}>
        {items.map((item) => (
          <div key={item.id} className={`${itemType}-card`}>
            {/* Imagen del ítem */}
            <div onClick={() => handleLinkClick(item.name, item.id)}>
              <img 
                src={getImagePath(itemType, item.name)} 
                alt={item.name} 
                className={`${itemType}-image`} 
              />
            </div>
            <div className={`${itemType}-info`}>
              {/* Nombre del ítem con icono */}
              <div onClick={() => handleLinkClick(item.name, item.id)}>
                <h2>
                  {getIconByType(itemType)} {item.name}
                </h2>
              </div>
              <section className={`${itemType}-details`}>
                {/* Detalles del ítem */}
                <div className='detail-item'>
                  <div className='detail-container'>
                    <div className='detail-info'>
                      <MdCelebration className='detail-icon celebration' size={20} />
                      <span>
                        {(item.tipos_de_eventos || [])  
                          .filter(evento => evento.available) // Filtra los eventos disponibles
                          .slice(0, 3) // Toma solo los primeros 3 eventos
                          .map(evento => evento.name) // Obtiene el nombre de cada evento
                          .join(', ') || 'No hay eventos disponibles'} {/* Muestra un mensaje si no hay eventos */}
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
                    <span>Cap. máxima: <span className='capacity'>{item.capacity_max || 'No disponible'}</span></span>
                  </div>
                  <div className='detail-info'>
                    <FaClock className='detail-icon available' />
                    <span>{item.hours || 'No disponible'}</span>
                    <FontAwesomeIcon className='icon-price' icon={faMoneyBill} color="green" />
                    ${item.price_initial} - ${item.price_final || 'No disponible'}
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
