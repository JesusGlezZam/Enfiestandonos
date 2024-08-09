import React from 'react'
import { salonesData } from '../../../helpers/datosdummy'
import { Cards } from '../../shared/Cards'

export const SalonesList = () => {
  return (
    <div className='events'>
        <Cards items={salonesData.salones} itemType="salon" />;
    </div>
  )
}
