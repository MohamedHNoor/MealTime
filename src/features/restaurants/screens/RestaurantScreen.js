import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import RestaurantInfoComponent from '../components/RestaurantInfoComponent';
import { Spacer } from '../../../components/spacer/SpacerComponent';
import { SafeArea } from '../../../components/utility/SafeAreaComponent';
import { RestaurantsContext } from '../../../services/restaurant/restaurant-context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import RestaurantSearchComponent from '../components/RestaurantSearchComponent';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}

      <RestaurantSearchComponent />

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurant: item })
            }
          >
            <Spacer position='bottom' size='large'>
              <RestaurantInfoComponent restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
export default RestaurantScreen;
