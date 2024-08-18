import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Inicio } from '../components/general/Inicio'
import { SobreNosotros } from '../components/general/SobreNosotros'
import { ReservaEvento } from '../components/general/ReservaEvento'
import { EspaciosEventos } from '../components/general/EspaciosEventos'
import { Galeria } from '../components/general/Galeria'
import { Jardines } from '../components/events/Jardines/Jardines'
import { Header } from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { InfatilesList } from '../components/events/Infantiles/InfatilesList'
import { SalonesList } from '../components/events/Salones/SalonesList'
import { TerrazasList } from '../components/events/Terrazas/TerrazasList'
import { HaciendasList } from '../components/events/Haciendas/HaciendasList'



export const AppRouter = () => {
  return (
    <BrowserRouter>
     <div>
    <Header />
    <div className="container">
      <section className='content'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/espacios-para-tu-evento" element={<EspaciosEventos />} />
          <Route path="/reserva-tu-evento" element={<ReservaEvento />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/espacios-para-tu-evento/jardin" element={<Jardines />} />
          <Route path="/espacios-para-tu-evento/infantil" element={<InfatilesList />} />
          <Route path="/espacios-para-tu-evento/salon" element={<SalonesList />} />
          <Route path="/espacios-para-tu-evento/hacienda" element={<HaciendasList />} />
          <Route path="/espacios-para-tu-evento/terraza" element={<TerrazasList />} />
          <Route path='*' element={<div><h1>ERROR ESTA PAGINA NO EXISTE</h1></div>} />
        </Routes>
      </section>
    </div>
    <Footer />
    </div>
  </BrowserRouter>
  
  )
}
