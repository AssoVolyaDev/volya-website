import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const K_WIDTH = 30;
const K_HEIGHT = K_WIDTH;

interface MapMarkerInterface {
  lat: number;
  lng: number;
}

const MapMarker = (props: MapMarkerInterface): ReactElement => {
  return (
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      color="#de1925"
      style={{
        position: 'absolute',
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT
      }}
    />
  );
};

export default MapMarker;
