import React from 'react'
import { Cards } from '../../shared/Cards'
import { terrazasData } from '../../../helpers/datosdummy'

export const TerrazasList = () => {
  return (
    <div className='events'>
        <Cards items={terrazasData.terrazas} itemType="terraza" />;
    </div>
  )
}
