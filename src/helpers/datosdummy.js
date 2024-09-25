// src/helpers/datosdummy.js
import { getImagePath } from '../components/shared/Images'; // Asegúrate de que la ruta sea correcta

console.log(getImagePath('infantil', 'Santa Maria'));
console.log(getImagePath('jardin', 'Los Cisnes'));
console.log(getImagePath('jardin', 'Rosalinda'));


export const infantilesData = {
  type: "infantil",
  infantiles: [
    {
      id: 1,
      name: "Manchitas",
      description: "Descripción del Infantil 1",
      image: getImagePath('infantil', 'Manchitas'),
      address: "Dirección de Manchitas",
      hours: "9:00 - 23:00",
      price_initial: 220,
      price_final: 390,
      capacity_initial: 120,
      capacity_max: 300,
      tipos_de_eventos: [
          { id: 1, name: "Fiesta de cumpleaños infantil", "available": true },
          { id: 2, name: "Fiesta temáticas", "available": true },
          { id: 3, name: "Fiesta de Superhéroes", "available": true },
          { id: 4, name: "Fiesta de Princesas", "available": true },
          { id: 5, name: "Fiesta de Dinosaurios", "available": true },
          { id: 6, name: "Show de payaso", "available": true },
          { id: 7, name: "Show de magia", "available": true },
          { id: 8, name: "Eventos escolares", "available": true }
        ],
        "amenidades": [
        { id: 1, name: "Acceso a discapacitados", "available": true },
        { id: 2, name: "Recibidor", "available": true },
        { id: 3, name: "Cambiador", "available": true },
        { id: 5, name: "Área de cocina", "available": true }, 
        { id: 6, name: "Zona de juegos", available: true },
        { id: 7, name: "Área de descanso", available: true },
        { id: 8, name: "Decoración temática", available: true },
        { id: 9, name: "Área para fumar", "available": true },
        { id: 10, name: "WiFi", available: true },
        { id: 11, name: "Salida de emergencia", "available": true }, 
        { id: 12, name: "Acepta pago (TC, TD)", "available": true }
      ],
      "paquetes":[
        {
          seccion: "A Celebrar",
          price: 240,
          subSections:{
            incluye:[
              "Lugar de evento",
              "6 horas de evento",
              "1/2 hora de entrada",
              "1/2 hora de salida",
              "DJ por 2 horas", 
              "Brincolin"
            ],
            taquiza:[
              "4 Guisados elegir",
              "2 sabores de agua",
              "Arroz o Totopos",
              "Frijoles de la olla"
            ],
            "Te recomendamos contratar":[
              "Animador de eventos",
              "Mesa de dulces",
              "Arreglo con globos",
              "Arreglos florales"
            ]
          }
        },
        {
          seccion: "Enfiestandonos",
          price: 290,
          subSections:{
            incluye:[
              "Lugar de evento",
              "6 horas de evento",
              "1/2 hora de entrada",
              "1/2 hora de salida",
              "Meseros",
              "Barman",
              "DJ ( música grabada y persona que dirige el evento)", 
              "Brincolin",
              "Menu infantil (Solo menores de N anos)"
            ],
            "Comida en 3 tiempos":[
              "Entrada de cortesia (paté, abanico de verduras)",
              "1er tiempo: Elegir 1 ensalada de fruta o crema ",
              "2do tiempo: Elegir 1 pasta ",
              "3er tiempo: Plato Fuerte Elegir una guarnicion y una proteina",
              "3 sabores de Refresco",
              "1 Sabor de Agua",
              "Hielo ilimitado",
            ],
            "Te recomendamos contratar":[
              "Animador de eventos",
              "Musica versatil",
              "Mesa de dulces",
              "Arreglo con globos",
              "Arreglos florales",
              "Torna fiesta",
            ]
          }
        },
        {
          seccion: "Fiesta sin fin",
          price: 390,
          subSections:{
             incluye:[
              "Lugar de evento",
              "Animador de eventos",
              "6 horas de evento",
              "1/2 hora de entrada",
              "1/2 hora de salida",
              "Meseros",
              "Barman",
              "DJ ( música grabada y persona que dirige el evento)", 
              "Brincolin",
              "Menu infantil (Solo menores de N anos)"
            ],
            "Comida en 3 tiempos":[
              "Entrada de cortesia (paté, abanico de verduras)",
              "1er tiempo: Elegir 1 ensalada de fruta o crema ",
              "2do tiempo: Elegir 1 pasta ",
              "3er tiempo: Plato Fuerte Elegir una guarnicion y una proteina",
              "5 sabores de Refresco",
              "1 Sabor de Agua",
              "Torna fiesta o Mesa de dulces",
              "Hielo ilimitado",
            ],
            "Te recomendamos contratar":[
              "Musica versatil",
              "Música banda",
              "Mariachi",
              "Barra libre",
              "Torna fiesta",
              "Mesa de dulces",
              "Arreglo con globos",
              "Arreglos florales",
           
            ]
          }
        }
      ],
      "menu":[
        { 
          type:"Menu1",
          seccion: "Taquiza",
          subSections:{
            Guisados: [
              "BISTEC ENCEBOLLADO",
              "BISTEC EN CHILE PASILLA",
              "BISTEC EN SALSA ROJA",
              "MILANESA DE RES EN TIRITAS",
              "ALAMBRE",
              "PICADILLO",
              "CHILE RELLENO DE QUESO",
              "MOLE ROJO CON POLLO",
              "MOLE VERDE CON POLLO",
              "RAJAS CON POLLO Y CREMA",
              "POLLO EN JITOMATE",
              "POLLO PIBIL",
              "TIRITAS DE POLLO EMPANIZADO",
              "PUERCO EN CHILE ROJO",
              "PUERCO EN PIPIAN",
              "PUERCO CON VERDOLAGAS",
              "PUERCO EN CHILE MORITA",
              "PUERCO EN CHILE PASILLA",
              "PAPAS CON CHORIZO",
              "COCHINITA PIBIL",
              "PASTOR",
              "CHICHARRON PRENSADO",
              "CHICHARRON EN SALSA VERDE",
              "CHICHARRON EN SALSA ROJA",
              "TINGA DE RES",
              "CARNE DE RES EN ADOBO",
              "BISTEC EN SALSA VERDE",
              "BISTEC A LA MEXICANA",
              "LONGANIZA EN SALSA VERDE O SALSA ROJA",
              "SUADERO ENCHILADO",
              "TORTITAS DE POLLO EN SALSA VERDE O ROJA",
              "POLLO A LA MEXICANA",
              "SALCHICHAS A LA DIABLA",
              "CHULETA AHUMADA A LA HAWAIANA",
              "PAPAS CON ACELGAS",
              "PAPAS CON RAJAS"
          ],
          agua: [
            "Limon",
            "Jamaica",
            "Sandia",
            "Melon",
            "Pina"
          ],
          adicional:[
            "Arroz",
            "Frijoles",
            "Tortillas",
            "Salsas",
            "Hielos"
          ]
          }
      },
      { 
          type:"Menu2",
          section: "Tres Tiempos",
          subSections: {
              Entradas: [
                  "Ensalada de lechugas mixtas con crotones de queso",
                  "Cocktail de frutas al tequila",
                  "Ensalada Charcoutier",
                  "Perlas mixtas al kirchef",
                  "Abanico de melón a la cereza",
                  "Ensalada primavera",
                  "Ensalada Macadonia"
              ],
              Pastas: [
                  "Espagueti a la crema",
                  "Espagueti a la bologñesa",
                  "Fettucini al cilantro",
                  "Fettucini a la poblana",
                  "Fuccili al queso",
                  "Pasta al ajillo",
                  "Pasta con champiñón, guajillo y ajo",
                  "Pasta con vino blanco",
                  "Pasta al pesto (salsa verde, albaca, almendras y nuez)",
                  "Espagueti primavera (elote, brócoli, zanahoria, calabaza, pimiento morrón en salsa roja"
              ],
              Cremas: [
                  "Crema poblana",
                  "Crema de cilantro",
                  "Crema de champiñones",
                  "Crema de flor de calabaza",
                  "Crema de elote",
                  "Crema de nuez",
                  "Crema de brócoli",
                  "Crema de zanahoria",
                  "Crema conde frijol",
                  "Crema de huitlacoche",
                  " Crema de chile poblano con elote",
                  "Crema de zanahoria con jengibre y ajonjolí negro",
                  "Crema de papa (papa, romero, guarnición de tocino)"
              ],
              Guarnicion: [
                  "Papa rellena.",
                  "Ensalada brasileña.",
                  "Verduras mixtas al vapor o a la mantequilla.",
                  "Papa de cambray salteada",
                  "Papa húngara",
                  "Ejote Con zanahoria glaciados",
                  "Papa leonesa (gratinada con queso)",
                  "Puré de papa ",
                  "Zanahoria y elotes al perejil"
              ],
              Pollo: [
                  "Pechuga poblana.",
                  "Pechuga rellena de champiñones en salsa de cilantro.",
                  "Pechuga al cordón blue.",
                  "Pechuga rellena de queso y tocino en salsa de guajillo",
                  "Pechuga rellena de espinacas en salsa de zetas",
                  "Cornet de pollo (muslo relleno de tocino y queso, axiote con ciruela pasa",
                  "Cornet a la barbecue",
                  "Cornet (al tamarindo con un toque de chile morita)",
                  "Pechuga en vino blanco y tinto",
                  "Pechuga en chipotle"
              ],
              Cerdo: [
                  "Pierna de Cerdo a la naranja.",
                  "Cerdo a la pibil.",
                  "Pierna de Cerdo a la ciruela.",
                  "Pierna de Cerdo en adobo",
                  "Pierna de Cerdo en salsa de tamarindo",
                  "Pierna de cerdo con champiñones en salsa jerez"
                ],
              }
            },
            {
              type:"Menu3",
              section: "Premium",
              subSections: {
                "Entremes": [
                  "Pate zetas al ajillo",
                  "Carrusel de verduras",
                  "Jícama, Zanahoria y pepino"
                ],
                "CremaOEnsaladas": [
                  "El volován (pan de hojaldre relleno de camarón, atún o surimi) en cama de lechuga decorado con una aceituna.",
                  "Ensalada waldos (ensalada de manzana, nuez, queso manchego, arándano montado en piña y decorado con una cereza)"
                ],
                "Pasta": [
                  "Sopa esmeralda (tipo sopa azteca verde)"
                ],
                "Cerdo": [
                  "Lomo de cerdo con champiñones en salsa jerez",
                  "Pierna de cerdo en salsa de almendras",
                  "Pierna de cerdo en salsa de Jamaica con vino tinto"
                ],
                "Pescado": [
                  "Crujiente de atún (rollo primavera en cama de lechuga)"
                ],
                "Aves": [
                  "Pollo salsa de tres chiles al pulque",
                  "Pollo en salsa de melocotón (salsa cremosa de durazno)"
                ]
              }
            }
      ],
      "servicios_adicionales": [
        { id: 1, name: "Coordinador de Eventos", "available": true },
        { id: 2, name: "Animador de Eventos", "available": true },
        { id: 3, name: "DJ", "available": true },
        { id: 4, name: "Pastelería Personalizada", "available": true },
        { id: 5, name: "Arreglo de Globos", "available": true },
        { id: 6, name: "Decoración Temática", "available": true },
        { id: 7, name: "Mesa de Dulces", "available": true },
        { id: 8, name: "Show de Magia", "available": true },
        { id: 9, name: "Renta de Juegos de Fiesta", "available": true },
        { id: 10, name: "Estación de Pintura Facial", "available": true },
        { id: 11, name: "Alquiler de Carros de Comida", "available": true },
        { id: 12, name: "Área de Juegos de Video", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
          { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
          { id: 2, name: "Fiestas temáticas", "available": true },
          { id: 3, name: "Show de payasos o magos", "available": true },
          { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
          { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
          { id: 2, name: "Fiestas temáticas", "available": true },
          { id: 3, name: "Show de payasos o magos", "available": true },
          { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
          { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
          { id: 2, name: "Fiestas temáticas", "available": true },
          { id: 3, name: "Show de payasos o magos", "available": true },
          { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
      "hours": "9:00 - 23:00",
         event_hors: 8,
      "price_initial": 220,
      "price_final": 390,
      "capacity_initial": 120,
      "capacity_max": 300,
      "tipos_de_eventos": [
        { id: 1, name: "Bodas", "available": true },
        { id: 2, name: "Quinceaños", "available": true },
        { id: 3, name: "Fiesta Corporativa", "available": true },
        { id: 4, name: "Cumpleaños", "available": true },
        { id: 5, name: "Baby Shower", "available": true },
        { id: 6, name: "Revelación de Género", "available": true },
        { id: 7, name: "Bautizos", "available": true },
        { id: 8, name: "Graduaciones", "available": true },
        { id: 9, name: "Fiesta de Despedida", "available": true },
        { id: 10, name: "Fiesta de Compromiso", "available": true },
        { id: 11, name: "Cualquier otro tipo de evento", "available": true },
      ],
      "amenidades": [
        { id: 1, name: "Acceso a discapacitados", "available": true },
        { id: 2, name: "Recibidor", "available": true },
        { id: 3, name: "Cambiador", "available": true },
        { id: 4, name: "Área de cocina", "available": true },         
        { id: 5, name: "Estacionamiento", "available": true },
        { id: 6, name: "Área de juegos o brincolín", "available": true },
        { id: 7, name: "Área para fumar", "available": true },
        { id: 8, name: "WiFi", "available": true },
        { id: 9, name: "Pantalla para proyectar", "available": true },
        { id: 10, name: "Salida de emergencia", "available": true }, 
        { id: 11, name: "Acepta pago (TC, TD)", "available": true }
      ],
      "paquetes":[
        {
          seccion: "A Celebrar",
          price: 240,
          subSections:{
            incluye:[
              "Lugar de evento",
              "6 horas de evento",
              "1/2 hora de entrada",
              "1/2 hora de salida",
              "DJ por 2 horas", 
              "Brincolin"
            ],
            taquiza:[
              "4 Guisados elegir",
              "2 sabores de agua",
              "Arroz o Totopos",
              "Frijoles de la olla"
            ],
            "Te recomendamos contratar":[
              "Animador de eventos",
              "Mesa de dulces",
              "Arreglo con globos",
              "Arreglos florales"
            ]
          }
        },
        {
          seccion: "Enfiestandonos",
          price: 290,
          subSections:{
            incluye:[
              "Lugar de evento",
              "6 horas de evento",
              "1/2 hora de entrada",
              "1/2 hora de salida",
              "Meseros",
              "Barman",
              "DJ ( música grabada y persona que dirige el evento)", 
              "Brincolin",
              "Menu infantil (Solo menores de N anos)"
            ],
            "Comida en 3 tiempos":[
              "Entrada de cortesia (paté, abanico de verduras)",
              "1er tiempo: Elegir 1 ensalada de fruta o crema ",
              "2do tiempo: Elegir 1 pasta ",
              "3er tiempo: Plato Fuerte Elegir una guarnicion y una proteina",
              "3 sabores de Refresco",
              "1 Sabor de Agua",
              "Hielo ilimitado",
            ],
            "Te recomendamos contratar":[
              "Animador de eventos",
              "Musica versatil",
              "Mesa de dulces",
              "Arreglo con globos",
              "Arreglos florales",
              "Torna fiesta",
            ]
          }
        },
        {
          seccion: "Fiesta sin fin",
          price: 390,
          subSections:{
             incluye:[
              "Lugar de evento",
              "Animador de eventos",
              "6 horas de evento",
              "1/2 hora de entrada",
              "1/2 hora de salida",
              "Meseros",
              "Barman",
              "DJ ( música grabada y persona que dirige el evento)", 
              "Brincolin",
              "Menu infantil (Solo menores de N anos)"
            ],
            "Comida en 3 tiempos":[
              "Entrada de cortesia (paté, abanico de verduras)",
              "1er tiempo: Elegir 1 ensalada de fruta o crema ",
              "2do tiempo: Elegir 1 pasta ",
              "3er tiempo: Plato Fuerte Elegir una guarnicion y una proteina",
              "5 sabores de Refresco",
              "1 Sabor de Agua",
              "Torna fiesta o Mesa de dulces",
              "Hielo ilimitado",
            ],
            "Te recomendamos contratar":[
              "Musica versatil",
              "Música banda",
              "Mariachi",
              "Barra libre",
              "Torna fiesta",
              "Mesa de dulces",
              "Arreglo con globos",
              "Arreglos florales",
           
            ]
          }
        }
      ],
      "menu":[
        { 
          type:"Menu1",
          seccion: "Taquiza",
          subSections:{
            Guisados: [
              "BISTEC ENCEBOLLADO",
              "BISTEC EN CHILE PASILLA",
              "BISTEC EN SALSA ROJA",
              "MILANESA DE RES EN TIRITAS",
              "ALAMBRE",
              "PICADILLO",
              "CHILE RELLENO DE QUESO",
              "MOLE ROJO CON POLLO",
              "MOLE VERDE CON POLLO",
              "RAJAS CON POLLO Y CREMA",
              "POLLO EN JITOMATE",
              "POLLO PIBIL",
              "TIRITAS DE POLLO EMPANIZADO",
              "PUERCO EN CHILE ROJO",
              "PUERCO EN PIPIAN",
              "PUERCO CON VERDOLAGAS",
              "PUERCO EN CHILE MORITA",
              "PUERCO EN CHILE PASILLA",
              "PAPAS CON CHORIZO",
              "COCHINITA PIBIL",
              "PASTOR",
              "CHICHARRON PRENSADO",
              "CHICHARRON EN SALSA VERDE",
              "CHICHARRON EN SALSA ROJA",
              "TINGA DE RES",
              "CARNE DE RES EN ADOBO",
              "BISTEC EN SALSA VERDE",
              "BISTEC A LA MEXICANA",
              "LONGANIZA EN SALSA VERDE O SALSA ROJA",
              "SUADERO ENCHILADO",
              "TORTITAS DE POLLO EN SALSA VERDE O ROJA",
              "POLLO A LA MEXICANA",
              "SALCHICHAS A LA DIABLA",
              "CHULETA AHUMADA A LA HAWAIANA",
              "PAPAS CON ACELGAS",
              "PAPAS CON RAJAS"
          ],
          agua: [
            "Limon",
            "Jamaica",
            "Sandia",
            "Melon",
            "Pina"
          ],
          adicional:[
            "Arroz",
            "Frijoles",
            "Tortillas",
            "Salsas",
            "Hielos"
          ]
        }
      },
      { 
          type:"Menu2",
          section: "Tres Tiempos",
          subSections: {
              Entradas: [
                  "Ensalada de lechugas mixtas con crotones de queso",
                  "Cocktail de frutas al tequila",
                  "Ensalada Charcoutier",
                  "Perlas mixtas al kirchef",
                  "Abanico de melón a la cereza",
                  "Ensalada primavera",
                  "Ensalada Macadonia"
              ],
              Pastas: [
                  "Espagueti a la crema",
                  "Espagueti a la bologñesa",
                  "Fettucini al cilantro",
                  "Fettucini a la poblana",
                  "Fuccili al queso",
                  "Pasta al ajillo",
                  "Pasta con champiñón, guajillo y ajo",
                  "Pasta con vino blanco",
                  "Pasta al pesto (salsa verde, albaca, almendras y nuez)",
                  "Espagueti primavera (elote, brócoli, zanahoria, calabaza, pimiento morrón en salsa roja"
              ],
              Cremas: [
                  "Crema poblana",
                  "Crema de cilantro",
                  "Crema de champiñones",
                  "Crema de flor de calabaza",
                  "Crema de elote",
                  "Crema de nuez",
                  "Crema de brócoli",
                  "Crema de zanahoria",
                  "Crema conde frijol",
                  "Crema de huitlacoche",
                  " Crema de chile poblano con elote",
                  "Crema de zanahoria con jengibre y ajonjolí negro",
                  "Crema de papa (papa, romero, guarnición de tocino)"
              ],
              Guarnicion: [
                  "Papa rellena.",
                  "Ensalada brasileña.",
                  "Verduras mixtas al vapor o a la mantequilla.",
                  "Papa de cambray salteada",
                  "Papa húngara",
                  "Ejote Con zanahoria glaciados",
                  "Papa leonesa (gratinada con queso)",
                  "Puré de papa ",
                  "Zanahoria y elotes al perejil"
              ],
              Pollo: [
                  "Pechuga poblana.",
                  "Pechuga rellena de champiñones en salsa de cilantro.",
                  "Pechuga al cordón blue.",
                  "Pechuga rellena de queso y tocino en salsa de guajillo",
                  "Pechuga rellena de espinacas en salsa de zetas",
                  "Cornet de pollo (muslo relleno de tocino y queso, axiote con ciruela pasa",
                  "Cornet a la barbecue",
                  "Cornet (al tamarindo con un toque de chile morita)",
                  "Pechuga en vino blanco y tinto",
                  "Pechuga en chipotle"
              ],
              Cerdo: [
                  "Pierna de Cerdo a la naranja.",
                  "Cerdo a la pibil.",
                  "Pierna de Cerdo a la ciruela.",
                  "Pierna de Cerdo en adobo",
                  "Pierna de Cerdo en salsa de tamarindo",
                  "Pierna de cerdo con champiñones en salsa jerez"
                ],
              }
            },
            {
              type:"Menu3",
              section: "Premium",
              subSections: {
                "Entremes": [
                  "Pate zetas al ajillo",
                  "Carrusel de verduras",
                  "Jícama, Zanahoria y pepino"
                ],
                "CremaOEnsaladas": [
                  "El volován (pan de hojaldre relleno de camarón, atún o surimi) en cama de lechuga decorado con una aceituna.",
                  "Ensalada waldos (ensalada de manzana, nuez, queso manchego, arándano montado en piña y decorado con una cereza)"
                ],
                "Pasta": [
                  "Sopa esmeralda (tipo sopa azteca verde)"
                ],
                "Cerdo": [
                  "Lomo de cerdo con champiñones en salsa jerez",
                  "Pierna de cerdo en salsa de almendras",
                  "Pierna de cerdo en salsa de Jamaica con vino tinto"
                ],
                "Pescado": [
                  "Crujiente de atún (rollo primavera en cama de lechuga)"
                ],
                "Aves": [
                  "Pollo salsa de tres chiles al pulque",
                  "Pollo en salsa de melocotón (salsa cremosa de durazno)"
                ]
              }
            }
      ],
      "servicios_adicionales":[
        { id: 1, name: "Coordinador de Eventos", "available": true },
        { id: 2, name: "Animador de Eventos", "available": true },
        { id: 3, name: "Host de Recepción", "available": true },
        { id: 4, name: "DJ", "available": true },
        { id: 5, name: "Barra libre", "available": true },
        { id: 6, name: "Torna fiesta", "available": true },
        { id: 7, name: "Arreglo de globos", "available": true },
        { id: 8, name: "Decoración temática", "available": true },
        { id: 9, name: "Mesa de dulces", "available": true },
        { id: 10, name: "Arreglos florales", "available": true },
        { id: 11, name: "Show de payaso", "available": true },
        { id: 12, name: "Show de magia", "available": true },
        { id: 13, name: "Música versatil", "available": true },
        { id: 14, name: "Música banda", "available": true },
        { id: 15, name: "Mariachi", "available": true },
        { id: 16, name: "Norteño", "available": true },
        { id: 17, name: "Banda de rock", "available": true },
        { id: 18, name: "Saxofon", "available": true },
       
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
        { id: 1, name: "Bodas", "available": true },
        { id: 2, name: "Quinceaños", "available": true },
        { id: 3, name: "Eventos sociales", "available": true },
        { id: 4, name: "Fiestas de fin de año", "available": true },
        { id: 5, name: "Reuniones empresariales", "available": true },
        { id: 6, name: "Conferencias", "available": true }
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
        { id: 1, name: "Bodas", "available": true },
        { id: 2, name: "Quinceaños", "available": true },
        { id: 3, name: "Eventos sociales", "available": true },
        { id: 4, name: "Fiestas de fin de año", "available": true },
        { id: 5, name: "Reuniones empresariales", "available": true },
        { id: 6, name: "Conferencias", "available": true }
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
        { id: 1, name: "Bodas", "available": true },
        { id: 2, name: "Quinceaños", "available": true },
        { id: 3, name: "Eventos sociales", "available": true },
        { id: 4, name: "Fiestas de fin de año", "available": true },
        { id: 5, name: "Reuniones empresariales", "available": true },
        { id: 6, name: "Conferencias", "available": true }
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
        { id: 1, name: "Bodas", "available": true },
        { id: 2, name: "Quinceaños", "available": true },
        { id: 3, name: "Eventos sociales", "available": true },
        { id: 4, name: "Fiestas de fin de año", "available": true },
        { id: 5, name: "Reuniones empresariales", "available": true },
        { id: 6, name: "Conferencias", "available": true }
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
        { id: 1, name: "Bodas", "available": true },
        { id: 2, name: "Quinceaños", "available": true },
        { id: 3, name: "Eventos sociales", "available": true },
        { id: 4, name: "Fiestas de fin de año", "available": true },
        { id: 5, name: "Reuniones empresariales", "available": true },
        { id: 6, name: "Conferencias", "available": true }
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
        { id: 1, name: "Bodas", "available": true },
        { id: 2, name: "Quinceaños", "available": true },
        { id: 3, name: "Eventos sociales", "available": true },
        { id: 4, name: "Fiestas de fin de año", "available": true },
        { id: 5, name: "Reuniones empresariales", "available": true },
        { id: 6, name: "Conferencias", "available": true }
      ]
    },
    

    
    
    // Agrega más salones según sea necesario
  ]
};

export const haciendasData = {
  type: "hacienda", 
  haciendas: [
  {
    "id": 1,
    "name": "Santa Maria",
    "description": "Descripción del Jardín 1",
    image: getImagePath('hacienda', 'Santa Maria'),
    "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
    "hours": "9:00 - 23:00",
     event_hors: 8,
    "price_initial": 260,
    "price_final": 380,
    "capacity_initial": 100,
    "capacity_max": 250,
    "tipos_de_eventos": [
      { id: 1, name: "Bodas", "available": true },
      { id: 2, name: "Quinceaños", "available": true },
      { id: 3, name: "Bautizos", "available": false },
      { id: 4, name: "Cumpleaños", "available": false },
      { id: 5, name: "Baby shower", "available": true },
      { id: 6, name: "Revelación de Género", "available": true },
      { id: 7, name: "Evento de Gala", "available": true },
      { id: 8, name: "Eventos al aire libre", "available": true },
      { id: 9, name: "Reuniones familiares", "available": true },
      { id: 10, name: "Graduaciones", "available": true },
      { id: 11, name: "Fiesta de Despedida", "available": true },
      { id: 12, name: "Fiesta de Compromiso", "available": true },
      { id: 13, name: "Cualquier otro tipo de evento", "available": true },
    ],
    "amenidades": [
      { id: 1, name: "Acceso a discapacitados", "available": true },
      { id: 2, name: "Recibidor", "available": true },
      { id: 3, name: "Cambiador", "available": true },
      { id: 4, name: "Área de cocina", "available": true },         
      { id: 5, name: "Estacionamiento", "available": true },
      { id: 6, name: "Jardines y/o Espacios Exteriores", "available": true },
      { id: 7, name: "Alberca", "available": true },
      { id: 8, name: "Área de Barbacoa o Parrilla", "available": true },
      { id: 9, name: "Área de juegos o brincolín", "available": true },
      { id: 10, name: "Área para fumar", "available": true },
      { id: 11, name: "WiFi", "available": true },
      { id: 12, name: "Pantalla para proyectar", "available": true },
      { id: 13, name: "Salida de emergencia", "available": true }, 
      { id: 14, name: "Acepta pago (TC, TD)", "available": true }
    ],
    "paquetes":[
      {
        seccion: "A Celebrar",
        price: 240,
        subSections:{
          incluye:[
            "Lugar de evento",
            "6 horas de evento",
            "1/2 hora de entrada",
            "1/2 hora de salida",
            "DJ por 2 horas", 
            "Brincolin"
          ],
          taquiza:[
            "4 Guisados elegir",
            "2 sabores de agua",
            "Arroz o Totopos",
            "Frijoles de la olla"
          ],
          "Te recomendamos contratar":[
            "Animador de eventos",
            "Mesa de dulces",
            "Arreglo con globos",
            "Arreglos florales"
          ]
        }
      },
      {
        seccion: "Enfiestandonos",
        price: 290,
        subSections:{
          incluye:[
            "Lugar de evento",
            "6 horas de evento",
            "1/2 hora de entrada",
            "1/2 hora de salida",
            "Meseros",
            "Barman",
            "DJ ( música grabada y persona que dirige el evento)", 
            "Brincolin",
            "Menu infantil (Solo menores de N anos)"
          ],
          "Comida en 3 tiempos":[
            "Entrada de cortesia (paté, abanico de verduras)",
            "1er tiempo: Elegir 1 ensalada de fruta o crema ",
            "2do tiempo: Elegir 1 pasta ",
            "3er tiempo: Plato Fuerte Elegir una guarnicion y una proteina",
            "3 sabores de Refresco",
            "1 Sabor de Agua",
            "Hielo ilimitado",
          ],
          "Te recomendamos contratar":[
            "Animador de eventos",
            "Musica versatil",
            "Mesa de dulces",
            "Arreglo con globos",
            "Arreglos florales",
            "Torna fiesta",
          ]
        }
      },
      {
        seccion: "Fiesta sin fin",
        price: 390,
        subSections:{
           incluye:[
            "Lugar de evento",
            "Animador de eventos",
            "6 horas de evento",
            "1/2 hora de entrada",
            "1/2 hora de salida",
            "Meseros",
            "Barman",
            "DJ ( música grabada y persona que dirige el evento)", 
            "Brincolin",
            "Menu infantil (Solo menores de N anos)"
          ],
          "Comida en 3 tiempos":[
            "Entrada de cortesia (paté, abanico de verduras)",
            "1er tiempo: Elegir 1 ensalada de fruta o crema ",
            "2do tiempo: Elegir 1 pasta ",
            "3er tiempo: Plato Fuerte Elegir una guarnicion y una proteina",
            "5 sabores de Refresco",
            "1 Sabor de Agua",
            "Torna fiesta o Mesa de dulces",
            "Hielo ilimitado",
          ],
          "Te recomendamos contratar":[
            "Musica versatil",
            "Música banda",
            "Mariachi",
            "Barra libre",
            "Torna fiesta",
            "Mesa de dulces",
            "Arreglo con globos",
            "Arreglos florales",
         
          ]
        }
      }
    ],
    "menu":[
      { 
        type:"Menu1",
        seccion: "Taquiza",
        subSections:{
          Guisados: [
            "BISTEC ENCEBOLLADO",
            "BISTEC EN CHILE PASILLA",
            "BISTEC EN SALSA ROJA",
            "MILANESA DE RES EN TIRITAS",
            "ALAMBRE",
            "PICADILLO",
            "CHILE RELLENO DE QUESO",
            "MOLE ROJO CON POLLO",
            "MOLE VERDE CON POLLO",
            "RAJAS CON POLLO Y CREMA",
            "POLLO EN JITOMATE",
            "POLLO PIBIL",
            "TIRITAS DE POLLO EMPANIZADO",
            "PUERCO EN CHILE ROJO",
            "PUERCO EN PIPIAN",
            "PUERCO CON VERDOLAGAS",
            "PUERCO EN CHILE MORITA",
            "PUERCO EN CHILE PASILLA",
            "PAPAS CON CHORIZO",
            "COCHINITA PIBIL",
            "PASTOR",
            "CHICHARRON PRENSADO",
            "CHICHARRON EN SALSA VERDE",
            "CHICHARRON EN SALSA ROJA",
            "TINGA DE RES",
            "CARNE DE RES EN ADOBO",
            "BISTEC EN SALSA VERDE",
            "BISTEC A LA MEXICANA",
            "LONGANIZA EN SALSA VERDE O SALSA ROJA",
            "SUADERO ENCHILADO",
            "TORTITAS DE POLLO EN SALSA VERDE O ROJA",
            "POLLO A LA MEXICANA",
            "SALCHICHAS A LA DIABLA",
            "CHULETA AHUMADA A LA HAWAIANA",
            "PAPAS CON ACELGAS",
            "PAPAS CON RAJAS"
        ],
        agua: [
          "Limon",
          "Jamaica",
          "Sandia",
          "Melon",
          "Pina"
        ],
        adicional:[
          "Arroz",
          "Frijoles",
          "Tortillas",
          "Salsas",
          "Hielos"
        ]
      }
    },
    { 
        type:"Menu2",
        section: "Tres Tiempos",
        subSections: {
            Entradas: [
                "Ensalada de lechugas mixtas con crotones de queso",
                "Cocktail de frutas al tequila",
                "Ensalada Charcoutier",
                "Perlas mixtas al kirchef",
                "Abanico de melón a la cereza",
                "Ensalada primavera",
                "Ensalada Macadonia"
            ],
            Pastas: [
                "Espagueti a la crema",
                "Espagueti a la bologñesa",
                "Fettucini al cilantro",
                "Fettucini a la poblana",
                "Fuccili al queso",
                "Pasta al ajillo",
                "Pasta con champiñón, guajillo y ajo",
                "Pasta con vino blanco",
                "Pasta al pesto (salsa verde, albaca, almendras y nuez)",
                "Espagueti primavera (elote, brócoli, zanahoria, calabaza, pimiento morrón en salsa roja"
            ],
            Cremas: [
                "Crema poblana",
                "Crema de cilantro",
                "Crema de champiñones",
                "Crema de flor de calabaza",
                "Crema de elote",
                "Crema de nuez",
                "Crema de brócoli",
                "Crema de zanahoria",
                "Crema conde frijol",
                "Crema de huitlacoche",
                " Crema de chile poblano con elote",
                "Crema de zanahoria con jengibre y ajonjolí negro",
                "Crema de papa (papa, romero, guarnición de tocino)"
            ],
            Guarnicion: [
                "Papa rellena.",
                "Ensalada brasileña.",
                "Verduras mixtas al vapor o a la mantequilla.",
                "Papa de cambray salteada",
                "Papa húngara",
                "Ejote Con zanahoria glaciados",
                "Papa leonesa (gratinada con queso)",
                "Puré de papa ",
                "Zanahoria y elotes al perejil"
            ],
            Pollo: [
                "Pechuga poblana.",
                "Pechuga rellena de champiñones en salsa de cilantro.",
                "Pechuga al cordón blue.",
                "Pechuga rellena de queso y tocino en salsa de guajillo",
                "Pechuga rellena de espinacas en salsa de zetas",
                "Cornet de pollo (muslo relleno de tocino y queso, axiote con ciruela pasa",
                "Cornet a la barbecue",
                "Cornet (al tamarindo con un toque de chile morita)",
                "Pechuga en vino blanco y tinto",
                "Pechuga en chipotle"
            ],
            Cerdo: [
                "Pierna de Cerdo a la naranja.",
                "Cerdo a la pibil.",
                "Pierna de Cerdo a la ciruela.",
                "Pierna de Cerdo en adobo",
                "Pierna de Cerdo en salsa de tamarindo",
                "Pierna de cerdo con champiñones en salsa jerez"
              ],
            }
          },
          {
            type:"Menu3",
            section: "Premium",
            subSections: {
              "Entremes": [
                "Pate zetas al ajillo",
                "Carrusel de verduras",
                "Jícama, Zanahoria y pepino"
              ],
              "CremaOEnsaladas": [
                "El volován (pan de hojaldre relleno de camarón, atún o surimi) en cama de lechuga decorado con una aceituna.",
                "Ensalada waldos (ensalada de manzana, nuez, queso manchego, arándano montado en piña y decorado con una cereza)"
              ],
              "Pasta": [
                "Sopa esmeralda (tipo sopa azteca verde)"
              ],
              "Cerdo": [
                "Lomo de cerdo con champiñones en salsa jerez",
                "Pierna de cerdo en salsa de almendras",
                "Pierna de cerdo en salsa de Jamaica con vino tinto"
              ],
              "Pescado": [
                "Crujiente de atún (rollo primavera en cama de lechuga)"
              ],
              "Aves": [
                "Pollo salsa de tres chiles al pulque",
                "Pollo en salsa de melocotón (salsa cremosa de durazno)"
              ]
            }
          }
    ],
    "servicios_adicionales":[
      { id: 1, name: "Coordinador de Eventos", "available": true },
      { id: 2, name: "Animador de Eventos", "available": true },
      { id: 3, name: "Host de Recepción", "available": true },
      { id: 19, name: "Catering Gourmet", available: true },
      { id: 20, name: "Servicio de Babysitting", available: true },
      { id: 4, name: "DJ", "available": true },
      { id: 5, name: "Barra libre", "available": true },
      { id: 6, name: "Torna fiesta", "available": true },
      { id: 7, name: "Arreglo de globos", "available": true },
      { id: 8, name: "Decoración temática", "available": true },
      { id: 9, name: "Mesa de dulces", "available": true },
      { id: 10, name: "Arreglos florales", "available": true },
      { id: 11, name: "Show de payaso", "available": true },
      { id: 12, name: "Show de magia", "available": true },
      { id: 13, name: "Música versatil", "available": true },
      { id: 14, name: "Música banda", "available": true },
      { id: 15, name: "Mariachi", "available": true },
      { id: 16, name: "Norteño", "available": true },
      { id: 17, name: "Banda de rock", "available": true },
      { id: 18, name: "Saxofon", "available": true },
     
    ]  
  },
  {
    id: 2,
    name: "Santa Maria",
    description: "Descripción del Infantil 2",
    image: getImagePath('hacienda', 'Santa Maria'),
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true }
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
        { id: 1, name: "Fiestas de cumpleaños infantiles", "available": true },
        { id: 2, name: "Fiestas temáticas", "available": true },
        { id: 3, name: "Show de payasos o magos", "available": true },
        { id: 4, name: "Eventos escolares", "available": true },
        { id: 5, name: "Fiesta Corporativa", "available": true },
        { id: 8, name: "Graduaciones", "available": true },
        { id: 9, name: "Fiesta de Despedida", "available": true },
        { id: 10, name: "Fiesta de Compromiso", "available": true },
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
