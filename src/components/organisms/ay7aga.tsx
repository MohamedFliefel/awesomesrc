import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Otp from './Otp';
import congratulation from './congratulation';
import Talta from './Homee';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homee from './Homee';
import Transfer from './Transfer';

function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="otp" component={Otp} />
      <Tab.Screen name="congratulations" component={congratulation} />
      <Tab.Screen name="Talta" component={Talta} />
    </Tab.Navigator>
  );
}

function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  function MyDrawer() {
    return (
      <Drawer.Navigator defaultStatus="open">
        <Drawer.Screen name="Transfer" component={Transfer} />
      </Drawer.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={MyDrawer} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
