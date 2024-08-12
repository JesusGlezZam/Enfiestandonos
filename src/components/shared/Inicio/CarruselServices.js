// Carrusel3.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBirthdayCake, FaConciergeBell, FaHome, FaSun, FaLeaf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { services } from  '../../../helpers/services';
import '../../../styles/general/carrucelServices.css';

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
    const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/espacios-para-tu-evento/${id}`);
  };

  return (
    <div>
      <section className="carousel-container">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="feature" onClick={() => handleNavigation(service.id)}>
              <div className="icon-container">
                {service.id === "jardin" && <FaLeaf className="fa-icon" color="#ff6f61" />}
                {service.id === "infantil" && <FaBirthdayCake className="fa-icon" color="#ff6f61" />}
                {service.id === "salon" && <FaConciergeBell className="fa-icon" color="#ff6f61" />}
                {service.id === "hacienda" && <FaHome className="fa-icon" color="#ff6f61" />}
                {service.id === "terraza" && <FaSun className="fa-icon" color="#ff6f61" />}
              </div>
              <h2 className="title">{service.name}</h2>
            </div>
          ))}
        </Slider>
        <p>Donde cada evento es una celebración</p>
      </section>
    </div>
  );
};
