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
         event_hors: 8,
        "price_initial": 260,
        "price_final": 380,
        "capacity_initial": 100,
        "capacity_max": 250,
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": true },
          { "id": 4, "name": "Cumpleaños", "available": true },
          { "id": 5, "name": "Baby shower", "available": true },
          { "id": 5, "name": "Revelación de Género", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true },
          { "id": 9, "name": "Picnics corporativos", "available": true },
          { "id": 10, "name": "Cualquier otro tipo de evento", "available": true },
          
        ],
        "amenidades": [
          { "id": 1, "name": "Acceso a discapacitados", "available": true },
          { "id": 2, "name": "Recibidor", "available": true },
          { "id": 3, "name": "Cambiador", "available": true },
          { "id": 4, "name": "Área de cocina", "available": true },         
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 12, "name": "Pista de baile", "available": true },         
          { "id": 13, "name": "Baños", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Área para fumar", "available": true },
          { "id": 8, "name": "WiFi", "available": true },
          { "id": 9, "name": "Pantalla para proyectar", "available": true },
          { "id": 10, "name": "Salida de emergencia", "available": true }, 
          { "id": 11, "name": "Acepta pago (TC, TD)", "available": true }
        ],
        "paquetes":[
          {
            seccion: "A Celebrar",
            price: 260,
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
            price: 320,
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
            price: 380,
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
          { "id": 1, "name": "Coordinador de Eventos", "available": true },
          { "id": 2, "name": "Animador de Eventos", "available": true },
          { "id": 3, "name": "DJ", "available": true },
          { "id": 4, "name": "Barra libre", "available": true },
          { "id": 5, "name": "Torna fiesta", "available": true },
          { "id": 6, "name": "Arreglo de globos", "available": true },
          { "id": 7, "name": "Decoración temática", "available": true },
          { "id": 8, "name": "Mesa de dulces", "available": true },
          { "id": 9, "name": "Arreglos florales", "available": true },
          { "id": 10, "name": "Show de payaso", "available": true },
          { "id": 11, "name": "Show de magia", "available": true },
          { "id": 12, "name": "Música versatil", "available": true },
          { "id": 13, "name": "Música banda", "available": true },
          { "id": 14, "name": "Mariachi", "available": true },
          { "id": 15, "name": "Norteño", "available": true },
          { "id": 16, "name": "Banda de rock", "available": true },
          { "id": 17, "name": "Saxofon", "available": true },
         
        ]
      },
      {
        "id": 2,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 2",
        image: getImagePath('jardin', 'Los Cisnes'),
        "address": "Valle de Tapajoz 18, Valle de Aragon 3ra Secc, 55280 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 9,
        "price_initial": 220,
        "price_final": 390,
        "capacity_initial": 120,
        "capacity_max": 300,
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": false },
          { "id": 5, "name": "Baby shower", "available": true },
          { "id": 5, "name": "Revelación de Género", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true },
          { "id": 9, "name": "Picnics corporativos", "available": true },
          { "id": 10, "name": "Cualquier otro tipo de evento", "available": true },
          
        ],
        "amenidades": [
          { "id": 1, "name": "Acceso a discapacitados", "available": true },
          { "id": 2, "name": "Recibidor", "available": true },
          { "id": 3, "name": "Cambiador", "available": true },
          { "id": 4, "name": "Área de cocina", "available": true },         
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Área para fumar", "available": true },
          { "id": 8, "name": "WiFi", "available": true },
          { "id": 9, "name": "Pantalla para proyectar", "available": true },
          { "id": 10, "name": "Salida de emergencia", "available": true }, 
          { "id": 11, "name": "Acepta pago (TC, TD)", "available": true }
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
          { "id": 1, "name": "Coordinador de Eventos", "available": true },
          { "id": 2, "name": "Animador de Eventos", "available": true },
          { "id": 3, "name": "DJ", "available": true },
          { "id": 4, "name": "Barra libre", "available": true },
          { "id": 5, "name": "Torna fiesta", "available": true },
          { "id": 6, "name": "Arreglo de globos", "available": true },
          { "id": 7, "name": "Decoración temática", "available": true },
          { "id": 8, "name": "Mesa de dulces", "available": true },
          { "id": 9, "name": "Arreglos florales", "available": true },
          { "id": 10, "name": "Música versatil", "available": true },
          { "id": 11, "name": "Música banda", "available": true },
          { "id": 12, "name": "Mariachi", "available": true },
          { "id": 13, "name": "Norteño", "available": true },
          { "id": 14, "name": "Banda de rock", "available": true },
          { "id": 15, "name": "Saxofon", "available": true },
          { "id": 16, "name": "Show de payaso", "available": true },
          { "id": 17, "name": "Show de mago", "available": true },
        ]
      },
      {
        "id": 3,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 3",
        image: getImagePath('jardin', 'Rosalinda'),
        "address": "Nardo & Avenida Tecnológico, Jardines del Tepeyac, 55220 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
        "price_initial": 260,
        "price_final": 380,
        "capacity_initial": 100,
        "capacity_max": 250,
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": false },
          { "id": 5, "name": "Baby shower", "available": true },
          { "id": 5, "name": "Revelación de Género", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true },
          { "id": 9, "name": "Picnics corporativos", "available": true },
          { "id": 10, "name": "Cualquier otro tipo de evento", "available": true },
          
        ],
        "amenidades": [
          { "id": 1, "name": "Acceso a discapacitados", "available": true },
          { "id": 2, "name": "Recibidor", "available": true },
          { "id": 3, "name": "Cambiador", "available": true },
          { "id": 4, "name": "Área de cocina", "available": true },         
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Área para fumar", "available": true },
          { "id": 8, "name": "WiFi", "available": true },
          { "id": 9, "name": "Pantalla para proyectar", "available": true },
          { "id": 10, "name": "Salida de emergencia", "available": true }, 
          { "id": 11, "name": "Acepta pago (TC, TD)", "available": true }
        ],
        "paquetes":[
          {
            seccion: "A Celebrar",
            price: 260,
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
            price: 320,
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
            price: 380,
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
          { "id": 1, "name": "Coordinador de Eventos", "available": true },
          { "id": 2, "name": "Animador de Eventos", "available": true },
          { "id": 3, "name": "DJ", "available": true },
          { "id": 4, "name": "Barra libre", "available": true },
          { "id": 5, "name": "Torna fiesta", "available": true },
          { "id": 6, "name": "Arreglo de globos", "available": true },
          { "id": 7, "name": "Decoración temática", "available": true },
          { "id": 8, "name": "Mesa de dulces", "available": true },
          { "id": 9, "name": "Arreglos florales", "available": true },
          { "id": 10, "name": "Música versatil", "available": true },
          { "id": 11, "name": "Música banda", "available": true },
          { "id": 12, "name": "Mariachi", "available": true },
          { "id": 13, "name": "Norteño", "available": true },
          { "id": 14, "name": "Banda de rock", "available": true },
          { "id": 15, "name": "Saxofon", "available": true },
        ]
      },
      {
        "id": 4,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 4",
        image: getImagePath('jardin', 'Casa Blanca'),
        "address": "C. Salamanca 41, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
        "price_initial": 260,
        "price_final": 380,
        "capacity_initial": 100,
        "capacity_max": 250,
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": false },
          { "id": 5, "name": "Baby shower", "available": true },
          { "id": 5, "name": "Revelación de Género", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true },
          { "id": 9, "name": "Picnics corporativos", "available": true },
          { "id": 10, "name": "Cualquier otro tipo de evento", "available": true },
          
        ],
        "amenidades": [
          { "id": 1, "name": "Acceso a discapacitados", "available": true },
          { "id": 2, "name": "Recibidor", "available": true },
          { "id": 3, "name": "Cambiador", "available": true },
          { "id": 4, "name": "Área de cocina", "available": true },         
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Área para fumar", "available": true },
          { "id": 8, "name": "WiFi", "available": true },
          { "id": 9, "name": "Pantalla para proyectar", "available": true },
          { "id": 10, "name": "Salida de emergencia", "available": true }, 
          { "id": 11, "name": "Acepta pago (TC, TD)", "available": true }
        ],
        "paquetes":[
          {
            seccion: "A Celebrar",
            price: 260,
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
            price: 320,
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
            price: 380,
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
          { "id": 1, "name": "Coordinador de Eventos", "available": true },
          { "id": 2, "name": "Animador de Eventos", "available": true },
          { "id": 3, "name": "DJ", "available": true },
          { "id": 4, "name": "Barra libre", "available": true },
          { "id": 5, "name": "Torna fiesta", "available": true },
          { "id": 6, "name": "Arreglo de globos", "available": true },
          { "id": 7, "name": "Decoración temática", "available": true },
          { "id": 8, "name": "Mesa de dulces", "available": true },
          { "id": 9, "name": "Arreglos florales", "available": true },
          { "id": 10, "name": "Música versatil", "available": true },
          { "id": 11, "name": "Música banda", "available": true },
          { "id": 12, "name": "Mariachi", "available": true },
          { "id": 13, "name": "Norteño", "available": true },
          { "id": 14, "name": "Banda de rock", "available": true },
          { "id": 15, "name": "Saxofon", "available": true },
        ]
      },
      {
        "id": 5,
        "name": "Oasis",
        "description": "Descripción del Jardín 5",
       image: getImagePath('jardin', 'Oasis'),
        "address": "Pensamientos 64, entre Av maravillas y azahares, Jardines del Tepeyac, 55220 Ecatepec de Morelos, Méx.",
       "hours": "9:00 - 23:00",
         event_hors: 8,
        "price_initial": 260,
        "price_final": 380,
        "capacity_initial": 100,
        "capacity_max": 250,
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": false },
          { "id": 5, "name": "Baby shower", "available": true },
          { "id": 5, "name": "Revelación de Género", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true },
          { "id": 9, "name": "Picnics corporativos", "available": true },
          { "id": 10, "name": "Cualquier otro tipo de evento", "available": true },
          
        ],
        "amenidades": [
          { "id": 1, "name": "Acceso a discapacitados", "available": true },
          { "id": 2, "name": "Recibidor", "available": true },
          { "id": 3, "name": "Cambiador", "available": true },
          { "id": 4, "name": "Área de cocina", "available": true },         
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Área para fumar", "available": true },
          { "id": 8, "name": "WiFi", "available": true },
          { "id": 9, "name": "Pantalla para proyectar", "available": true },
          { "id": 10, "name": "Salida de emergencia", "available": true }, 
          { "id": 11, "name": "Acepta pago (TC, TD)", "available": true }
        ],
        "paquetes":[
          {
            seccion: "A Celebrar",
            price: 260,
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
            price: 320,
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
            price: 380,
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
          { "id": 1, "name": "Coordinador de Eventos", "available": true },
          { "id": 2, "name": "Animador de Eventos", "available": true },
          { "id": 3, "name": "DJ", "available": true },
          { "id": 4, "name": "Barra libre", "available": true },
          { "id": 5, "name": "Torna fiesta", "available": true },
          { "id": 6, "name": "Arreglo de globos", "available": true },
          { "id": 7, "name": "Decoración temática", "available": true },
          { "id": 8, "name": "Mesa de dulces", "available": true },
          { "id": 9, "name": "Arreglos florales", "available": true },
          { "id": 10, "name": "Música versatil", "available": true },
          { "id": 11, "name": "Música banda", "available": true },
          { "id": 12, "name": "Mariachi", "available": true },
          { "id": 13, "name": "Norteño", "available": true },
          { "id": 14, "name": "Banda de rock", "available": true },
          { "id": 15, "name": "Saxofon", "available": true },
        ]
      },
      {
        "id": 6,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 6",
        image: getImagePath('jardin', 'Kristal Jardin'),
        "address": "Av. Central 24-1, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
        "price_initial": 260,
        "price_final": 380,
        "capacity_initial": 100,
        "capacity_max": 250,
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": false },
          { "id": 5, "name": "Baby shower", "available": true },
          { "id": 5, "name": "Revelación de Género", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true },
          { "id": 9, "name": "Picnics corporativos", "available": true },
          { "id": 10, "name": "Cualquier otro tipo de evento", "available": true },
          
        ],
        "amenidades": [
          { "id": 1, "name": "Acceso a discapacitados", "available": true },
          { "id": 2, "name": "Recibidor", "available": true },
          { "id": 3, "name": "Cambiador", "available": true },
          { "id": 4, "name": "Área de cocina", "available": true },         
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Área para fumar", "available": true },
          { "id": 8, "name": "WiFi", "available": true },
          { "id": 9, "name": "Pantalla para proyectar", "available": true },
          { "id": 10, "name": "Salida de emergencia", "available": true }, 
          { "id": 11, "name": "Acepta pago (TC, TD)", "available": true }
        ],
        "paquetes":[
          {
            seccion: "A Celebrar",
            price: 260,
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
            price: 320,
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
            price: 380,
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
          { "id": 1, "name": "Coordinador de Eventos", "available": true },
          { "id": 2, "name": "Animador de Eventos", "available": true },
          { "id": 3, "name": "DJ", "available": true },
          { "id": 4, "name": "Barra libre", "available": true },
          { "id": 5, "name": "Torna fiesta", "available": true },
          { "id": 6, "name": "Arreglo de globos", "available": true },
          { "id": 7, "name": "Decoración temática", "available": true },
          { "id": 8, "name": "Mesa de dulces", "available": true },
          { "id": 9, "name": "Arreglos florales", "available": true },
          { "id": 10, "name": "Música versatil", "available": true },
          { "id": 11, "name": "Música banda", "available": true },
          { "id": 12, "name": "Mariachi", "available": true },
          { "id": 13, "name": "Norteño", "available": true },
          { "id": 14, "name": "Banda de rock", "available": true },
          { "id": 15, "name": "Saxofon", "available": true },
        ]
      },
      {
        "id": 7,
        "name": "Green Party",
        "description": "Descripción del Jardín 7",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
       "hours": "9:00 - 23:00",
         event_hors: 8,
        "price_initial": 260,
        "price_final": 380,
        "capacity_initial": 100,
        "capacity_max": 250,
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": false },
          { "id": 5, "name": "Baby shower", "available": true },
          { "id": 5, "name": "Revelación de Género", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true },
          { "id": 9, "name": "Picnics corporativos", "available": true },
          { "id": 10, "name": "Cualquier otro tipo de evento", "available": true },
          
        ],
        "amenidades": [
          { "id": 1, "name": "Acceso a discapacitados", "available": true },
          { "id": 2, "name": "Recibidor", "available": true },
          { "id": 3, "name": "Cambiador", "available": true },
          { "id": 4, "name": "Área de cocina", "available": true },         
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Área para fumar", "available": true },
          { "id": 8, "name": "WiFi", "available": true },
          { "id": 9, "name": "Pantalla para proyectar", "available": true },
          { "id": 10, "name": "Salida de emergencia", "available": true }, 
          { "id": 11, "name": "Acepta pago (TC, TD)", "available": true }
        ],
        "paquetes":[
          {
            seccion: "A Celebrar",
            price: 260,
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
            price: 320,
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
            price: 380,
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
          { "id": 1, "name": "Coordinador de Eventos", "available": true },
          { "id": 2, "name": "Animador de Eventos", "available": true },
          { "id": 3, "name": "DJ", "available": true },
          { "id": 4, "name": "Barra libre", "available": true },
          { "id": 5, "name": "Torna fiesta", "available": true },
          { "id": 6, "name": "Arreglo de globos", "available": true },
          { "id": 7, "name": "Decoración temática", "available": true },
          { "id": 8, "name": "Mesa de dulces", "available": true },
          { "id": 9, "name": "Arreglos florales", "available": true },
          { "id": 10, "name": "Música versatil", "available": true },
          { "id": 11, "name": "Música banda", "available": true },
          { "id": 12, "name": "Mariachi", "available": true },
          { "id": 13, "name": "Norteño", "available": true },
          { "id": 14, "name": "Banda de rock", "available": true },
          { "id": 15, "name": "Saxofon", "available": true },
        ]
      },
      {
        "id": 8,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 8",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "Dirección del Jardín 8",
      "hours": "9:00 - 23:00",
         event_hors: 8,
        "price_initial": 260,
        "price_final": 380,
        "capacity_initial": 100,
        "capacity_max": 250,
        "tipos_de_eventos": [
          { "id": 1, "name": "Bodas", "available": true },
          { "id": 2, "name": "Quinceaños", "available": true },
          { "id": 3, "name": "Bautizos", "available": false },
          { "id": 4, "name": "Cumpleaños", "available": false },
          { "id": 5, "name": "Baby shower", "available": true },
          { "id": 5, "name": "Revelación de Género", "available": true },
          { "id": 6, "name": "Eventos al aire libre", "available": true },
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true },
          { "id": 9, "name": "Picnics corporativos", "available": true },
          { "id": 10, "name": "Cualquier otro tipo de evento", "available": true },
          
        ],
        "amenidades": [
          { "id": 1, "name": "Acceso a discapacitados", "available": true },
          { "id": 2, "name": "Recibidor", "available": true },
          { "id": 3, "name": "Cambiador", "available": true },
          { "id": 4, "name": "Área de cocina", "available": true },         
          { "id": 5, "name": "Estacionamiento", "available": true },
          { "id": 6, "name": "Área de juegos o brincolín", "available": true },
          { "id": 7, "name": "Área para fumar", "available": true },
          { "id": 8, "name": "WiFi", "available": true },
          { "id": 9, "name": "Pantalla para proyectar", "available": true },
          { "id": 10, "name": "Salida de emergencia", "available": true }, 
          { "id": 11, "name": "Acepta pago (TC, TD)", "available": true }
        ],
        "paquetes":[
          {
            seccion: "A Celebrar",
            price: 260,
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
            price: 320,
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
            price: 380,
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
          { "id": 1, "name": "Coordinador de Eventos", "available": true },
          { "id": 2, "name": "Animador de Eventos", "available": true },
          { "id": 3, "name": "DJ", "available": true },
          { "id": 4, "name": "Barra libre", "available": true },
          { "id": 5, "name": "Torna fiesta", "available": true },
          { "id": 6, "name": "Arreglo de globos", "available": true },
          { "id": 7, "name": "Decoración temática", "available": true },
          { "id": 8, "name": "Mesa de dulces", "available": true },
          { "id": 9, "name": "Arreglos florales", "available": true },
          { "id": 10, "name": "Música versatil", "available": true },
          { "id": 11, "name": "Música banda", "available": true },
          { "id": 12, "name": "Mariachi", "available": true },
          { "id": 13, "name": "Norteño", "available": true },
          { "id": 14, "name": "Banda de rock", "available": true },
          { "id": 15, "name": "Saxofon", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 16,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 16",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 17,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 17",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 18,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 18",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 19,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 19",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 20,
        "name": "Oasis",
        "description": "Descripción del Jardín 20",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 21,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 21",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 22,
        "name": "Green Party",
        "description": "Descripción del Jardín 22",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 23,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 23",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 24,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 24",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 25,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 25",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 26,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 26",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 27,
        "name": "Oasis",
        "description": "Descripción del Jardín 27",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 28,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 28",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 29,
        "name": "Green Party",
        "description": "Descripción del Jardín 29",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 30,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 30",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },{
        "id": 31,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 31",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 32,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 32",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 33,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 33",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 34,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 34",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 35,
        "name": "Oasis",
        "description": "Descripción del Jardín 35",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 36,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 36",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 37,
        "name": "Green Party",
        "description": "Descripción del Jardín 37",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 38,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 38",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 39,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 39",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 40,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 40",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 41,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 41",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 42,
        "name": "Oasis",
        "description": "Descripción del Jardín 42",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 43,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 43",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 44,
        "name": "Green Party",
        "description": "Descripción del Jardín 44",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 45,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 45",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 46,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 46",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 47,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 47",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },{
        "id": 1,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 1",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 16,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 16",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 17,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 17",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 18,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 18",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 19,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 19",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 20,
        "name": "Oasis",
        "description": "Descripción del Jardín 20",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 21,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 21",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 22,
        "name": "Green Party",
        "description": "Descripción del Jardín 22",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 23,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 23",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 24,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 24",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 25,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 25",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 26,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 26",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 27,
        "name": "Oasis",
        "description": "Descripción del Jardín 27",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 28,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 28",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 29,
        "name": "Green Party",
        "description": "Descripción del Jardín 29",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 30,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 30",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },{
        "id": 31,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 31",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 32,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 32",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 33,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 33",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 34,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 34",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 35,
        "name": "Oasis",
        "description": "Descripción del Jardín 35",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 36,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 36",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 37,
        "name": "Green Party",
        "description": "Descripción del Jardín 37",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 38,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 38",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 39,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 39",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 40,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 40",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 41,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 41",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 42,
        "name": "Oasis",
        "description": "Descripción del Jardín 42",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 43,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 43",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 44,
        "name": "Green Party",
        "description": "Descripción del Jardín 44",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 45,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 45",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 46,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 46",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 47,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 47",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 16,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 16",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 17,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 17",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 18,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 18",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 19,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 19",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 20,
        "name": "Oasis",
        "description": "Descripción del Jardín 20",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 21,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 21",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 22,
        "name": "Green Party",
        "description": "Descripción del Jardín 22",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 23,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 23",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 24,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 24",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 25,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 25",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 26,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 26",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 27,
        "name": "Oasis",
        "description": "Descripción del Jardín 27",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 28,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 28",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 29,
        "name": "Green Party",
        "description": "Descripción del Jardín 29",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 30,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 30",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },{
        "id": 31,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 31",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 32,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 32",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 33,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 33",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 34,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 34",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 35,
        "name": "Oasis",
        "description": "Descripción del Jardín 35",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 36,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 36",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 37,
        "name": "Green Party",
        "description": "Descripción del Jardín 37",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 38,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 38",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 39,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 39",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 40,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 40",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 41,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 41",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 42,
        "name": "Oasis",
        "description": "Descripción del Jardín 42",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 43,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 43",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 44,
        "name": "Green Party",
        "description": "Descripción del Jardín 44",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 45,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 45",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 46,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 46",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 47,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 47",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },{
        "id": 1,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 1",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 16,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 16",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 17,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 17",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 18,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 18",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 19,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 19",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 20,
        "name": "Oasis",
        "description": "Descripción del Jardín 20",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 21,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 21",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 22,
        "name": "Green Party",
        "description": "Descripción del Jardín 22",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 23,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 23",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 24,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 24",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 25,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 25",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 26,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 26",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 27,
        "name": "Oasis",
        "description": "Descripción del Jardín 27",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 28,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 28",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 29,
        "name": "Green Party",
        "description": "Descripción del Jardín 29",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 30,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 30",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },{
        "id": 31,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 31",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 32,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 32",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 33,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 33",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 34,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 34",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 35,
        "name": "Oasis",
        "description": "Descripción del Jardín 35",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 36,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 36",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 37,
        "name": "Green Party",
        "description": "Descripción del Jardín 37",
        image: getImagePath('jardin', 'Green Party'),
        "address": "Gladiola 54, Florida, 55240 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 38,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 38",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 39,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 39",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 40,
        "name": "Rosalinda",
        "description": "Descripción del Jardín 40",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 41,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 41",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 42,
        "name": "Oasis",
        "description": "Descripción del Jardín 42",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 43,
        "name": "Kristal Jardin",
        "description": "Descripción del Jardín 43",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 44,
        "name": "Green Party",
        "description": "Descripción del Jardín 44",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 45,
        "name": "Casa Blanca",
        "description": "Descripción del Jardín 45",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 46,
        "name": "Santa Maria",
        "description": "Descripción del Jardín 46",
        image: getImagePath('jardin', 'Santa Maria'),
        "address": "C. Tarandacuaho 26, Emiliano Zapata 1a Secc, 55200 Ecatepec de Morelos, Méx.",
        "hours": "9:00 - 23:00",
         event_hors: 8,
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
          { "id": 7, "name": "Fiesta de compromiso", "available": true },
          { "id": 8, "name": "Reuniones familiares", "available": true }
        ]
      },
      {
        "id": 47,
        "name": "Los Cisnes",
        "description": "Descripción del Jardín 47",
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
          { "id": 7, "name": "Fiesta de compromiso", "available": false },
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
  

