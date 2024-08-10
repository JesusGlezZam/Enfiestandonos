// src/helpers/datosdummy.js
import { getImagePath } from '../components/shared/Images'; // Asegúrate de que la ruta sea correcta

console.log(getImagePath('infantil', 'Santa Maria'));
console.log(getImagePath('jardin', 'Los Cisnes'));
console.log(getImagePath('jardin', 'Rosalinda'));




export const jardinesData = {
  type: "jardin",
  jardines: [
    { id: 1, name: "Santa Maria", description: 'Descripción del Jardín 1', image: getImagePath('jardin', 'Santa Maria') },
    { id: 2, name: 'Los Cisnes', description: 'Descripción del Jardín 2', image: getImagePath('jardin', 'Los Cisnes') },
    { id: 3, name: 'Rosalinda', description: 'Descripción del Jardín 3', image: getImagePath('jardin', 'Rosalinda') },
    { id: 4, name: 'Casa Blanca', description: 'Descripción del Jardín 4', image: getImagePath('jardin', 'Casa Blanca') },
    { id: 5, name: 'Oasis', description: 'Descripción del Jardín 5', image: getImagePath('jardin', 'Oasis') },
    { id: 6, name: 'Kristal Jardin', description: 'Descripción del Jardín 6', image: getImagePath('jardin', 'Kristal Jardin') },
    { id: 7, name: 'Green Party', description: 'Descripción del Jardín 7', image: getImagePath('jardin', 'Green Party') },
    { id: 8, name: "Santa Maria", description: 'Descripción del Jardín 8', image: getImagePath('jardin', 'Santa Maria') },
    { id: 9, name: 'Los Cisnes', description: 'Descripción del Jardín 9', image: getImagePath('jardin', 'Los Cisnes') },
    { id: 10, name: 'Rosalinda', description: 'Descripción del Jardín  10', image: getImagePath('jardin', 'Rosalinda') },
    { id: 11, name: 'Casa Blanca', description: 'Descripción del Jardín 11', image: getImagePath('jardin', 'Casa Blanca') },
    { id: 12, name: 'Oasis', description: 'Descripción del Jardín 12', image: getImagePath('jardin', 'Oasis') },
    { id: 13, name: 'Kristal Jardin', description: 'Descripción del Jardín 13', image: getImagePath('jardin', 'Kristal Jardin') },
    { id: 14, name: 'Green Party', description: 'Descripción del Jardín 14', image: getImagePath('jardin', 'Green Party') },
    { id: 15, name: 'Casa Blanca', description: 'Descripción del Jardín 15', image: getImagePath('jardin', 'Casa Blanca') },
    { id: 16, name: 'Oasis', description: 'Descripción del Jardín 16', image: getImagePath('jardin', 'Oasis') },
    { id: 17, name: 'Kristal Jardin', description: 'Descripción del Jardín 17', image: getImagePath('jardin', 'Kristal Jardin') },
    { id: 18, name: 'Green Party', description: 'Descripción del Jardín 18', image: getImagePath('jardin', 'Green Party') },
    { id: 19, name: 'Green Party', description: 'Descripción del Jardín 19', image: getImagePath('jardin', 'Green Party') },
  ]
};



  export const infantilesData = {
    type: "infantil", 
  infantiles: [
      { id: 1, name: "Manchitas", description: 'Descripción del Infantil 1', image: getImagePath('infantil', 'Manchitas') },
      { id: 2, name: 'Romano Kids', description: 'Descripción del Infantil 2', image: getImagePath('infantil', 'Romano Kids') },
      { id: 3, name: 'Happy Sheep', description: 'Descripción del Infantil 3', image: getImagePath('infantil', 'Happy Sheep') },
      { id: 4, name: 'Princesas y Dragones', description: 'Descripción del Infantil 4', image: getImagePath('infantil', 'Princesas y Dragones') },
      { id: 5, name: 'Kids', description: 'Descripción del Infantil 5', image: getImagePath('infantil', 'Kids') },
      { id: 6, name: 'Charly Land', description: 'Descripción del Infantil 6', image: getImagePath('infantil', 'Charly Land') },
      { id: 7, name: 'Mayitos', description: 'Descripción del Infantil 7', image: getImagePath('infantil', 'Mayitos') },
      { id: 8, name: 'Tanylandia', description: 'Descripción del Infantil 4', image: getImagePath('infantil', 'Tanylandia') },
      { id: 9, name: 'El Grillo', description: 'Descripción del Infantil 5', image: getImagePath('infantil', 'El Grillo') },
      { id: 10, name: 'Charly Land', description: 'Descripción del Infantil 6', image: getImagePath('infantil', 'Charly Land') },
      { id: 11, name: 'Mayitos', description: 'Descripción del Infantil 7', image: getImagePath('infantil', 'Mayitos') },
    // ...
  ]
};
  
  export const salonesData  = {
    type: "salon", 
  salones: [
    { id: 1, name: "sal santa maria", description: 'Descripción del Jardín 1', image: 'url1' },
    { id: 2, name: 'sal los cisnes', description: 'Descripción del Jardín 2', image: 'url2' },
    { id: 3, name: 'sal jardin de santiago', description: 'Descripción del Jardín 3', image: 'url3' },
    { id: 4, name: 'sal dany garden', description: 'Descripción del Jardín 4', image: 'url4' },
    { id: 5, name: 'sal oasis', description: 'Descripción del Jardín 5', image: 'url5' },
    { id: 6, name: 'sal kristal jardin', description: 'Descripción del Jardín 6', image: 'url6' },
    { id: 7, name: 'sal Green Party ', description: 'Descripción del Jardín 7', image: 'url7' },
    // ...
    ] 
  };

  export const haciendasData = {
    type: "hacienda", 
  haciendas: [
    { id: 1, name: "hac santa maria", description: 'Descripción del Jardín 1', image: 'url1' },
    { id: 2, name: 'hac los cisnes', description: 'Descripción del Jardín 2', image: 'url2' },
    { id: 3, name: 'hac jardin de santiago', description: 'Descripción del Jardín 3', image: 'url3' },
    { id: 4, name: 'hac dany garden', description: 'Descripción del Jardín 4', image: 'url4' },
    { id: 5, name: 'hac oasis', description: 'Descripción del Jardín 5', image: 'url5' },
    { id: 6, name: 'hac kristal jardin', description: 'Descripción del Jardín 6', image: 'url6' },
    { id: 7, name: 'hac Green Party ', description: 'Descripción del Jardín 7', image: 'url7' },
    // ...
  ] 
  };

  export const terrazasData = {
    type: "terraza", 
  terrazas: [
    { id: 1, name: "ter santa maria", description: 'Descripción del Jardín 1', image: 'url1' },
    { id: 2, name: 'ter los cisnes', description: 'Descripción del Jardín 2', image: 'url2' },
    { id: 3, name: 'ter jardin de santiago', description: 'Descripción del Jardín 3', image: 'url3' },
    { id: 4, name: 'ter dany garden', description: 'Descripción del Jardín 4', image: 'url4' },
    { id: 5, name: 'ter oasis', description: 'Descripción del Jardín 5', image: 'url5' },
    { id: 6, name: 'ter kristal jardin', description: 'Descripción del Jardín 6', image: 'url6' },
    { id: 7, name: 'ter Green Party ', description: 'Descripción del Jardín 7', image: 'url7' },
    // ...
  ]
};