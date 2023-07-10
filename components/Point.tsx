/**
 * Component that describes a point on the map
 */

import { LatLng, MarkerDragStartEndEvent } from 'react-native-maps/lib/sharedTypes';
import { ImageURISource } from 'react-native';
import { Marker } from 'react-native-maps';
import { useState } from 'react';

interface Props {
    coordinates: LatLng;
    image?: number | ImageURISource | undefined;
    title?: string;
    description?: string;
    draggable?: boolean;
}

export default function Point(props: Props) {
    const {coordinates, image, draggable, ...otherProps} = props;
    
    const [currentCoords, setCurrentCoords] = useState<LatLng>(coordinates);

    function handleDragEnd(e: MarkerDragStartEndEvent) {
        if (draggable) {
            console.log("hello")
            setCurrentCoords(e.nativeEvent.coordinate);
        }
    }


    return (
        <Marker 
            coordinate={currentCoords}
            image={image ?? require("../assets/toilet.png")}
            onDragEnd={handleDragEnd}
            {...otherProps}
        />
    )
}