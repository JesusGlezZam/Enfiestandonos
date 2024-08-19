import React from 'react'

import { getImagePath } from './Images';
import '../../styles/general/typeEventCard.css'
import { FaClock, FaMapMarkerAlt, FaSun, FaUser,FaLeaf, FaHome, FaGlassCheers } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { BsFillGiftFill } from 'react-icons/bs';



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

export const Cards = ({ items, itemType }) => {
   return (
    <section>
      <div className={`${itemType}-cards-container`}>
        {items.map((item) => (
          <div key={item.id} className={`${itemType}-card`}>
            <img 
              src={getImagePath(itemType, item.name)} 
              alt={item.name} 
              className={`${itemType}-image`} 
            />
          <div className={`${itemType}-info`}>
            <h2>
              {getIconByType(itemType)} {item.name}
            </h2>
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
                                    .join(', ')
                                    || 'No hay eventos disponibles'}
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