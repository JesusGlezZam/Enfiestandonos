import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt, FaUser, FaClock } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { paginateArray } from '../../../helpers/utils'; // Asegúrate de tener la función de paginado

export const SectionCarrusel = ({ title, items, itemType }) => {
    const pageSize = 6; // Número de elementos por página
    const [currentPage, setCurrentPage] = useState(0);

    const paginatedItems = paginateArray(items, pageSize);
    console.log('Paginated Items:', paginatedItems); // Depura aquí

    const settings = {
        dots: false,
        infinite: true,
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
    console.log('Current Items:', currentItems); // Depura aquí
    console.log('Paginated Items:', paginatedItems);
    console.log('Items Prop:', items);


    return (
        <section className='custom-carousel-section'>
            <h1 className='custom-carousel-title'><strong>{title}</strong> ideales para eventos.</h1>
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
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', width: '48%' }}>
                                                <MdCelebration className='detail-icon celebration' size={20} />
                                                <span className="event-text">
                                                    {(item.tipos_de_eventos || [])  
                                                        .filter(evento => evento.available)
                                                        .slice(0, 3)
                                                        .map(evento => evento.name)
                                                        .join(', ')
                                                        || 'No hay eventos disponibles'}
                                                </span>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', width: '48%' }}>
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

                                    <div className='detail-item'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', width: '48%' }}>
                                                <FaUser className='detail-icon user' />
                                                <span>Cap. máxima: <span className='capacity'>{item.capacity || 'No disponible'}</span></span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', width: '48%' }}>
                                                <FaClock className='detail-icon available' />
                                                <span>{item.hours || 'No disponible'}</span>
                                            </div>
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
