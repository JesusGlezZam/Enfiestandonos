import React from 'react'
import { imagePaths } from '../shared/imagePaths';

export const Publish = ({ imageKey }) => {
  return (
    <div className="advertisement">
      <img src={imagePaths[imageKey]} alt="Publicidad" />
    </div>
  );
};
