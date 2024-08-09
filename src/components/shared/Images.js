// src/components/shared/Images.js

export const getImagePath = (type, name) => {
    return `/Enfiestandonos/events/${type}/${name.toLowerCase().replace(/\s+/g, '')}/${name.toLowerCase().replace(/\s+/g, '')}.png`;
  };
  