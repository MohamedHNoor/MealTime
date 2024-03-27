import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import MapSearchComponent from '../components/MapSeachComponent';
import { LocationContext } from '../../../services/location/location-context';
import { RestaurantsContext } from '../../../services/restaurant/restaurant-context';

const StyledMap = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <MapSearchComponent />
      <StyledMap
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return null;
        })}
      </StyledMap>
    </>
  );
};
export default MapScreen;
