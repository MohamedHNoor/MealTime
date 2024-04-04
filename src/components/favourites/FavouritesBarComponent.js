import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../spacer/SpacerComponent';
import { Text } from '../typography/TypographyComponent';
import CompactRestaurantInfo from '../restaurant/CompactRestaurantInfo';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBarComponent = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant='left.large'>
        <Text variant='caption'>Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer position='left' size='medium' key={key}>
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
export default FavouritesBarComponent;
