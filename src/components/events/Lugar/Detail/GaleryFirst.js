import React from 'react';
import './galeryfirst.css';




export const GaleryFirst = ({ itemType, name }) => {
 

 console.log({ itemType, name })

 // Usando Webpack para requerir imágenes dinámicamente basadas en itemType y el nombre formateado
 const images = require.context(`../../../../../public/Enfiestandonos/events/jardin/santamaria/eventos`, false, /\.png$/);
 

 const imagePaths = images.keys().map(images);

 // Contar cuántas imágenes hay
 const numberOfImages = imagePaths.length;

 console.log(`Hay ${numberOfImages} imágenes en la carpeta.`);




  // Toma las primeras  imágenes
  const firstSixImages = imagePaths.slice(0, 5);
  console.log(itemType, name);
  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={firstSixImages[0]} alt="Evento principal" />
      </div>
      <div className="secondary-images">
        {firstSixImages.slice(1).map((src, index) => (
          <img key={index} src={src} alt={`Evento ${index + 2}`} />
        ))}
        <button className="view-more">Ver más (+{numberOfImages - firstSixImages.length})</button>
      </div>
    
    </div>
  );
};


/**
 * import React, { useState, useEffect } from 'react';
import '../../../styles/events/lugar.css';

export const Galery = ({ itemType, name }) => {
  const [imagePaths, setImagePaths] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Usar require.context para importar imágenes dinámicamente
      const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => {
          images[item.replace('./', '')] = r(item);
        });
        return images;
      };

      // Cambia la ruta base según la estructura de tu proyecto
      const images = importAll(require.context('../../../events', false, /\.(jpg|jpeg|png|gif)$/));

      // Filtra las imágenes que pertenecen al tipo de ítem y nombre específicos
      const filteredImages = Object.keys(images).filter(image =>
        image.includes(`${itemType}/${name}/eventos/`)
      );

      // Mapea las rutas filtradas a las URLs de las imágenes
      const imageUrls = filteredImages.map(image => images[image].default); // `.default` puede ser necesario dependiendo de la configuración de Webpack

      setImagePaths(imageUrls);
    } catch (err) {
      setError(err.message);
    }
  }, [itemType, name]);

  if (error) return <div>Error al cargar las imágenes: {error}</div>;
  if (imagePaths.length === 0) return <div>Cargando imágenes...</div>;

  const numberOfImagesToShow = 5;
  const imagesToShow = imagePaths.slice(0, numberOfImagesToShow);

  return (
    <div className="gallery-container">
      <div className="main-image">
        {imagesToShow.length > 0 && <img src={imagesToShow[0]} alt="Evento principal" />}
      </div>
      <div className="secondary-images">
        {imagesToShow.slice(1).map((src, index) => (
          <img key={index} src={src} alt={`Evento ${index + 2}`} />
        ))}
        {imagePaths.length > numberOfImagesToShow && (
          <button className="view-more">Ver más (+{imagePaths.length - numberOfImagesToShow})</button>
        )}
      </div>
    </div>
  );
};

 */