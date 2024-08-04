import React from 'react';

export const WhatsAppQRCode = () => {
    
  const whatsappLink = "https://wa.me/5215512345678?text=Enfiestandonos!%20Gracias%20por%20preferir%20nuestro%20servicio.%20Te%20daremos%20el%20seguimiento%20para%20afinar%20detalles%20de%20tu%20evento.";

  return (
    <div>
      <h2>Escanea el QR para Contactarnos por WhatsApp</h2>
      <img 
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(whatsappLink)}`} 
        alt="WhatsApp QR Code"
      />
    </div>
  );
}
