import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../Molecules/Layout';
import Inputfield from '../Atoms/Inputfield';
import {TextInput} from 'react-native';
import Loginbutton from '../Atoms/Loginbutton';
import {useNavigation} from '@react-navigation/native';
const Setyourpassword = () => {
  const navigation = useNavigation();
  function handleVerifyOTP(): void {}
  return (
    <View
      //   style={styles.container}
      style={{paddingHorizontal: 24, flex: 1, backgroundColor: '#F1F3FB'}}>
      <Layout
        subtitle={'Enter a strong password for your online banking account'}
        title={'Set your password'}
      />
      <TextInput
        // style={styles.input}
        placeholder="Password"
        placeholderTextColor="#007236"
        onChangeText={(text: any) => console.log(text)} // Handle text input
      />
      <TextInput
        // style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#B7B7B7"
        onChangeText={(text: any) => console.log(text)} // Handle text input
      />
      <Loginbutton
        title="Submit"
        onPress={() => {
          navigation.navigate('Congratulation');
        }}
        style={{
          backgroundColor: 'rgba(0, 114, 54, 1)',
          width: '100%',
          height: 50,
          borderRadius: 15,
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 82,
        }}
      />
    </View>
  );
};

export default Setyourpassword;
