import React from 'react'
import { Cards } from '../../shared/Cards'
import { haciendasData } from '../../../helpers/datosdummy'

export const HaciendasList = () => {
  return (
    <div className='events'>
    <Cards items={haciendasData.haciendas} itemType="hacienda" />;
</div>
  )
}
