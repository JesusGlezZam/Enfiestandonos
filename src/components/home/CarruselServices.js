// Importaciones necesarias para el componente
import React, { useEffect } from 'react';
import Slider from 'react-slick'; // Importa el componente Slider de react-slick para el carrusel
import "slick-carousel/slick/slick.css"; // Importa los estilos CSS para el carrusel
import "slick-carousel/slick/slick-theme.css"; // Importa el tema de estilos CSS para el carrusel
import { FaConciergeBell, FaSun, FaLeaf, FaGlassCheers } from 'react-icons/fa'; // Importa íconos de FontAwesome
import { BsFillGiftFill } from 'react-icons/bs'; // Importa un ícono de Bootstrap
import { useNavigate } from 'react-router-dom'; // Hook para la navegación en React Router
import { services } from  '../../helpers/services'; // Importa los datos de los servicios desde un archivo helper
import '../../styles/general/carrucelServices.css'; // Importa los estilos CSS personalizados para el carrusel

// Configuración del carrusel
const settings = {
  dots: false, // Desactiva los puntos de navegación
  infinite: true, // Habilita el deslizamiento infinito
  speed: 500, // Velocidad de la animación en milisegundos
  slidesToShow: 4, // Número de diapositivas a mostrar simultáneamente
  slidesToScroll: 1, // Número de diapositivas a desplazar al hacer clic en las flechas
  arrows: true, // Habilita las flechas de navegación
  centerMode: false, // Modo centrado desactivado
  initialSlide: 0, // Comienza en la primera diapositiva

  // Configuración para diferentes tamaños de pantalla (responsive design)
  responsive: [
    {
      breakpoint: 1024, // Ancho máximo de pantalla para aplicar esta configuración
      settings: {
        slidesToShow: 3, // Muestra 3 diapositivas a la vez
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600, // Ancho máximo de pantalla para esta configuración
      settings: {
        slidesToShow: 3, // Muestra 3 diapositivas a la vez
        slidesToScroll: 1,
        initialSlide: 2 // Comienza en la tercera diapositiva
      }
    },
    {
      breakpoint: 480, // Ancho máximo de pantalla para esta configuración
      settings: {
        slidesToShow: 1, // Muestra 1 diapositiva a la vez
        slidesToScroll: 1
      }
    }
  ]
};

// Componente CarruselServices
export const CarruselServices = () => {
  const navigate = useNavigate(); // Hook para navegar a diferentes rutas

  // Maneja la navegación cuando un usuario hace clic en una diapositiva
  const handleNavigation = (id) => {
    navigate(`/espacios-para-tu-evento/${id}`, { state: { scrollToTop: true } }); // Navega a la ruta especificada y desplaza la página al inicio
  };

  useEffect(() => {
    // Desplaza la página al inicio cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="carousel-container">
        {/* Renderiza el carrusel con la configuración especificada */}
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="feature" onClick={() => handleNavigation(service.id)}>
              <div className="icon-container" onClick={() => handleNavigation(service.id)}>
                {/* Renderiza el ícono correspondiente según el tipo de servicio */}
                {service.id === "jardin" && <FaLeaf className="fa-icon home-icon-jardin" />}
                {service.id === "infantil" && <BsFillGiftFill className="fa-icon home-icon-infantil" />}
                {service.id === "salon" && <FaGlassCheers className="fa-icon home-icon-salon" />}
                {service.id === "hacienda" && <FaConciergeBell className="fa-icon home-icon-hacienda" />}
                {service.id === "terraza" && <FaSun className="fa-icon home-icon-terraza" />}
              </div>
              <h2 className="title">{service.name}</h2> {/* Muestra el nombre del servicio */}
            </div>
          ))}
        </Slider>
        <p>Donde cada evento es una celebración</p> {/* Texto adicional debajo del carrusel */}
      </section>
    </div>
  );
};
