import React, { useEffect, useState } from 'react';
import { FilteredItemList } from '../shared/Lugar/FilteredItemList';
import { Galery } from '../shared/Lugar/Galery';
import { useParams } from 'react-router-dom';
import { jardinesData } from '../../helpers/datosdummy2';
import { FaGlassCheers, FaHome, FaLeaf, FaMapMarkerAlt, FaSun } from 'react-icons/fa';
import { BsFillGiftFill } from 'react-icons/bs';
import Menu from '../shared/Lugar/PlatillosList';
//import './DetalleLugar.css'; // Importa el archivo de estilos para disposición general

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
      return null;
  }
};

const formatUrl = (name) => {
  return name.toLowerCase().replace(/ /g, '-');
};

const formatName = (name) => {
  return name.replace(/[-\s]/g, '').toLowerCase();
};

export const DetalleLugar = () => {
  const { itemType, name } = useParams(); // Obtén los parámetros de la URL
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    // Aquí puedes realizar una consulta para obtener los detalles del lugar usando itemType y name
    const fetchItemDetails = () => {
      // Filtra los datos según el itemType y name
      let data;
      if (itemType === 'jardin') {
        data = jardinesData.jardines.find(jardin => formatUrl(jardin.name) === name);
      }
      // Agrega más condiciones para otros tipos si es necesario
      setItemDetails(data);
    };

    fetchItemDetails();
  }, [itemType, name]);

  // Aquí usamos formatName solo cuando lo necesites en ese formato
  const formattedName = formatName(name);

  if (!itemDetails) return <div>Cargando...</div>;

  return (
    <div className='master-container'>
      
      <h1>{getIconByType(itemType)} {itemDetails.name}</h1>
      <Galery itemType={itemType} name={formattedName} />
    <div className="main-container">
      <div className="left-column">
          <div className="filtered-item-list">
            <FilteredItemList type="eventos" items={itemDetails.tipos_de_eventos}  columns={3} initialVisibleCount={9} />
          </div>
          <div className="filtered-item-list">
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

    <div className="filtered-item-list menu-list">
            <Menu data={{ menu: itemDetails.menu }} />
            <FilteredItemList className="menu-section"  type="Servicios adicionales" items={itemDetails.servicios_adicionales}  />
          </div>
    </div>

  );
};
