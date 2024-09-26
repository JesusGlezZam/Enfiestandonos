import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt, FaUser, FaClock, FaLeaf, FaSun, FaGlassCheers, FaHome } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { paginateArray } from '../../helpers/utils'; // Importa la función para paginar los elementos
import { useNavigate } from 'react-router-dom';
import { BsFillGiftFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

// Función que devuelve el ícono correspondiente según el tipo de evento
const getIconByType = (type) => {
    switch (type) {
        case 'jardin':
            return <FaLeaf className='icon-jardin general'/>;
        case 'infantil':
            return <BsFillGiftFill className='icon-infantil general'/>;
        case 'salon':
            return <FaGlassCheers className='icon-salon general'/>;
        case 'hacienda':
            return <FaHome className='icon-hacienda general'/>;
        case 'terraza':
            return <FaSun className='icon-terraza general'/>;
        default:
            return null;
    }
};

// Componente principal del carrusel de secciones
export const TypeSectionCarrusel = ({ title, type, items, itemType }) => {
    const pageSize = 6; // Número de elementos a mostrar por página
    const [currentPage, setCurrentPage] = useState(0); // Estado para la página actual
    const navigate = useNavigate(); // Hook para navegar entre rutas

    // Pagina los elementos usando la función de utilidad
    const paginatedItems = paginateArray(items, pageSize);
    const currentItems = paginatedItems[currentPage] || [];
    console.log('Paginated Items:', paginatedItems); // Depuración: muestra los elementos paginados en consola

    // Configuración del carrusel
    const settings = {
        dots: false, // Desactivar puntos de navegación
        infinite: true, // Habilitar desplazamiento infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 3, // Número de elementos visibles a la vez
        slidesToScroll: 1, // Número de elementos a desplazar por vez
        arrows: false, // Desactivar flechas de navegación
        autoplay: true, // Habilitar autoplay
        autoplaySpeed: 3000, // Velocidad de autoplay en milisegundos
        initialSlide: 0, // Diapositiva inicial
        responsive: [
            {
                breakpoint: 1024, // Configuración para pantallas de hasta 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Configuración para pantallas de hasta 600px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Configuración para pantallas de hasta 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    
    // Maneja la navegación al hacer clic en un título o botón
    const handleNavigation = (type) => {
        navigate(`/espacios-para-tu-evento/${type}`, { state: { scrollToTop: true } });
    };
    
      // Solo renderiza el carrusel si hay elementos
      if (currentItems.length === 0) return null;

      return (
          <section className='custom-carousel-section'>
              <div className="custom-carousel-title-container">
                  <h2 className="custom-carousel-title" onClick={() => handleNavigation(type)}>
                      <div className="icon-container">
                          {getIconByType(type)} 
                      </div>
                      <span className="title">{title}</span> 
                  </h2>
                  <strong className="custom-carousel-link" onClick={() => handleNavigation(type)}>Ver todos</strong>
              </div>
  
              <Slider {...settings} className="custom-carousel-slider">
                  {currentItems.map((item, index) => (
                      <div key={index} className="custom-carousel-item">
                          <div className="custom-carousel-image-container">
                              <img 
                                  src={item.image || 'default-image.png'} 
                                  alt={item.name || 'No disponible'} 
                                  className="custom-carousel-image" 
                              />
                          </div>
                          <div className={`${itemType}-info`}>
                              <h2>
                                  {getIconByType(itemType)} {item.name || 'No disponible'}
                              </h2>
                              <section className={`${item.itemType}-details`}>
                                  <div className='detail-item'>
                                      <div className='detail-container first'>
                                          <div className='detail-info'>
                                              <MdCelebration className='detail-icon celebration' />
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
                                              <span className='truncate'>{item.address}</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='detail-container'>
                                      <div className='detail-info'>
                                          <FaUser className='detail-icon user' />
                                          <span>Cap. máx: <span className='capacity'>{item.capacity_max || 'No disponible'}</span></span>
                                      </div>
                                      <div className='detail-info'> 
                                          <FontAwesomeIcon className='icon-price detail-icon available' icon={faMoneyBill} color="green" />
                                          <span>${item.price_initial} - ${item.price_final || 'No disponible'}</span>
                                      </div>
                                      <div className='detail-info'>
                                          <FaClock className='detail-icon available' />
                                          <span className='time-event'>
                                              {item.event_hors ? item.event_hors : 'No disponible'}
                                          </span>
                                          {item.event_hors && <span> hrs de evento </span>}
                                      </div>
                                  </div>    
                              </section>
                          </div>
                      </div>
                  ))}
              </Slider>
          </section>
      );
};



