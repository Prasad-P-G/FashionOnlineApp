import {
  StyleSheet,
  Text,
  View,
  ImageView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import testImage from '../assets/dp.jpeg';
import {useNavigation} from '@react-navigation/native';

const ProductCart = ({item, handleLiked}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PRODUCT_DETAILS', {item});
      }}
      style={styles.Container}>
      <Image source={{uri: item.image}} style={styles.ImageCover}></Image>

      <View style={styles.Content}>
        <Text style={styles.Title}>{item.title}</Text>
        <Text style={styles.Price}>${item.price}</Text>
      </View>

      <TouchableOpacity
        style={styles.LikeContainer}
        onPress={() => {
          //setIsLiked(!isLiked);
          handleLiked(item);
        }}>
        {item.isLiked ? (
          <AntDesign name={'heart'} size={30} color={'#BB5047'} />
        ) : (
          <AntDesign name={'hearto'} size={30} color={'#BB5047'} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  LikeContainer: {
    height: 34,
    width: 34,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    right: 30,
  },
  Container: {
    flex: 1,
    marginTop: 10,
    position: 'relative',
  },
  ImageCover: {
    height: 256,
    width: '90%',
    borderRadius: 20,
  },
  Title: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  Price: {
    fontSize: 16,
    color: '#2D2E2E',
    fontWeight: '600',
  },
  Content: {
    paddingLeft: 15,
  },
});
