import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { paginateArray } from '../../helpers/utils'; // Importa la función de paginado

export const SectionCarousel = ({ title, items }) => {
  const pageSize = 6; // Número de elementos por página (total de elementos en el carrusel)
  const [currentPage, setCurrentPage] = useState(0);
  
  // Divide los elementos en páginas
  const paginatedItems = paginateArray(items, pageSize);

  // Configuración del Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 imágenes a la vez
    slidesToScroll: 1,
    arrows: false,
    autoplay: false, // Activar desplazamiento automático
    autoplaySpeed: 3000, // Intervalo entre desplazamientos automáticos
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Muestra 3 tarjetas a la vez en pantallas grandes
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

  // Obtener los elementos para la página actual
  const currentItems = paginatedItems[currentPage] || [];
  return (
    <div className="carousel-section">
      <h2>{title}</h2>
      <Slider {...settings}>
        {currentItems.map((item) => (
          <div key={item.id} className="feature">
            <div className="image-container">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="text-container">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}    
