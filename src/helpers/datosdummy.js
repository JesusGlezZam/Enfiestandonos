// src/helpers/datosdummy.js
import { getImagePath } from '../components/shared/Images'; // Asegúrate de que la ruta sea correcta

console.log(getImagePath('infantil', 'Santa Maria'));
console.log(getImagePath('jardin', 'Los Cisnes'));
console.log(getImagePath('jardin', 'Rosalinda'));




export const jardinesData = {
  type: "jardin",
  jardines: [
    { id: 1, name: "Santa Maria", description: 'Descripción del Jardín 1', image: getImagePath('jardin', 'Santa Maria'), },
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



 {/**  export const infantilesData = {
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
    { id: 1, name: "Eduardos", description: 'Descripción del Jardín 1', image: getImagePath('salon', 'Eduardos') },
    { id: 2, name: 'Real del Valle', description: 'Descripción del Jardín 2', image: getImagePath('salon', 'Real del Valle')  },
    { id: 3, name: 'Santa Teresa', description: 'Descripción del Jardín 3', image: getImagePath('salon', 'Santa Teresa')  },
    { id: 4, name: 'San Diego II', description: 'Descripción del Jardín 4', image: getImagePath('salon', 'San Diego II') },
    { id: 5, name: 'Santa Clara', description: 'Descripción del Jardín 5', image: getImagePath('salon', 'Santa Clara')  },
    { id: 6, name: 'Bersach', description: 'Descripción del Jardín 6', image: getImagePath('salon', 'Bersach') },
    { id: 7, name: 'Aries Premier Lounge', description: 'Descripción del Jardín 7', image: getImagePath('salon', 'Aries Premier Lounge') },
    // ...
    ] 
  };*/}

  export const haciendasData = {
    type: "hacienda", 
  haciendas: [
    {
      id: 1,
      name: "Manchitas",
      description: "Descripción del Infantil 1",
      image: getImagePath('hacienda', 'Manchitas'),
      address: "Dirección de Manchitas",
      hours: "9:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
          { "id": 2, "name": "Fiestas temáticas", "available": true },
          { "id": 3, "name": "Show de payasos o magos", "available": true },
          { "id": 4, "name": "Eventos escolares", "available": true }
        ]
    },
    {
      id: 2,
      name: "Manchitas",
      description: "Descripción del Infantil 2",
      image: getImagePath('hacienda', 'Manchitas'),
      address: "Dirección de Manchitas",
      hours: "9:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
          { "id": 2, "name": "Fiestas temáticas", "available": true },
          { "id": 3, "name": "Show de payasos o magos", "available": true },
          { "id": 4, "name": "Eventos escolares", "available": true }
        ]
    },{
      id: 3,
      name: "Manchitas",
      description: "Descripción del Infantil 3",
      image: getImagePath('hacienda', 'Manchitas'),
      address: "Dirección de Manchitas",
      hours: "9:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
          { "id": 2, "name": "Fiestas temáticas", "available": true },
          { "id": 3, "name": "Show de payasos o magos", "available": true },
          { "id": 4, "name": "Eventos escolares", "available": true }
        ]
    },
    {
      id: 4,
      name: "Manchitas",
      description: "Descripción del Infantil 4",
      image: getImagePath('hacienda', 'Manchitas'),
      address: "Dirección de Manchitas",
      hours: "9:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
          { "id": 2, "name": "Fiestas temáticas", "available": true },
          { "id": 3, "name": "Show de payasos o magos", "available": true },
          { "id": 4, "name": "Eventos escolares", "available": true }
        ]
    }
   // ...
  ] 
  };

  export const terrazasData = {
    type: "terraza", 
  terrazas: [
   /* { id: 1, name: "ter santa maria", description: 'Descripción del Jardín 1', image: 'url1' },
    { id: 2, name: 'ter los cisnes', description: 'Descripción del Jardín 2', image: 'url2' },
    { id: 3, name: 'ter jardin de santiago', description: 'Descripción del Jardín 3', image: 'url3' },
    { id: 4, name: 'ter dany garden', description: 'Descripción del Jardín 4', image: 'url4' },
    { id: 5, name: 'ter oasis', description: 'Descripción del Jardín 5', image: 'url5' },
    { id: 6, name: 'ter kristal jardin', description: 'Descripción del Jardín 6', image: 'url6' },
    { id: 7, name: 'ter Green Party ', description: 'Descripción del Jardín 7', image: 'url7' },*/
    // ...
  ]
};

export const infantilesData = {
  type: "infantil",
  infantiles: [
    {
      id: 1,
      name: "Manchitas",
      description: "Descripción del Infantil 1",
      image: getImagePath('infantil', 'Manchitas'),
      address: "Dirección de Manchitas",
      hours: "9:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
          { "id": 2, "name": "Fiestas temáticas", "available": true },
          { "id": 3, "name": "Show de payasos o magos", "available": true },
          { "id": 4, "name": "Eventos escolares", "available": true }
        ]
    },
    {
      id: 2,
      name: "Romano Kids",
      description: "Descripción del Infantil 2",
      image: getImagePath('infantil', 'Romano Kids'),
      address: "Dirección de Romano Kids",
      hours: "10:00 - 19:00",
      capacity: 120,
      price: 900,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 3,
      name: "Happy Sheep",
      description: "Descripción del Infantil 3",
      image: getImagePath('infantil', 'Happy Sheep'),
      address: "Dirección de Happy Sheep",
      hours: "9:00 - 20:00",
      capacity: 150,
      price: 1000,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
        "tipos_de_eventos": [
          { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
          { "id": 2, "name": "Fiestas temáticas", "available": true },
          { "id": 3, "name": "Show de payasos o magos", "available": true },
          { "id": 4, "name": "Eventos escolares", "available": true }
        ]

    },
    {
      id: 4,
      name: "Princesas y Dragones",
      description: "Descripción del Infantil 4",
      image: getImagePath('infantil', 'Princesas y Dragones'),
      address: "Dirección de Princesas y Dragones",
      hours: "9:00 - 18:00",
      capacity: 80,
      price: 750,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 5,
      name: "Kids",
      description: "Descripción del Infantil 5",
      image: getImagePath('infantil', 'Kids'),
      address: "Dirección de Kids",
      hours: "10:00 - 19:00",
      capacity: 110,
      price: 850,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 6,
      name: "Charly Land",
      description: "Descripción del Infantil 6",
      image: getImagePath('infantil', 'Charly Land'),
      address: "Dirección de Charly Land",
      hours: "9:00 - 20:00",
      capacity: 130,
      price: 950,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 7,
      name: "Mayitos",
      description: "Descripción del Infantil 7",
      image: getImagePath('infantil', 'Mayitos'),
      address: "Dirección de Mayitos",
      hours: "10:00 - 18:00",
      capacity: 90,
      price: 700,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 8,
      name: "Tanylandia",
      description: "Descripción del Infantil 8",
      image: getImagePath('infantil', 'Tanylandia'),
      address: "Dirección de Tanylandia",
      hours: "9:00 - 19:00",
      capacity: 140,
      price: 900,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 9,
      name: "El Grillo",
      description: "Descripción del Infantil 9",
      image: getImagePath('infantil', 'El Grillo'),
      address: "Dirección de El Grillo",
      hours: "10:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 10,
      name: "Manchitas",
      description: "Descripción del Infantil 10",
      image: getImagePath('infantil', 'Manchitas'),
      address: "Dirección de Manchitas",
      hours: "9:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
          { "id": 2, "name": "Fiestas temáticas", "available": true },
          { "id": 3, "name": "Show de payasos o magos", "available": true },
          { "id": 4, "name": "Eventos escolares", "available": true }
        ]
    },
    {
      id: 11,
      name: "Romano Kids",
      description: "Descripción del Infantil 11",
      image: getImagePath('infantil', 'Romano Kids'),
      address: "Dirección de Romano Kids",
      hours: "10:00 - 19:00",
      capacity: 120,
      price: 900,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 12,
      name: "Happy Sheep",
      description: "Descripción del Infantil 12",
      image: getImagePath('infantil', 'Happy Sheep'),
      address: "Dirección de Happy Sheep",
      hours: "9:00 - 20:00",
      capacity: 150,
      price: 1000,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
        "tipos_de_eventos": [
          { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
          { "id": 2, "name": "Fiestas temáticas", "available": true },
          { "id": 3, "name": "Show de payasos o magos", "available": true },
          { "id": 4, "name": "Eventos escolares", "available": true }
        ]

    },
    {
      id: 13,
      name: "Princesas y Dragones",
      description: "Descripción del Infantil 13",
      image: getImagePath('infantil', 'Princesas y Dragones'),
      address: "Dirección de Princesas y Dragones",
      hours: "9:00 - 18:00",
      capacity: 80,
      price: 750,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 14,
      name: "Kids",
      description: "Descripción del Infantil 14",
      image: getImagePath('infantil', 'Kids'),
      address: "Dirección de Kids",
      hours: "10:00 - 19:00",
      capacity: 110,
      price: 850,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 15,
      name: "Charly Land",
      description: "Descripción del Infantil 15",
      image: getImagePath('infantil', 'Charly Land'),
      address: "Dirección de Charly Land",
      hours: "9:00 - 20:00",
      capacity: 130,
      price: 950,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 16,
      name: "Charly Land",
      description: "Descripción del Infantil 16",
      image: getImagePath('infantil', 'Charly Land'),
      address: "Dirección de Charly Land",
      hours: "9:00 - 20:00",
      capacity: 130,
      price: 950,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 17,
      name: "Mayitos",
      description: "Descripción del Infantil 17",
      image: getImagePath('infantil', 'Mayitos'),
      address: "Dirección de Mayitos",
      hours: "10:00 - 18:00",
      capacity: 90,
      price: 700,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 18,
      name: "Tanylandia",
      description: "Descripción del Infantil 18",
      image: getImagePath('infantil', 'Tanylandia'),
      address: "Dirección de Tanylandia",
      hours: "9:00 - 19:00",
      capacity: 140,
      price: 900,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 19,
      name: "El Grillo",
      description: "Descripción del Infantil 19",
      image: getImagePath('infantil', 'El Grillo'),
      address: "Dirección de El Grillo",
      hours: "10:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 20,
      name: "Charly Land",
      description: "Descripción del Infantil 20",
      image: getImagePath('infantil', 'Charly Land'),
      address: "Dirección de Charly Land",
      hours: "9:00 - 20:00",
      capacity: 130,
      price: 950,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 21,
      name: "Mayitos",
      description: "Descripción del Infantil 21",
      image: getImagePath('infantil', 'Mayitos'),
      address: "Dirección de Mayitos",
      hours: "10:00 - 18:00",
      capacity: 90,
      price: 700,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 22,
      name: "Tanylandia",
      description: "Descripción del Infantil 22",
      image: getImagePath('infantil', 'Tanylandia'),
      address: "Dirección de Tanylandia",
      hours: "9:00 - 19:00",
      capacity: 140,
      price: 900,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 23,
      name: "El Grillo",
      description: "Descripción del Infantil 23",
      image: getImagePath('infantil', 'El Grillo'),
      address: "Dirección de El Grillo",
      hours: "10:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 24,
      name: "El Grillo",
      description: "Descripción del Infantil 24",
      image: getImagePath('infantil', 'El Grillo'),
      address: "Dirección de El Grillo",
      hours: "10:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    },
    {
      id: 25,
      name: "El Grillo",
      description: "Descripción del Infantil 25",
      image: getImagePath('infantil', 'El Grillo'),
      address: "Dirección de El Grillo",
      hours: "10:00 - 18:00",
      capacity: 100,
      price: 800,
      amenidades: [
        { id: 1, name: "Zona de juegos", available: true },
        { id: 2, name: "Área de descanso", available: true },
        { id: 3, name: "Catering para niños", available: true },
        { id: 4, name: "Decoración temática", available: true },
        { id: 5, name: "WiFi", available: true }
      ] ,
      "tipos_de_eventos": [
        { "id": 1, "name": "Fiestas de cumpleaños infantiles", "available": true },
        { "id": 2, "name": "Fiestas temáticas", "available": true },
        { "id": 3, "name": "Show de payasos o magos", "available": true },
        { "id": 4, "name": "Eventos escolares", "available": true }
      ]
    }
    
    

  ]
};


export const salonesData = {
  type: "salon",
  salones: [
    {
      id: 1,
      name: "Eduardos",
      description: "Descripción del Salón Eduardos",
      image: getImagePath('salon', 'Eduardos'),
      address: "Dirección del Salón Eduardos",
      hours: "10:00 - 22:00",
      capacity: 250,
      price: 3000,
      amenidades: [
        { id: 1, name: "Sonido profesional", available: true },
        { id: 2, name: "Pantalla para proyección", available: true },
        { id: 3, name: "Sistema de climatización", available: true },
        { id: 4, name: "Catering", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
      tipos_de_eventos: [
        { "id": 1, "name": "Bodas", "available": true },
        { "id": 2, "name": "Quinceaños", "available": true },
        { "id": 3, "name": "Eventos sociales", "available": true },
        { "id": 4, "name": "Fiestas de fin de año", "available": true },
        { "id": 5, "name": "Reuniones empresariales", "available": true },
        { "id": 6, "name": "Conferencias", "available": true }
      ]
    },
    {
      id: 2,
      name: "Real del Valle",
      description: "Descripción del Salón Real del Valle",
      image: getImagePath('salon', 'Real del Valle'),
      address: "Dirección del Salón Real del Valle",
      hours: "11:00 - 23:00",
      capacity: 200,
      price: 2500,
      amenidades: [
        { id: 1, name: "Sonido profesional", available: true },
        { id: 2, name: "Pantalla para proyección", available: true },
        { id: 3, name: "Sistema de climatización", available: true },
        { id: 4, name: "Catering", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
      tipos_de_eventos: [
        { "id": 1, "name": "Bodas", "available": true },
        { "id": 2, "name": "Quinceaños", "available": true },
        { "id": 3, "name": "Eventos sociales", "available": true },
        { "id": 4, "name": "Fiestas de fin de año", "available": true },
        { "id": 5, "name": "Reuniones empresariales", "available": true },
        { "id": 6, "name": "Conferencias", "available": true }
      ]
    },
    {
      id: 3,
      name: "Santa Teresa",
      description: "Descripción del Salón Santa Teresa",
      image: getImagePath('salon', 'Santa Teresa'),
      address: "Dirección del Salón Santa Teresa",
      hours: "10:00 - 21:00",
      capacity: 180,
      price: 2200,
      amenidades: [
        { id: 1, name: "Sonido profesional", available: true },
        { id: 2, name: "Pantalla para proyección", available: true },
        { id: 3, name: "Sistema de climatización", available: true },
        { id: 4, name: "Catering", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
      tipos_de_eventos: [
        { "id": 1, "name": "Bodas", "available": true },
        { "id": 2, "name": "Quinceaños", "available": true },
        { "id": 3, "name": "Eventos sociales", "available": true },
        { "id": 4, "name": "Fiestas de fin de año", "available": true },
        { "id": 5, "name": "Reuniones empresariales", "available": true },
        { "id": 6, "name": "Conferencias", "available": true }
      ]
    },
    {
      id: 4,
      name: "San Diego II",
      description: "Descripción del Salón San Diego II",
      image: getImagePath('salon', 'San Diego II'),
      address: "Dirección del Salón San Diego II",
      hours: "9:00 - 22:00",
      capacity: 300,
      price: 3500,
      amenidades: [
        { id: 1, name: "Sonido profesional", available: true },
        { id: 2, name: "Pantalla para proyección", available: true },
        { id: 3, name: "Sistema de climatización", available: true },
        { id: 4, name: "Catering", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
      tipos_de_eventos: [
        { "id": 1, "name": "Bodas", "available": true },
        { "id": 2, "name": "Quinceaños", "available": true },
        { "id": 3, "name": "Eventos sociales", "available": true },
        { "id": 4, "name": "Fiestas de fin de año", "available": true },
        { "id": 5, "name": "Reuniones empresariales", "available": true },
        { "id": 6, "name": "Conferencias", "available": true }
      ]
    },
    {
      id: 5,
      name: "Santa Clara",
      description: "Descripción del Salón Santa Clara",
      image: getImagePath('salon', 'Santa Clara'),
      address: "Dirección del Salón Santa Clara",
      hours: "10:00 - 20:00",
      capacity: 150,
      price: 2000,
      amenidades: [
        { id: 1, name: "Sonido profesional", available: true },
        { id: 2, name: "Pantalla para proyección", available: true },
        { id: 3, name: "Sistema de climatización", available: true },
        { id: 4, name: "Catering", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
      tipos_de_eventos: [
        { "id": 1, "name": "Bodas", "available": true },
        { "id": 2, "name": "Quinceaños", "available": true },
        { "id": 3, "name": "Eventos sociales", "available": true },
        { "id": 4, "name": "Fiestas de fin de año", "available": true },
        { "id": 5, "name": "Reuniones empresariales", "available": true },
        { "id": 6, "name": "Conferencias", "available": true }
      ]
    },
    {
      id: 6,
      name: "Bersach",
      description: "Descripción del Salón Bersach",
      image: getImagePath('salon', 'Bersach'),
      address: "Dirección del Salón Bersach",
      hours: "11:00 - 22:00",
      capacity: 220,
      price: 2700,
      amenidades: [
        { id: 1, name: "Sonido profesional", available: true },
        { id: 2, name: "Pantalla para proyección", available: true },
        { id: 3, name: "Sistema de climatización", available: true },
        { id: 4, name: "Catering", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
      tipos_de_eventos: [
        { "id": 1, "name": "Bodas", "available": true },
        { "id": 2, "name": "Quinceaños", "available": true },
        { "id": 3, "name": "Eventos sociales", "available": true },
        { "id": 4, "name": "Fiestas de fin de año", "available": true },
        { "id": 5, "name": "Reuniones empresariales", "available": true },
        { "id": 6, "name": "Conferencias", "available": true }
      ]
    },
    {
      id: 7,
      name: "Aries Premier Lounge",
      description: "Descripción del Salón Aries Premier Lounge",
      image: getImagePath('salon', 'Aries Premier Lounge'),
      address: "Dirección del Salón Aries Premier Lounge",
      hours: "10:00 - 23:00",
      capacity: 280,
      price: 3200,
      amenidades: [
        { id: 1, name: "Sonido profesional", available: true },
        { id: 2, name: "Pantalla para proyección", available: true },
        { id: 3, name: "Sistema de climatización", available: true },
        { id: 4, name: "Catering", available: true },
        { id: 5, name: "WiFi", available: true }
      ],
      tipos_de_eventos: [
        { "id": 1, "name": "Bodas", "available": true },
        { "id": 2, "name": "Quinceaños", "available": true },
        { "id": 3, "name": "Eventos sociales", "available": true },
        { "id": 4, "name": "Fiestas de fin de año", "available": true },
        { "id": 5, "name": "Reuniones empresariales", "available": true },
        { "id": 6, "name": "Conferencias", "available": true }
      ]
    },
    

    
    
    // Agrega más salones según sea necesario
  ]
};
