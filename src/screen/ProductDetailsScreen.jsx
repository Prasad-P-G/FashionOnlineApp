import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CartContext} from '../Context/CartContext';

const imgUrl =
  'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png';

const sizes = ['S', 'L', 'M', 'XL'];
const Circle_colors = [
  '#90A0AA',
  '#BF282A',
  '#1949B0',
  '#9C6225',
  '#127421',
  '#000000',
];

const ProductDetailsScreen = () => {
  const {addToCart} = useContext(CartContext);
  const navigation = useNavigation();

  const route = useRoute();
  const currentItem = route.params.item;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddToCart = item => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
    navigation.navigate('CART');
  };
  return (
    <LinearGradient
      colors={['#3b5998', '#2CBBD9', '#3b5998']}
      style={styles.container}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
          <Header></Header>
        </View>
        <Image
          source={{uri: currentItem.image}}
          style={styles.ConverImage}></Image>
        <View style={styles.contentContainer}>
          <Text style={styles.Title}>{currentItem.title}</Text>
          <Text style={[styles.Title, styles.Price]}>${currentItem.price}</Text>
        </View>

        {/* size text */}
        <Text style={[styles.Title, styles.SizeText]}>Size</Text>
        <View style={styles.SizeContainer}>
          {sizes.map((size, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.SizeValueContainer,
                  selectedSize == size && {backgroundColor: 'pink'},
                ]}
                onPress={() => {
                  setSelectedSize(size);
                }}>
                <Text
                  style={[
                    styles.sizeValue,
                    selectedSize == size && {color: '#666666'},
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* color container */}
        <Text style={[styles.Title, styles.SizeText]}>Color</Text>
        <View style={styles.ColorContainer}>
          {Circle_colors.map((circleColor, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedColor(circleColor);
                }}
                style={[
                  styles.circleBorder,
                  selectedColor === circleColor && {
                    borderColor: circleColor,
                    borderWidth: 2,
                  },
                ]}>
                <View
                  style={[
                    styles.circle,
                    {backgroundColor: circleColor},
                  ]}></View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Add to cart button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleAddToCart(currentItem);
          }}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  Title: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '500',
  },

  HeaderContainer: {
    padding: 5,
  },
  ConverImage: {
    width: '100%',
    height: 420,
  },
  SizeText: {
    marginHorizontal: 20,
  },
  SizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  SizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  ColorContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  circleBorder: {
    height: 48,
    width: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#73A338',
    padding: 10,
    margin: 5,
    borderRadius: 20,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
});
