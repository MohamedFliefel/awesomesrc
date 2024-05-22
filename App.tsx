/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Second} from './Second/Second';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Splash from './Firstimage/Splash';
import Thirdpage from './Thirdpage/Thirdpage';
import Otp from './src/components/organisms/Otp';
import Setyourpassword from './src/components/organisms/Setyourpassword';
import Congratulation from './src/components/organisms/congratulation';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Homee from './src/components/organisms/Homee';
import Transfer from './src/components/organisms/Transfer';
import Beneficiaries from './src/components/organisms/Beneficiaries';
import Atm from './src/components/organisms/Atm';
import Airpay from './src/components/organisms/Airpay';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-elements';
import MyDrawer from './src/components/organisms/Drawer';
import Tabbutton from './src/components/organisms/Tabbutton';
function Drawer() {
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
            iconSource = require('../AwesomeProject/src/components/Assets/home.png');
          } else if (route.name === 'Transfer') {
            iconSource = require('../AwesomeProject/src/components/Assets/Transfer.png');
          } else if (route.name === 'Beneficiaries') {
            iconSource = require('../AwesomeProject/src/components/Assets/Beneficiaries(1).png');
          } else if (route.name === 'Atm') {
            iconSource = require('../AwesomeProject/src/components/Assets/map.png');
          } else if (route.name === 'Airpay') {
            iconSource = require('../AwesomeProject/src/components/Assets/AirPay.png');
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
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Thirdpage} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Setyourpassword" component={Setyourpassword} />
        <Stack.Screen name="Congratulation" component={Congratulation} />
        <Stack.Screen name="Tabbutton" component={Tabbutton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
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
