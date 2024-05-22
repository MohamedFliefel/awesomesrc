import React from 'react';
import {
  View,
  StatusBar,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './Second.style';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {CheckBox} from 'react-native-elements';
import {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Alert} from 'react-native';
import Header from '../src/components/Molecules/Header';
import {useNavigation} from '@react-navigation/native';

export const Second = () => {
  // const [rememberMe, setRememberMe] = useState(false);

  // const toggleRememberMe = () => {
  //   setRememberMe(!rememberMe);
  // };
  const navigation = useNavigation();
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../dl.beatsnoop2.png')} // Path to your image
        style={styles.background}>
        <Header />
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Welcome to The National Bank of Egypt</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            onChangeText={(text: any) => console.log(text)} // Handle text input
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="white"
            secureTextEntry={true} // For password input
            onChangeText={(text: any) => console.log(text)} // Handle password input
          />
          <View style={styles.inputContainer4}>
            <View style={styles.inputContainer2}>
              <BouncyCheckbox
                disableText
                fillColor="#9342f5"
                size={50}
                iconStyle={styles.checkboxIcon}
                onPress={isChecked => {}}
              />
              <Text style={styles.remembermetext}>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.Forgotpasswordtext}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          {/* Forgot Password link */}
          {/* <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity> */}
          <View style={styles.loginFingerprintContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtontext}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../register.png')}
                style={styles.imageLeft}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dontyouHaveanaccountcontainer}>
            <Text style={styles.dontyouHaveanaccounttext}>
              Don’t have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Third')}>
              <Text style={styles.signUptext}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
