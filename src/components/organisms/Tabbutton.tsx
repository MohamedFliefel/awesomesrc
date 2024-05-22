import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Homee from '../organisms/Homee';
import Transfer from '../organisms/Transfer';
import Beneficiaries from '../organisms/Beneficiaries';
import Atm from '../organisms/Atm';
import Airpay from '../organisms/Airpay';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon, Image} from 'react-native-elements';
import MyDrawer from '../organisms/Drawer';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';

function Tabbutton() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerShown: false,
      //   tabBarStyle: styles.tabBar,
      // }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = require('../Assets/home.png');
          } else if (route.name === 'Transfer') {
            iconSource = require('../Assets/Transfer.png');
          } else if (route.name === 'Beneficiaries') {
            iconSource = require('../Assets/Beneficiaries(1).png');
          } else if (route.name === 'Atm') {
            iconSource = require('../Assets/map.png');
          } else if (route.name === 'Airpay') {
            iconSource = require('../Assets/AirPay.png');
          }

          return <Image source={iconSource} style={styles.icon} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Homee} />
      <Tab.Screen name="Transfer" component={Transfer} />
      <Tab.Screen name="Beneficiaries" component={Beneficiaries} />
      <Tab.Screen name="Atm" component={Atm} />
      <Tab.Screen name="Airpay" component={Airpay} />
      <Tab.Screen name="MyDrawer" component={MyDrawer} />
    </Tab.Navigator>
  );
}

export default Tabbutton;
const styles = StyleSheet.create({
  icon: {
    width: 70,
    height: 70,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 100,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
