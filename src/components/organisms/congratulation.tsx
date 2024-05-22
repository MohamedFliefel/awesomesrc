import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './congratulation.style';
import {StatusBar} from 'react-native';
import Header from '../Molecules/Header';
import Loginbutton from '../Atoms/Loginbutton';
import {useNavigation} from '@react-navigation/native';
import Layout from '../Molecules/Layout';
import home from './Drawer';
const Congratulation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container2}>
      <ImageBackground
        source={require('../Assets/womancreditcard13.png')} // Path to your image
        style={styles.background}>
        <Header hidebtn={true} />
      </ImageBackground>

      <Loginbutton
        title="congratulations"
        onPress={() => {
          navigation.navigate('Tabbutton');
        }}
        style={{
          backgroundColor: '#FFFFFF',
          width: '80%',
          height: 50,
          borderRadius: 15,
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 82,
          color: 'clack',
        }}
      />
    </View>
  );
};

export default Congratulation;
