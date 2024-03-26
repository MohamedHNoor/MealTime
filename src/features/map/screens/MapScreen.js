import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import MapSearchComponent from '../components/MapSeachComponent';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  return (
    <>
      <MapSearchComponent />
      <Map />
    </>
  );
};
export default MapScreen;
