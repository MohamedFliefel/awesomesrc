import {Pressable} from 'react-native';
import {Image} from 'react-native';
import styles from './Backbutton.style';
import {useNavigation} from '@react-navigation/native';
export default function Logo() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={styles.backbuttonpress}>
      <Image source={require('../Assets/right.png')}></Image>
    </Pressable>
  );
}
