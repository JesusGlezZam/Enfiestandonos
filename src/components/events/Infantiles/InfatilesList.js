import React from 'react'
import { Cards } from '../../shared/Cards'
import { infantilesData } from '../../../helpers/datosdummy'

export const InfatilesList = () => {
  return (
    <div className='events'>
    <Cards items={infantilesData.infantiles} itemType="infantil" />;
</div>
  )
}
