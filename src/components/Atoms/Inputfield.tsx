import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../../Second/Second.style';

export default function Inputfield() {
  return (
    <TextInput
      style={styles.input}
      placeholder="Username"
      placeholderTextColor="white"
      onChangeText={(text: any) => console.log(text)} // Handle text input
    />
  );
}
