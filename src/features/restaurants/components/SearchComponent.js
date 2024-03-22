import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location-context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search'
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
export default SearchComponent;
