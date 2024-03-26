import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  return <Map />;
};
export default MapScreen;
