import React, { useContext } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfoComponent from '../components/RestaurantInfoComponent';
import { Spacer } from '../../../components/spacer/SpacerComponent';
import { SafeArea } from '../../../components/utility/SafeAreaComponent';
import { RestaurantsContext } from '../../../services/restaurant/restaurant-context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder='Search' />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position='bottom' size='large'>
            <RestaurantInfoComponent />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
export default RestaurantScreen;
