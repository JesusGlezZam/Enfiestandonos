import React, { useEffect, useState } from 'react'
import { FaGlassCheers } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';

export const Header = () => {
  const [showMessage, setShowMessage] = useState(true);
  const navigate = useNavigate(); // Hook para manejar la navegación

  const handleScroll = () => {
    if (window.scrollY > 50) { // Ajusta el valor para cuando ocultar el mensaje
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  };


  const handleClick = () => {
    navigate('/inicio'); // Redirige a la ruta de inicio
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='header'>
        <nav>
            <div className='logo' onClick={handleClick}>
              <h2 className='logo'> Enfiestándonos  <FaGlassCheers className='detail-icon celebration'  /></h2>
            </div>

            {/**Temporal hasta implementar la barra 
            {showMessage && (
              <div className='welcome-message'>
                <h2>Nos especializamos en convertir tus eventos en momentos inolvidables.</h2>
              </div>  
            )} */}
        </nav>
    </div>
  );
};

