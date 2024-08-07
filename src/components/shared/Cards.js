import React from 'react'
import { space } from '../helpers/datosdummyJardin'
import { Link } from 'react-router-dom'

export const Cards = ({limite}) => {
  return (
    <div className="carousel-section">
          <section className='events'>
        {
          space.slice(0,limite).map(trabajo => {
          return (
            <article key={trabajo.id} className='work-item'>
              <div className='mask'>
                <img src={"/images/"+trabajo.id+".png"} />
              </div>
              <span>{trabajo.categorias}</span>
              <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>)
          })
      }
      </section>
    </div>
  )
}
