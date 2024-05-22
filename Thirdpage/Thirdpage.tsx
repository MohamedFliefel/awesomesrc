import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from '../Thirdpage/Thirdpage.style';
import Header from '../src/components/Molecules/Header';
import Layout from '../src/components/Molecules/Layout';
import {TextInput} from 'react-native';
import {Input} from 'react-native-elements';
import Loginbutton from '../src/components/Atoms/Loginbutton';
import Otp from '../src/components/organisms/Otp';
import {useNavigation} from '@react-navigation/native';

const Thirdpage = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingHorizontal: 24, flex: 1, backgroundColor: '#F1F3FB'}}>
      <Layout
        subtitle={'Enter the mobile number registred in the bank'}
        title={'Mobile number'}
      />

      <Input
        label={'Mobile Number'}
        style={styles.input}
        placeholder="+20 101 131 5412"
        placeholderTextColor="black"
        onChangeText={(text: any) => console.log(text)} // Handle text input
      />

      <Loginbutton
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
        onPress={() => {
          navigation.navigate('Otp');
        }}
        title="Next"
      />
    </View>
  );
};

export default Thirdpage;
