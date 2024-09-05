import React, { useEffect, useRef, useState } from 'react';
import { FilteredItemList } from '../shared/Lugar/FilteredItemList';
import { Galery } from '../shared/Lugar/Galery';
import { useLocation, useParams } from 'react-router-dom';
import { jardinesData } from '../../helpers/datosdummy2';
import { FaGlassCheers, FaHome, FaLeaf, FaMapMarkerAlt, FaSun } from 'react-icons/fa';
import { BsFillGiftFill } from 'react-icons/bs';
import MenuWithSections from '../shared/Lugar/MenuWithSections';
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
  const { itemType, name } = useParams();
  const location = useLocation();
  const { selectedId } = location.state || {};
  const [itemDetails, setItemDetails] = useState(null);

  // Ref para el sticky header
  const stickyHeaderRef = useRef(null);

  // Estado para la sección activa
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!selectedId) {
      console.warn('No se proporcionó selectedId');
      return;
    }

    const fetchItemDetails = () => {
      let data;
      if (itemType === 'jardin') {
        data = jardinesData.jardines.find(jardin => jardin.id === selectedId);
      }
      setItemDetails(data);
    };

    fetchItemDetails();
  }, [itemType, selectedId]);

  useEffect(() => {
    // Define las secciones y los umbrales
    const sections = ['eventos', 'amenidades', 'paquetes', 'menu', 'adicionales'];
    const thresholds = {
      eventos: 0.7,
      amenidades: 0.7,
      paquetes: 0.5,
      menu: 0.5,
      adicionales: 1
    };

    // Crear y almacenar observadores
    const observers = {};

    const updateObservers = () => {
      // Primero, desconectar todos los observadores existentes
      sections.forEach(sectionId => {
        if (observers[sectionId]) {
          observers[sectionId].disconnect();
        }
      });

      // Crear un nuevo observador para cada sección
      sections.forEach(sectionId => {
        const threshold = thresholds[sectionId] || 0.0; // Asegúrate de obtener el umbral para cada sección

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }, {
          threshold: threshold // Usar el umbral aquí
        });

        observers[sectionId] = observer;
        const section = document.getElementById(sectionId);
        if (section) {
          observer.observe(section);
        }
      });
    };

    // Configurar los observadores inicialmente
    updateObservers();

    // Actualizar observadores cuando cambien las secciones
    return () => {
      // Desconectar todos los observadores al desmontar
      sections.forEach(sectionId => {
        if (observers[sectionId]) {
          observers[sectionId].disconnect();
        }
      });
    };
  }, [itemDetails]); // Dependencia en itemDetails para actualizar observadores cuando cambie el contenido

  const scrollToSection = (sectionId) => {
    const headerHeight = stickyHeaderRef.current?.offsetHeight || 0;
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  const formattedName = formatName(name);

  if (!itemDetails) {
    return <div>Cargando...</div>;
  }

  if (!itemDetails.menu) {
    return <div>No hay información del menú disponible.</div>;
  }

  return (
    <div className='master-container contents'>
      <h1>{getIconByType(itemType)} {itemDetails.name}</h1>
      <Galery itemType={itemType} name={formattedName} />

      <div className="welcome-section">
        <h2>¡Bienvenidos!</h2>
        <p>
          En {itemDetails.name}, te ofrecemos un espacio único para tus eventos. 
        </p>
        <p>
          Conoce todo lo que podemos ofrecerte para hacer de tu celebración un momento inolvidable.
        </p>
      </div>
      
      <header className="sticky-header" ref={stickyHeaderRef}>
        <nav>
          <ul>
            <li className={activeSection === 'eventos' ? 'active' : ''}>
              <button onClick={() => scrollToSection('eventos')}>Eventos</button>
            </li>
            <li className={activeSection === 'amenidades' ? 'active' : ''}>
              <button onClick={() => scrollToSection('amenidades')}>Amenidades</button>
            </li>
            <li className={activeSection === 'paquetes' ? 'active' : ''}>
              <button onClick={() => scrollToSection('paquetes')}>Paquetes</button>
            </li>
            <li className={activeSection === 'menu' ? 'active' : ''}>
              <button onClick={() => scrollToSection('menu')}>Menú</button>
            </li>
            <li className={activeSection === 'adicionales' ? 'active' : ''}>
              <button onClick={() => scrollToSection('adicionales')}>Servicios adicionales</button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="main-container">
        <div className="left-column">
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
        <PromotionSections data={itemDetails} subSection="A Celebrar" type="Menu1" />
        <PromotionSections data={itemDetails} subSection="Enfiestandonos" type="Menu2"/>
        <PromotionSections data={itemDetails} subSection="Fiesta sin fin" type="Menu3" />
      </div>

      <div id="menu" className="menu-list">
        <MenuWithSections data={itemDetails} />
      </div>

      <div id="adicionales">
        <FilteredItemList type="Servicios adicionales" items={itemDetails.servicios_adicionales} columns={4} initialVisibleCount={8} />
      </div>
    </div>
  );
};
