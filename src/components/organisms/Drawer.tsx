import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Homee from './Homee';
import Transfer from './Transfer';
import Tabbutton from './Tabbutton';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Homee} />
      <Drawer.Screen name="Transfer" component={Transfer} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
