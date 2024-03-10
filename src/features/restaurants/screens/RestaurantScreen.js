import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfoComponent from '../components/RestaurantInfoComponent';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantScreen = () => {
  console.log(StatusBar.currentHeight);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder='Search' />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoComponent />
      </ListContainer>
    </SafeArea>
  );
};
export default RestaurantScreen;
