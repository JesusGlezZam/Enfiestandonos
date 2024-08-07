import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer'>
        <p>&copy; 2024 Enfiestándonos. Todos los derechos reservados.</p>
        <nav>
            <ul>
            <li> <NavLink to="/inicio">Inicio</NavLink></li>
            <li><NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
            <li><NavLink to="/espacios-para-tu-evento">Espacios para tu evento</NavLink></li>
            <li><NavLink to="/reserva-tu-evento">Reserva tu evento</NavLink></li>
            <li><NavLink to="/galeria">Galeria</NavLink></li>
            </ul>
        </nav>
    </footer>
  )
}
