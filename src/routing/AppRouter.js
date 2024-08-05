import React from 'react'
import { BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { SobreNosotros } from '../components/SobreNosotros'
import { ReservaEvento } from '../components/ReservaEvento'
import { EspaciosEventos } from '../components/EspaciosEventos'
import { Galeria } from '../components/Galeria'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div className='header'>
            <nav>
                <div className='logo'>
                <h2>Enfiestandonos  (falta logotipo)</h2>
                </div>
                <div className='welcome-message'>
                <h2>Nos especializamos en convertir tus eventos en momentos inolvidables. (falta ver si se complementa con una imagen)</h2>
                </div>
            </nav>
        </div>
    
        <section className='content'>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/sobre-nosotros" element={<SobreNosotros/>}/>
                <Route path="/espacios-para-tu-evento" element={<EspaciosEventos/>}/>
                <Route path="/reserva-tu-evento" element={<ReservaEvento/>}/>
                <Route path="/galeria" element={<Galeria/>}/>

                <Route path='*' element={(<div>
                                            <h1>ERROR ESTA PAGINA NO EXISTE</h1>
                                        </div>)} /> 
            </Routes>
        </section>

        <footer>
            <p>&copy; 2024 Enfiestándonos. Todos los derechos reservados.</p>
            <nav>
                <ul>
                <li> <NavLink to="/inicio">Inicio</NavLink></li>
                <li><NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
                <li><NavLink to="/espacios-para-tu-evento">Espacios para tu evento</NavLink></li>
                <li><NavLink to="/reserva-tu-evento">Reserva tu evento</NavLink></li>
                <li><NavLink to="/galeria">Galeria</NavLink></li>
                </ul>
            </nav>
        </footer>
    </BrowserRouter>
  )
}
