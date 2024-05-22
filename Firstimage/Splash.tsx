import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import styles from './Splash.style';
import {useNavigation} from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('Second');
  }, 5000);
  return (
    <View style={styles.container}>
      <Image
        source={require('../src/components/Assets/Group(1).png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require('../src/components/Assets/Group.png')}
        style={styles.picture}
        resizeMode="contain"
      />
    </View>
  );
};
export default Splash;
