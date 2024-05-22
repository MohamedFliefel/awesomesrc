import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import Layout from '../Molecules/Layout';
import {TextInput, Button, StyleSheet, Alert} from 'react-native';
import {styles} from './Otp.style';
import Loginbutton from '../Atoms/Loginbutton';
import {useNavigation} from '@react-navigation/native';

const Otp = () => {
  const navigation = useNavigation();
  const [otp, setOTP] = useState(['', '', '', '', '']);
  const otpInputs = useRef([]);
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const OTPVerification = () => {};
  const handleInputChange = (index: number, text: string) => {
    if (text.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = text;
      setOTP(newOTP);
      if (index < 4 && text.length > 0) {
        otpInputs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyOTP = () => {
    const enteredOTP = otp.join('');
    if (enteredOTP.length === 5) {
      navigation.navigate('Setyourpassword');
    } else {
      Alert.alert('Error', 'Please enter a valid OTP');
    }
  };

  return (
    <View
      //   style={styles.container}
      style={{paddingHorizontal: 24, flex: 1, backgroundColor: '#F1F3FB'}}>
      <Layout
        subtitle={'Enter 5 digit code we sent to +20 101 131 5412'}
        title={'Verification'}
      />
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (otpInputs.current[index] = ref)}
            style={styles.otpInput}
            onChangeText={text => handleInputChange(index, text)}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <Loginbutton
        title="Submit"
        onPress={handleVerifyOTP}
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
export default Otp;
