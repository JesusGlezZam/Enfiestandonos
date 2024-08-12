import React from 'react'

import { getImagePath } from './Images';
import '../../styles/general/typeEventCard.css'
import { FaBirthdayCake, FaClock, FaMapMarkerAlt, FaSun, FaUser,FaLeaf, FaBuilding, FaHome } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { Link } from 'react-router-dom';



const getIconByType = (type) => {
  switch (type) {
    case 'jardin':
      return <FaLeaf />;
    case 'infantil':
      return <FaBirthdayCake />;
    case 'salon':
      return <FaBuilding />;
    case 'hacienda':
      return <FaHome />;
    case 'terraza':
      return <FaSun />;
    default:
      return null;
  }
};
export const Cards = ({ items, itemType }) => {
   return (
    <section className='event-items'>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '48%',flex: '4'}}>
                  <MdCelebration className='detail-icon celebration' size={20} />
                  <span className="event-text">
                    {item.tipos_de_eventos
                      .filter(evento => evento.available)
                      .slice(0, 3)
                      .map(evento => evento.name)
                      .join(', ')
                    }
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', width: '48%', flex: '2' }}>
                  <Link 
                    to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="maps-button"
                  >
                    <FaMapMarkerAlt className='detail-icon maps' />
                  </Link>
                </div>
              </div>
            </div>
              
        
              <div className='detail-item'>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', width: '48%', flex: '4' }}>
                    <FaUser className='detail-icon user' />
                    <span>Capacidad máxima: <span className='capacity'>{item.capacity}</span></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', width: '48%', flex: '2' }}>
                    <FaClock className='detail-icon available' />
                    <span>{item.hours}</span>
                  </div>
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