import styled from 'styled-components/native';

import { StatusBar } from 'react-native';

export const SafeAreaView = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight || 0}px;
`;

export const FlatList = styled.FlatList``;

export const ViewLoad = styled.View`
  margin-top: 15px;
  align-self: center;
  margin-bottom: 15px;
`;

export const IconLoad = styled.ActivityIndicator``;

export const HeaderView = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  color: white;
`;
