/**
 * Basic file that contains type definitions for various objects in the application
 */

import { LatLng } from 'react-native-maps/lib/sharedTypes';
import { ImageURISource } from 'react-native';

interface Point {
    coordinates?: LatLng;
    image?: number | ImageURISource | undefined;
}