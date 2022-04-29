import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';
import Welcome from '../containers/Welcome';
import Home from '../containers/Home';
import RoutesKey from './routeKeys';
import homeIcon from '../assets/images/home.png';
import bellIcon from '../assets/images/bell.png';

export default function BottomNav({ route }) {
  const params = route.params || {};
  const { personDetailsId, personId } = params;
  console.log(personId);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={RoutesKey.HOME}
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 22, width: 20, resizeMode: 'cover' }}
              source={homeIcon}
            />
          )
        }}
      />
      <Tab.Screen
        name={RoutesKey.WELCOME}
        component={Welcome}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Image
              alt="bottomNotificationicon"
              style={{ height: 22, width: 20, resizeMode: 'cover' }}
              source={bellIcon}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}
