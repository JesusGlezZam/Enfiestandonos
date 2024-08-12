import { getImagePath } from '../components/shared/Images'; // Asegúrate de que la ruta sea correcta

export const jardinesData = {
    "type": "jardin",
    "jardines": [
      {
        "id": 1,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 1",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
        "capacity": 200,
        "price": 1500,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": false },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 2,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 2",
        image: getImagePath('jardin', 'Los Cisnes'),
        "address": "Valle de Tapajoz 18, Valle de Aragon 3ra Secc, 55280 Ecatepec de Morelos, Méx.",
        "hours": "10:00 - 20:00",
        "capacity": 150,
        "price": 1200,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": false },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": false },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": false },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": false },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": false },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 3,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 3",
        image: getImagePath('jardin', 'Rosalinda'),
        "address": "Nardo & Avenida Tecnológico, Jardines del Tepeyac, 55220 Ecatepec de Morelos, Méx.",
        "hours": "8:00 - 22:00",
        "capacity": 180,
        "price": 1400,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": false },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": false },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": false },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": false },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 4,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 4",
        image: getImagePath('jardin', 'Casa Blanca'),
        "address": "C. Salamanca 41, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 21:00",
        "capacity": 250,
        "price": 2000,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 5,
        "name": "Oasis",
        "description": "Descripción del Jardín 5",
       image: getImagePath('jardin', 'Oasis'),
        "address": "Pensamientos 64, entre Av maravillas y azahares, Jardines del Tepeyac, 55220 Ecatepec de Morelos, Méx.",
        "hours": "10:00 - 23:00",
        "capacity": 300,
        "price": 2500,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": false },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 6,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 6",
        image: getImagePath('jardin', 'Kristal Jardin'),
        "address": "Av. Central 24-1, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "11:00 - 22:00",
        "capacity": 170,
        "price": 1300,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": false },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": false },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": false },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 7,
        "name": "Green Party",
        "description": "Descripción del Jardín 7",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
        "capacity": 220,
        "price": 1700,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 8,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 8",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "Dirección del Jardín 8",
        "hours": "9:00 - 20:00",
        "capacity": 200,
        "price": 1500,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 9,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 9",
        image: getImagePath('jardin', 'Los Cisnes'),
        "address": "Dirección del Jardín 9",
        "hours": "10:00 AM - 19:00",
        "capacity": 150,
        "price": 1200,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": false },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": false },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": false },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": false },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": false },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": false },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 10,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 10",
        image: getImagePath('jardin', 'Rosalinda'),
        "address": "Dirección del Jardín 10",
        "hours": "8:00 - 22:00",
        "capacity": 180,
        "price": 1400,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": false },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": false },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": false },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": false },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 11,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 11",
        image: getImagePath('jardin', 'Casa Blanca'),
        "address": "Dirección del Jardín 11",
        "hours": "9:00 - 21:00",
        "capacity": 250,
        "price": 2000,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 12,
        "name": "Oasis",
        "description": "Descripción del Jardín 12",
        image: getImagePath('jardin', 'Oasis'),
        "address": "Dirección del Jardín 12",
        "hours": "10:00 - 22:00 ",
        "capacity": 300,
        "price": 2500,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": false },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 13,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 13",
        image: getImagePath('jardin', 'Kristal Jardin'),
        "address": "Dirección del Jardín 13",
        "hours": "11:00 - 18:00",
        "capacity": 170,
        "price": 1300,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": false },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": false },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": false },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 14,
        "name": "Green Party",
        "description": "Descripción del Jardín 14",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Dirección del Jardín 14",
        "hours": "9:00 - 18:00",
        "capacity": 220,
        "price": 1700,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 15,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 15",
        image: getImagePath('jardin', 'Casa Blanca'),
        "address": "Dirección del Jardín 15",
        "hours": "9:00 - 21:00",
        "capacity": 200,
        "price": 1500,
        "amenidades": [
          { "id": 1, "name": "Recibidor", "available": true },
          { "id": 2, "name": "Cambiador", "available": true },
          { "id": 3, "name": "Área de cocina", "available": true },
          { "id": 4, "name": "Pantalla para proyectar", "available": true },
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Salida de emergencia", "available": true },
          { "id": 8, "name": "Acceso a discapacitados", "available": true },
          { "id": 9, "name": "Tipo de pago (TC, TD, WiFi)", "available": true }
        ],
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Picnics corporativos", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiestas de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      }
    ]


      /* Verificar si el jardín tiene una amenidad específica
const hasAmenity = jardin.amenidades.some(amenity => amenity.name === "Pantalla para proyectar" && amenity.available);

// Verificar si el jardín es adecuado para un tipo de evento específico
const hasEventType = jardin.tipos_de_eventos.some(event => event.name === "Bodas" && event.available);

console.log(hasAmenity);  // true
console.log(hasEventType); // true*/
}
  

