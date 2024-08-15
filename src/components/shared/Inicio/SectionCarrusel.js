import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt, FaUser, FaClock, FaLeaf, FaSun, FaGlassCheers, FaHome } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { paginateArray } from '../../../helpers/utils'; // Asegúrate de tener la función de paginado
import { useNavigate } from 'react-router-dom';
import { BsFillGiftFill } from 'react-icons/bs';

const getIconByType = (type) => {
    switch (type) {
      case 'jardin':
        return <FaLeaf className='icon-jardin'/>;
      case 'infantil':
        return <BsFillGiftFill className='icon-infantil'/>;
      case 'salon':
        return <FaGlassCheers className='icon-salon'/>;
      case 'hacienda':
        return <FaHome className='icon-hacienda'/>;
      case 'terraza':
        return <FaSun />;
      default:
        return null;
    }
  };

export const SectionCarrusel = ({ title, type, items, itemType }) => {
    const pageSize = 6; // Número de elementos por página
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    const paginatedItems = paginateArray(items, pageSize);
    console.log('Paginated Items:', paginatedItems); // Depura aquí

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const currentItems = paginatedItems[currentPage] || [];
    
    const handleNavigation = (type) => {
        navigate(`/espacios-para-tu-evento/${type}`, { state: { scrollToTop: true } });
    };
    
    return (
        <section className='custom-carousel-section'>
            <div className="custom-carousel-title-container">
                <h2 className="custom-carousel-title" onClick={() => handleNavigation(type)}>{getIconByType(type)} {title}</h2>
                <strong className="custom-carousel-link" onClick={() => handleNavigation(type)}>Ver todos</strong>
            </div>
            <Slider {...settings} className="custom-carousel-slider">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <div key={index} className="custom-carousel-item">
                            <div className="custom-carousel-image-container">
                                <img src={item.image || 'default-image.png'} alt={item.name || 'No disponible'} className="custom-carousel-image" />
                            </div>
                            <div className="custom-carousel-info">
                                <h2 className="custom-carousel-item-title">{item.name || 'No disponible'}</h2>
                                
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
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay elementos disponibles para mostrar.</p>
                )}
            </Slider>
        </section>
    );
};
