import React from 'react';
import Point from '../Point';

import data from '../../data.json';

export default function ToiletPoints() {
  return (
    <React.Fragment>
      {data.map(item => {
        return (
          <Point
            key={item.key}
            draggable={true}
            coordinates={item.coordinates}
            image={require('../../assets/toilet.png')}
            title={`Lat: ${item.coordinates.latitude} - Lon: ${item.coordinates.longitude}`}
          />
        );
      })}
    </React.Fragment>
  );
}
