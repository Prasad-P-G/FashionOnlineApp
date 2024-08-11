import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, createContext, useEffect} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    let carts = await AsyncStorage.getItem('carts');
    carts = carts ? JSON.parse(carts) : [];
    setCarts(carts);
    totalSum(carts);
  };

  const totalSum = carts => {
    const totSum = carts.reduce((amount, item) => amount + item.price, 0);
    setTotalPrice(totSum);
  };

  const addToCart = async item => {
    const itemExists = carts.findIndex(cartItem => cartItem.id === item.id);

    if (itemExists === -1) {
      const newCartItems = [...carts, item];
      await AsyncStorage.setItem('carts', JSON.stringify(newCartItems));
      setCarts(newCartItems);
      totalSum(newCartItems);
    }
  };

  const deleteItemFromCart = async item => {
    const newCarts = carts.filter(cart => cart.id !== item.id);

    await AsyncStorage.setItem('carts', JSON.stringify(newCarts));
    setCarts(newCarts);
    totalSum(newCarts);
  };

  const value = {
    carts,
    addToCart,
    totalPrice,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
