import { View, Text } from 'react-native';
import RestaurantInfoComponent from '../components/RestaurantInfoComponent';
import { SafeArea } from '../../../components/utility/SafeAreaComponent';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoComponent restaurant={restaurant} />
    </SafeArea>
  );
};
export default RestaurantDetailScreen;
