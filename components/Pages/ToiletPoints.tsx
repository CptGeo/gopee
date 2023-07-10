import React from 'react';
import { Marker } from 'react-native-maps';

import data from '../../data.json';

export default function ToiletPoints() {
  return (
    <React.Fragment>
      {data.map(item => {
        return (
          <Marker
            key={item.key}
            draggable={true}
            coordinate={item.coordinates}
            image={require('../../assets/toilet.png')}
            title={`Lat: ${item.coordinates.latitude} - Lon: ${item.coordinates.longitude}`}
          />
        );
      })}
    </React.Fragment>
  );
}
