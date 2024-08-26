import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt, FaUser, FaClock, FaLeaf, FaSun, FaGlassCheers, FaHome } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { paginateArray } from '../../../helpers/utils'; // Importa la función para paginar los elementos
import { useNavigate } from 'react-router-dom';
import { BsFillGiftFill } from 'react-icons/bs';

// Función que devuelve el ícono correspondiente según el tipo de evento
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
            return <FaSun className='icon-terraza'/>;
        default:
            return null;
    }
};

// Componente principal del carrusel de secciones
export const SectionCarrusel = ({ title, type, items, itemType }) => {
    const pageSize = 6; // Número de elementos a mostrar por página
    const [currentPage, setCurrentPage] = useState(0); // Estado para la página actual
    const navigate = useNavigate(); // Hook para navegar entre rutas

    // Pagina los elementos usando la función de utilidad
    const paginatedItems = paginateArray(items, pageSize);
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
                    slidesToShow: 3,
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

    // Elementos de la página actual
    const currentItems = paginatedItems[currentPage] || [];
    
    // Maneja la navegación al hacer clic en un título o botón
    const handleNavigation = (type) => {
        navigate(`/espacios-para-tu-evento/${type}`, { state: { scrollToTop: true } });
    };
    
    return (
        <section className='custom-carousel-section'>
            <div className="custom-carousel-title-container">
                {/* Título del carrusel y botón para ver todos los elementos */}
                <h2 className="custom-carousel-title" onClick={() => handleNavigation(type)}> 
                    {getIconByType(type)} {title} 
                </h2>
                <strong className="custom-carousel-link" onClick={() => handleNavigation(type)}>Ver todos</strong>
            </div>
            
            {/* Carrusel de elementos */}
            <Slider {...settings} className="custom-carousel-slider">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <div key={index} className="custom-carousel-item">
                            <div className="custom-carousel-image-container">
                                {/* Imagen del elemento */}
                                <img 
                                    src={item.image || 'default-image.png'} 
                                    alt={item.name || 'No disponible'} 
                                    className="custom-carousel-image" 
                                />
                            </div>
                            <div className="custom-carousel-info">
                                {/* Título del elemento */}
                                <h2 className="custom-carousel-item-title">{item.name || 'No disponible'}</h2>
                                
                                {/* Sección de detalles del elemento */}
                                <section className={`${itemType}-details`}>
                                    <div className='detail-item'>
                                        <div className='detail-container'>
                                            {/* Detalle de tipos de eventos disponibles */}
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

                                            {/* Enlace a Google Maps con la dirección */}
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
                                        {/* Capacidad máxima del lugar */}
                                        <div className='detail-info'>
                                            <FaUser className='detail-icon user' />
                                            <span>Cap. máxima: <span className='capacity'>{item.capacity || 'No disponible'}</span></span>
                                        </div>
                                        {/* Horario disponible */}
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
