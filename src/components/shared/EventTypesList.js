import React from 'react'
import { eventTypes } from '../../helpers/eventTypes';

export const EventTypesList = ({ spaceType }) => {
    const events = eventTypes[spaceType];

    if (!events) {
        return <p>No hay eventos disponibles para este tipo de espacio.</p>;
    }

    return (
        <div className="event-types-list">
            <h2>Tipos de Eventos para {spaceType.charAt(0).toUpperCase() + spaceType.slice(1)}</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index} className="event-type-item">
                        {event}
                    </li>
                ))}
            </ul>
        </div>
    );
}
