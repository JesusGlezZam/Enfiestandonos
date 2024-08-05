// Carrusel3.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carrusel.css'; // Asegúrate de ajustar la ruta a tu archivo CSS
import { FaTree, FaBirthdayCake, FaConciergeBell, FaHome, FaSun } from 'react-icons/fa';

// Configuración del carrusel
const settings = {
  dots: false, // Desactiva los puntos de navegación
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true, // Habilita las flechas
  centerMode: true, // Si quieres usar el modo centrado
};

export const Carrusel = () => {
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="feature">
          <div className="icon-container">
            <FaTree size={100} color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2 className="title-1">Jardines</h2>
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaBirthdayCake size={100} color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2>
            <span className="title-2-pink">Salones</span><br/> 
            <span className="title-2-blue">Infantiles</span>
          </h2>
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaConciergeBell size={100} color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2 className="title-3">Salones</h2>
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaHome size={100} color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2 className="title-4">Haciendas</h2>
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaSun size={100} color="#ff6f61" /> {/* Aumenta el tamaño del icono */}
          </div>
          <h2 className="title-5">Terrazas</h2>
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
