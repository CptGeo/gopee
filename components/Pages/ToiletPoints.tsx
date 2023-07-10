import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet, View} from 'react-native';
import {Fragment} from 'react';
import Point from '../Point';

import data from '../../data.json';

export default function ToiletPoints() {
  return (
    <Fragment>
      {data.map(item => {
        return (
          <Point
            key={item.key}
            draggable={true}
            coordinates={item.coordinates}
            image={require('../../assets/toilet.png')}
            title="I am a toilet"
            description="This toilet is really amazing"
          />
        );
      })}
    </Fragment>
  );
}
