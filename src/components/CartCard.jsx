import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const cartUrl =
  'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png';

const CartCard = ({item, deleteItemFromCart}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.CoverImage}></Image>
      <View style={styles.CardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.CircleSizeContainer}>
          <View style={[styles.circle, {backgroundColor: item.color}]}></View>
          <View style={styles.SizeCircle}>
            <Text style={styles.SizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteItemFromCart(item);
        }}>
        <FontAwesome6 name={'trash'} size={18} color="#BF282A"></FontAwesome6>
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  CardContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  CoverImage: {
    height: 125,
    width: '30%',
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
    color: '#2D2E2E',
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    color: '#2D2E2E',
    marginVertical: 5,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  CircleSizeContainer: {
    flexDirection: 'row',
  },
  SizeCircle: {
    height: 32,
    width: 32,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SizeText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
