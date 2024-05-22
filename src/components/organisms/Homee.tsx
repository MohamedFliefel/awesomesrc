import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import styles from './Homee.style';
import {Image} from 'react-native';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Homee = ({navigation}) => {
  type ItemProps = {img: string};
  console.log('navigation: ', navigation);

  const Item = ({img}: ItemProps) => (
    <Image source={img} style={{width: 77, height: 86}} />
  );
  const DATA = [
    {
      img: require('../Assets/Group66.png'),
    },
    {
      img: require('../Assets/Group63.png'),
    },
    {
      img: require('../Assets/Group64.png'),
    },
    {
      img: require('../Assets/Group65(1).png'),
    },
    {
      img: require('../Assets/Group66.png'),
    },
    {
      img: require('../Assets/Group63.png'),
    },
    {
      img: require('../Assets/Group64.png'),
    },
    {
      img: require('../Assets/Group65(1).png'),
    },
    {
      img: require('../Assets/Group66.png'),
    },
    {
      img: require('../Assets/Group63.png'),
    },
    {
      img: require('../Assets/Group64.png'),
    },
    {
      img: require('../Assets/Group65(1).png'),
    },
  ];
  const ay7aga = [
    {
      img: require('../Assets/Group44.png'),
      txt1: 'Carrefour',
      txt2: '$250.21',
    },
    {
      img: require('../Assets/Group45.png'),
      txt1: 'Amazon',
      txt2: '$3004.21',
    },
    {
      img: require('../Assets/Group46.png'),
      txt1: 'Jumia',
      txt2: '$2146.63',
    },
    {
      img: require('../Assets/Group47.png'),
      txt1: 'Hala seliman',
      txt2: '$5140.00',
    },
    {
      img: require('../Assets/Group44.png'),
      txt1: 'Carrefour',
      txt2: '$250.21',
    },
    {
      img: require('../Assets/Group45.png'),
      txt1: 'Amazon',
      txt2: '$3004.21',
    },
    {
      img: require('../Assets/Group46.png'),
      txt1: 'Jumia',
      txt2: '$2146.63',
    },
    {
      img: require('../Assets/Group47.png'),
      txt1: 'Hala seliman',
      txt2: '$5140.00',
    },
    {
      img: require('../Assets/Group44.png'),
      txt1: 'Carrefour',
      txt2: '$250.21',
    },
    {
      img: require('../Assets/Group45.png'),
      txt1: 'Amazon',
      txt2: '$3004.21',
    },
    {
      img: require('../Assets/Group46.png'),
      txt1: 'Jumia',
      txt2: '$2146.63',
    },
    {
      img: require('../Assets/Group47.png'),
      txt1: 'Hala seliman',
      txt2: '$5140.00',
    },
  ];

  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 54,
      }}>
      <View style={styles.container}>
        <Pressable
          style={{width: 50, height: 50, backgroundColor: 'red'}}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Image
          source={require('../Assets/Rectangle7(1).png')}
          style={styles.image}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={styles.text}>Good morning</Text>
          <Image source={require('../Assets/ring.png')} style={styles.image2} />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Image
          source={require('../Assets/Group777.png')}
          style={{
            width: 347,
            height: 132,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // gap: 37,
          justifyContent: 'space-between',
          marginTop: 31,
        }}>
        {/* <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              height: 59,
              width: 59,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Assets/dollar.png')}
              style={{width: 30, height: 21}}></Image>
          </TouchableOpacity>
          <Text>accounts</Text>
        </View> */}
        <View>
          <TouchableOpacity>
            <Image
              source={require('../Assets/Group35.png')}
              style={{width: 68, height: 83}}></Image>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../Assets/Group32.png')}
              style={{width: 59, height: 83}}></Image>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../Assets/Group33.png')}
              style={{width: 59, height: 83}}></Image>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../Assets/Group34.png')}
              style={{width: 59, height: 83}}></Image>
          </TouchableOpacity>
        </View>

        {/* <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              height: 59,
              width: 59,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Assets/dollar.png')}
              style={{width: 30, height: 21}}></Image>
          </TouchableOpacity>
          <Text>cards</Text>
        </View> */}
        {/* <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              height: 59,
              width: 59,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Assets/dollar.png')}
              style={{width: 30, height: 21}}></Image>
          </TouchableOpacity>
          <Text>cards</Text>
        </View> */}
        {/* <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              height: 59,
              width: 59,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Assets/dollar.png')}
              style={{width: 30, height: 21}}></Image>
          </TouchableOpacity>
          <Text>cards</Text>
        </View> */}
      </View>
      {/* <Text>ccjrbjvb</Text> */}

      <View style={{marginTop: 20}}>
        <SafeAreaView style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Send Money
            </Text>
            <Text> View All</Text>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            renderItem={({item}) => <Item img={item.img} />}
            // keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: '#1C2437'}}>
        History
      </Text>
      <ScrollView style={{marginBottom: 30}}>
        {ay7aga?.map(itm => (
          <View>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/* <View style={{width: '35%', height: '20'}}> */}
                <Image source={itm.img} style={styles.image4} />
                {/* </View> */}
                <Text style={styles.text}>{itm.txt1}</Text>
              </View>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  {itm.txt2}
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Homee;
