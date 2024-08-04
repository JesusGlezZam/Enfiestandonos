import React from 'react';
import { FaTree, FaBirthdayCake, FaConciergeBell, FaHome, FaSun } from 'react-icons/fa';

export const Inicio = () => {
  return (
    <div className="inicio">
      <header className="header">
        <h1>Bienvenido a Enfiestándonos</h1>
        <div className="search-bar">
          <input type="text" placeholder="Busca tu espacio ideal..." />
          <button type="button">Buscar</button>
        </div>
      </header>
      <section className="features">
        <div className="feature">
          <div className="icon-container">
            <FaTree size={80} color="#ff6f61" />
          </div>
          <h2>Jardines</h2>
        {/*  <p>Jardines ideales para eventos de 15 años, bodas, y celebraciones al aire libre. Disfruta de un ambiente natural y elegante.</p> */}
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaBirthdayCake size={80} color="#ff6f61" />
          </div>
          <h2>Salones infantiles</h2>
        {/*   <p>Perfectos para fiestas de cumpleaños infantiles y eventos temáticos para niños. Crea recuerdos inolvidables con nuestros espacios seguros y divertidos.</p> */}
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaConciergeBell size={80} color="#ff6f61" />
          </div>
          <h2>Salones</h2>
         {/*  <p>Espacios versátiles para cualquier tipo de evento, desde conferencias hasta fiestas privadas. Equipados con todo lo necesario para tu comodidad.</p> */}
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaHome size={80} color="#ff6f61" />
          </div>
          <h2>Haciendas</h2>
         {/*  <p>Elige nuestras haciendas para una celebración con un toque histórico y rústico. Perfectas para bodas y eventos de alto perfil.</p>*/}
        </div>
        <div className="feature">
          <div className="icon-container">
            <FaSun size={80} color="#ff6f61" />
          </div>
          <h2>Terrazas</h2>
         {/*  <p>Terrazas con vistas espectaculares, ideales para eventos al aire libre y reuniones sociales. Disfruta de una experiencia única en un ambiente relajado.</p> */}
        </div>
      </section>
    </div>
  );
};
