import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/general/carrusel.css';
import { paginateArray } from '../../helpers/utils'; // Importa la función de paginado

export const Carrusel2 = ({ title, items }) => {
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
      arrows: false, // Muestra flechas para navegar manualmente
      autoplay: true, // Activar desplazamiento automático
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
    console.log(paginatedItems)

    return (
        <section className='custom-carousel-section'>
        <h1 className='custom-carousel-title'><strong>{title}</strong> ideales para eventos.</h1>
        <Slider {...settings} className="custom-carousel-slider">
          {items.map((item, index) => (
            <div key={index} className="custom-carousel-item">
              <div className="custom-carousel-image-container">
                <img src={item.image} alt={item.name} className="custom-carousel-image" />
              </div>
              <div className="custom-carousel-info">
                <h2 className="custom-carousel-item-title">{item.name}</h2>
                <p className="custom-carousel-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
}
