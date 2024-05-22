import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../../../Second/Second.style';
import {Text} from 'react-native';
type Buttontypes = {
  title?: string;
  onPress: () => void;
  style?: any;
};
export default function Loginbutton(props: Buttontypes) {
  const {title, onPress, style} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={style ? style : styles.loginButton}>
      <Text style={styles.loginButtontext}>{title}</Text>
    </TouchableOpacity>
  );
}
