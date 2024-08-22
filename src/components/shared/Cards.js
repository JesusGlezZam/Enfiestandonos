import React from 'react'

import { getImagePath } from './Images';
import '../../styles/general/typeEventCard.css'
import { FaClock, FaMapMarkerAlt, FaSun, FaUser,FaLeaf, FaHome, FaGlassCheers } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { BsFillGiftFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';



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
  return name.toLowerCase().replace(/ /g, '-');
};


export const Cards = ({ items, itemType }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

 



  return (
    <section>
      <div className={`${itemType}-cards-container`}>
        {items.map((item) => (
          <div key={item.id} className={`${itemType}-card`}>
         
          <Link to={`${currentUrl}/${formatUrl(item.name)}`}>
        
              <img 
                src={getImagePath(itemType, item.name)} 
                alt={item.name} 
                className={`${itemType}-image`} 
              />
            </Link>
            <div className={`${itemType}-info`}>
            <Link to={`${currentUrl}/${formatUrl(item.name)}`}>
                <h2>
                  {getIconByType(itemType)} {item.name}
                </h2>
              </Link>
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