import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Inicio } from '../components/general/Inicio'
import { SobreNosotros } from '../components/general/SobreNosotros'
import { ReservaEvento } from '../components/general/ReservaEvento'
import { EspaciosEventos } from '../components/general/EspaciosEventos'
import { Galeria } from '../components/general/Galeria'
import { Header } from '../components/common/Header'
import { Footer } from '../components/common/Footer'

export const AppRouter = () => {
  return (
    <BrowserRouter>
       <Header/>
    
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
                    
        <Footer/> 
    </BrowserRouter>
  )
}
