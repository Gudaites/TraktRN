import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';

import { api } from '../services/api';
import Trending from '../pages/Trending';
import Popular from '../pages/Popular';

Feather.loadFont();

const App = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: '#333333',
    card: '#111',
  },
};

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const callGenres = async () => {
      const { data } = await api.get('genres/movies');
      dispatch({
        type: 'SET_FILTER',
        payload: data,
      });
    };
    callGenres();
  });

  return (
    <NavigationContainer independent theme={MyTheme}>
      <App.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trending') {
              iconName = focused ? 'trending-up' : 'trending-up';
            } else if (route.name === 'Popular') {
              iconName = focused ? 'star' : 'star';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
          cardStyle: { backgroundColor: '#333333' },
        })}
        tabBarOptions={{
          activeTintColor: '#f0a500',
          inactiveTintColor: 'grey',
        }}
      >
        <App.Screen name="Popular" component={Popular} />
        <App.Screen name="Trending" component={Trending} />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
