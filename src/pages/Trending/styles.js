import styled from 'styled-components/native';

import { StatusBar } from 'react-native';

export const SafeAreaView = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight || 0};
`;

export const FlatList = styled.FlatList``;

export const ViewLoad = styled.View`
  align-self: center;
`;

export const IconLoad = styled.ActivityIndicator``;
