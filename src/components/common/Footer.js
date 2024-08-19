// Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/general/footer.css';

export const Footer = () => {
  return (
    <footer >
      <p>&copy; 2024 Enfiestándonos. Todos los derechos reservados.</p>
      <nav>
        <ul>
          <li><NavLink to="/inicio">Inicio</NavLink></li>
          <li><NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
          <li><NavLink to="/espacios-para-tu-evento">Espacios para tu evento</NavLink></li>
          <li><NavLink to="/reserva-tu-evento">Reserva tu evento</NavLink></li>
          <li><NavLink to="/galeria">Galeria</NavLink></li>
        </ul>
      </nav>
    </footer>
  );
};
