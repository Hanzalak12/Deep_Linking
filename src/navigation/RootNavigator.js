import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';

import DetailsScreen from '../containers/Detail';
import BottomNav from './bottomNav';

const RootStack = createNativeStackNavigator();

const linking = {
  prefixes: ['http://thenissispace.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: {
        path: 'home'
      },
      Details: {
        path: 'details/:personId'
      }
    }
  }
};

const RootNavigator = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="black" size="large" />}
    >
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={BottomNav} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
