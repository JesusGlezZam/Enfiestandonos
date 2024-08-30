import React, { useEffect, useState } from 'react';
import { FilteredItemList } from '../shared/Lugar/FilteredItemList';
import { Galery } from '../shared/Lugar/Galery';
import { useLocation, useParams } from 'react-router-dom';
import { jardinesData } from '../../helpers/datosdummy2';
import { FaGlassCheers, FaHome, FaLeaf, FaMapMarkerAlt, FaSun } from 'react-icons/fa';
import { BsFillGiftFill } from 'react-icons/bs';
import MenuWithSections from '../shared/Lugar/MenuWithSections'; // Asegúrate de la ruta correcta
import { PromotionSections } from '../shared/Lugar/PromotionSections';

// Función para obtener el ícono según el tipo de lugar
const getIconByType = (type) => {
  switch (type) {
    case 'jardin':
      return <FaLeaf className="icon-jardin" />;
    case 'infantil':
      return <BsFillGiftFill className="icon-infantil" />;
    case 'salon':
      return <FaGlassCheers className="icon-salon" />;
    case 'hacienda':
      return <FaHome className="icon-hacienda" />;
    case 'terraza':
      return <FaSun className="icon-terraza" />;
    default:
      return null; // Retorna null si el tipo no coincide
  }
};

// Función para formatear el nombre eliminando espacios y guiones
const formatName = (name) => {
  return name.replace(/[-\s]/g, '').toLowerCase();
};

// Componente principal que muestra los detalles de un lugar específico
export const DetalleLugar = () => {
  // Obtiene los parámetros de la URL
  const { itemType, name } = useParams();
  
  const location = useLocation();
  const { selectedId } = location.state || {}; // Obtiene el ID seleccionado del estado de la ubicación
  const [itemDetails, setItemDetails] = useState(null); // Estado para almacenar los detalles del lugar

  // Efecto para cargar los detalles del lugar basado en el tipo y ID seleccionados
  useEffect(() => {
    if (!selectedId) {
      console.warn('No se proporcionó selectedId');
      return;
    }

    // Función para obtener los detalles del lugar
    const fetchItemDetails = () => {
      let data;
      if (itemType === 'jardin') {
        data = jardinesData.jardines.find(jardin => jardin.id === selectedId);
      }
      setItemDetails(data); // Actualiza el estado con los detalles del lugar
    };

    fetchItemDetails();
  }, [itemType, selectedId]); // Ejecuta el efecto cuando cambian itemType o selectedId

  const formattedName = formatName(name); // Formatea el nombre para su uso en la galería

  // Muestra un mensaje de carga si los detalles aún no están disponibles
  if (!itemDetails) {
    return <div>Cargando...</div>;
  }

  // Muestra un mensaje si no hay información del menú disponible
  if (!itemDetails.menu) {
    return <div>No hay información del menú disponible.</div>;
  }

  // Función para manejar el clic en los enlaces de navegación
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Renderiza el componente principal
  return (
    <div className='master-container'>
      
      <h1>{getIconByType(itemType)} {itemDetails.name}</h1>
      <Galery itemType={itemType} name={formattedName} />

      <div className="welcome-section">
        <h2>Bienvenidos</h2>
        <p>
          En {itemDetails.name}, te ofrecemos un espacio único para tus eventos. 
        </p>
        <p>
        Conoce todo lo que podemos ofrecerte para hacer de tu celebración un momento inolvidable.
        </p>
      </div>

      <div className="main-container">
        <div className="left-column">
          <header className="sticky-header">
            <nav>
              <ul>
                <li><button onClick={() => scrollToSection('eventos')}>Eventos</button></li>
                <li><button onClick={() => scrollToSection('amenidades')}>Amenidades</button></li>
                <li><button onClick={() => scrollToSection('paquetes')}>Paquetes</button></li>
                <li><button onClick={() => scrollToSection('menu')}>Menú</button></li>
                <li><button onClick={() => scrollToSection('adicionales')}>Servicios adicionales</button></li>
              </ul>
            </nav>
          </header>

          <div id="eventos" className="filtered-item-list">
            <FilteredItemList type="Eventos celebrados" items={itemDetails.tipos_de_eventos} columns={3} initialVisibleCount={6} />
          </div>
          <div id="amenidades" className="filtered-item-list">
            <FilteredItemList type="amenidades" items={itemDetails.amenidades} />
          </div>
        </div>
        <div className="right-column">
          <div className="map-header">
            <FaMapMarkerAlt className="map-icon" />
            <h3 className="heading">¿Dónde se encuentra ubicado el espacio para tu evento?</h3>
          </div>
          <div className="map-container">
            <iframe
              title="Ubicación en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.078776469801!2d-99.03628248509827!3d19.5743523867978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f21b96e33297%3A0x89d9e6ed6d96ec04!2sC.%20Tarandacuaho%2026%2C%20Emiliano%20Zapata%201a%20Secc%2C%2055200%20Ecatepec%20de%20Morelos%2C%20Méx.!5e0!3m2!1ses-419!2smx!4v1687010408750!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
            <p className="address">
              {itemDetails.address}
            </p>
          </div>
        </div>
      </div>
      <div id="paquetes" className='promotion'>
          <h3>
          Explora nuestros paquetes y descubre cómo podemos hacer que tu evento sea perfecto.
          </h3>
          <h2 className="promociones-title">Paquetes</h2>
          <PromotionSections data={itemDetails} subSection="A Celebrar"  type="Menu1"  />
          <PromotionSections data={itemDetails} subSection="Enfiestandonos" type="Menu2"/>
          <PromotionSections data={itemDetails} subSection="Fiesta sin fin" type="Menu3" />
             
      </div>


      <div id="menu" className="menu-list">
        <MenuWithSections data={itemDetails}  />
      </div>
      
      <div id="adicionales">
        <FilteredItemList type="Servicios adicionales" items={itemDetails.servicios_adicionales} columns={4} initialVisibleCount={4} />
      </div>
      
    </div>
  );
};