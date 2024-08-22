// src/helpers/images.js
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };
  
  // Importa todas las imágenes en la carpeta especificada
  const images = importAll(require.context('../events', false, /\.(jpg|jpeg|png|gif)$/));
  
  export default images;
  