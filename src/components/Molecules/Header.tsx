import Languagebutton from '../Atoms/Languagebutton';
import Logo from '../Atoms/Logo';
import React from 'react';
import styles from '../../../Second/Second.style';
import {View} from 'react-native';

export default function Header(props) {
  const hidebtn = props?.hidebtn;
  return (
    <View style={styles.container2}>
      {hidebtn ? <View></View> : <Languagebutton />}
      <Logo />
    </View>
  );
}
