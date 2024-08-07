import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/general/carruselitems.css';
import { FaTree, FaBirthdayCake, FaConciergeBell, FaHome, FaSun } from 'react-icons/fa';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="feature" onDragStart={handleDragStart}>
    <div className="icon-container">
      <FaTree className="fa-icon" color="#ff6f61" />
    </div>
    <h2>Jardines</h2>
  </div>,
  <div className="feature" onDragStart={handleDragStart}>
    <div className="icon-container">
      <FaBirthdayCake className="fa-icon" color="#ff6f61" />
    </div>
    <h2>Salones infantiles</h2>
   
  </div>,
  <div className="feature" onDragStart={handleDragStart}>
    <div className="icon-container">
      <FaConciergeBell className="fa-icon" color="#ff6f61" />
    </div>
    <h2>Salones</h2>
  </div>,
  <div className="feature" onDragStart={handleDragStart}>
    <div className="icon-container">
      <FaHome className="fa-icon" color="#ff6f61" />
    </div>
    <h2>Haciendas</h2>
  </div>,
  <div className="feature" onDragStart={handleDragStart}>
    <div className="icon-container">
      <FaSun className="fa-icon" color="#ff6f61" />
    </div>
    <h2>Terrazas</h2>
  </div>,
];

export const CarruselItems = () => {
    return (
        <div className="carousel-container-view">
             <div className="header-garden">
                <h2>Jardines ideales para eventos de 15 años, bodas, y celebraciones al aire libre.</h2>
            </div>
        
            <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
                0: { items: 1 },
                564: { items: 2 },
                1024: { items: 3 },
            }}
            autoPlay
            autoPlayInterval={1500}
            infinite
            disableDotsControls
            disableButtonsControls
            />
              <div className="header-garden">
                <h3>Disfruta de un ambiente natural y elegante.</h3>
            </div>
        </div>
      );
}
