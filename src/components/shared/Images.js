// src/components/shared/Images.js

export const getImagePath = (type, name) => {
    return `/Enfiestandonos/events/${type}/${name.toLowerCase().replace(/\s+/g, '')}/${name.toLowerCase().replace(/\s+/g, '')}.png`;
  };
  


  /**
   * Para que esta apto: XV anos, bodas, etc Tipo de evento: 
   * Horario de atencion
   * Capacidad  max
   * precio aproximado
   * 
   * 
   * En el detalle
   * Recibidor
   * Cambiador
   * Area de cocina
   * Pantalla para pyoyectar
   * Estacionamiento  cap max
   * Area de juejos o de brincolin
   * Salida de Emergencia
   * Acceso a discapacitados
   * Tipo de pago tc, td, wifi
   * 
   * 
   * Costo inicial
   * min de personas o cubrir el paquete inicial
   * Descripcion de que incluye en los paquetes en caso de ser XV anos o bodas, infantiles
   * paquete 2
   * Min mas adicionales 
   * Paquete top 
   * Adicionales
   * DJ
   * 
   * 
   * tipos de eventos********************************
   * export const eventTypes = {
    jardin: [
        "Bodas",
        "Quinceaños",
        "Bautizos",
        "Cumpleaños",
        "Picnics corporativos",
        "Eventos al aire libre",
        "Fiestas de compromiso",
        "Reuniones familiares",
    ],
    salonInfantil: [
        "Fiestas de cumpleaños infantiles",
        "Bautizos",
        "Fiestas temáticas",
        "Show de payasos o magos",
        "Eventos escolares",
        "Tardes de cine para niños",
        "Talleres infantiles",
    ],
    salon: [
        "Conferencias",
        "Seminarios",
        "Reuniones empresariales",
        "Bodas",
        "Quinceaños",
        "Fiestas de fin de año",
        "Eventos sociales",
        "Presentaciones de producto",
    ],
    hacienda: [
        "Bodas",
        "Eventos corporativos",
        "Fiestas de gala",
        "Fiestas temáticas",
        "Quinceaños",
        "Bautizos",
        "Reuniones familiares grandes",
        "Sesiones fotográficas",
    ],
    terraza: [
        "Fiestas al aire libre",
        "Asados o BBQs",
        "Reuniones familiares o de amigos",
        "Eventos privados",
        "Cumpleaños",
        "Brunchs",
        "Fiestas al atardecer (sunset parties)",
        "Eventos de networking",
    ],
};
   */