import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({isCart}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HOME');
        }}
        style={styles.appIconContainer}>
        {isCart ? (
          <Ionicons name={'chevron-back'} size={25} color="#BF282A"></Ionicons>
        ) : (
          <Image
            source={require('../assets/playstore.png')}
            style={styles.appIcon}></Image>
        )}
      </TouchableOpacity>

      {/* cart text for cart */}

      {isCart && <Text style={styles.myCartText}>My Cart</Text>}

      <View>
        {!isCart && (
          <Text
            style={[
              {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#A82E27',
                fontFamily: 'Matemasie',
              },
            ]}>
            OPEN FASHION
          </Text>
        )}
      </View>

      <Image
        source={require('../assets/Photo_Prasad.jpg')}
        style={styles.dp}></Image>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  appIcon: {
    height: 60,
    width: 60,
    backgroundColor: '2BA3BD',
    borderRadius: 50,
  },
  dp: {
    height: 60,
    width: 60,
    backgroundColor: '2BA3BD',
    borderRadius: 40,
  },
  appIconContainer: {
    height: 44,
    width: 44,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  myCartText: {
    fontSize: 28,
    color: 'black',
  },
  CompanyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#20232A',
    marginVertical: 10,
    fontFamily: 'Play-Regular',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
