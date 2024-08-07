// Carrusel3.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/general/carruselservices.css';// Asegúrate de ajustar la ruta a tu archivo CSS
import { FaTree, FaBirthdayCake, FaConciergeBell, FaHome, FaSun } from 'react-icons/fa';

// Configuración del carrusel
const settings = {
  dots: false, // Desactiva los puntos de navegación
  infinite: true,
  speed: 500,
  slidesToShow: 4, // mostrar 4 a la vez
  slidesToScroll: 1,
  arrows: true, // Habilita las flechas
  centerMode: false, // Si quieres usar el modo centrado true
  initialSlide: 0, // Comienza en la primera diapositiva

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const CarruselServices = () => {
  return (
    <div>
    <section  className="carousel-container">
      <Slider {...settings}>
        <div className="feature">
          <div className="icon-container">
            <FaTree className="fa-icon" color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2 className="title-1">Jardines</h2>
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaBirthdayCake className="fa-icon" color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2>
            <span className="title-2-pink">Salones</span><br/> 
            <span className="title-2-blue">Infantiles</span>
          </h2>
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaConciergeBell className="fa-icon" color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2 className="title-3">Salones</h2>
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaHome className="fa-icon" color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2 className="title-4">Haciendas</h2>
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaSun className="fa-icon" color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2 className="title-5">Terrazas</h2>
        </div>
      </Slider>
      <p>Donde cada evento es una celebración</p>
      </section>
    </div>
  );
};
