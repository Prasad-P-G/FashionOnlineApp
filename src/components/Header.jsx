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
          navigation.navigate('HOME_STACK');
        }}
        style={styles.appIconContainer}>
        {isCart ? (
          <Ionicons name={'chevron-back'} size={25} color="#BF282A"></Ionicons>
        ) : (
          <Image
            source={require('../assets/appIcon.png')}
            style={styles.appIcon}></Image>
        )}
      </TouchableOpacity>

      {/* cart text for cart */}
      {isCart && <Text style={styles.myCartText}>My Cart</Text>}

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
  },
  appIcon: {
    height: 28,
    width: 28,
    backgroundColor: '2BA3BD',
    borderRadius: 10,
  },
  dp: {
    height: 44,
    width: 44,
    backgroundColor: '2BA3BD',
    borderRadius: 20,
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
});
