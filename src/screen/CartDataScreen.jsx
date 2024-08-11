import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import {CartContext} from '../Context/CartContext';

const CartDataScreen = () => {
  const {carts, totalPrice, deleteItemFromCart} = useContext(CartContext);

  const numberWithComma = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  let val = 34344534;
  return (
    <LinearGradient
      colors={['#3b5998', '#2CBBD9', '#3b5998']}
      style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Header isCart={true}></Header>
      </View>

      <FlatList
        data={carts}
        renderItem={({item}) => {
          <CartCard item={item} deleteItemFromCart={deleteItemFromCart} />;
        }}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListFooterComponent={
          <>
            <View style={styles.PriceContainer}>
              <View style={styles.PriceAndTitle}>
                <Text style={styles.text}>Total :</Text>
                <Text style={styles.text}>${totalPrice.toFixed(2)}</Text>
              </View>
              <View style={styles.PriceAndTitle}>
                <Text style={styles.text}>Shopping :</Text>
                <Text style={styles.text}>$0.00</Text>
              </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.PriceAndTitle}>
              <Text style={styles.text}>Grand Total :</Text>
              <Text style={[styles.text, {color: 'black', fontWeight: '700'}]}>
                ${totalPrice.toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>
          </>
        }></FlatList>
    </LinearGradient>
  );
};

export default CartDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  HeaderContainer: {
    marginBottom: 10,
  },
  PriceAndTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: '#414547',
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#90A0AA',
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
  button: {
    backgroundColor: '#73A338',
    padding: 10,
    margin: 5,
    borderRadius: 20,
    marginVertical: 5,
  },
});
