import React from 'react';
import {Pressable, View} from 'react-native';
import Backbutton from '../Atoms/Backbutton';
import styles from './Layout.style';
import Lay from '../Atoms/Lay';
import {Text} from 'react-native';
import Loginbutton from '../Atoms/Loginbutton';
import {TouchableOpacity} from 'react-native';
export default function Layout({title, subtitle}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Backbutton />
        <Lay />
      </View>

      <Text style={styles.tittletext}>{title}</Text>
      <Text style={styles.subtittletext}>{subtitle}</Text>
    </View>
  );
}
