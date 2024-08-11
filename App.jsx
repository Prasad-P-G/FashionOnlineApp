import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartDataScreen from './src/screen/CartDataScreen';
import {
  CartContext,
  CartProvider,
  cartProvider,
} from './src/Context/CartContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="">
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'blue',
          }}>
          {/* initialRouteName="CART" */}
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return <Entypo name="home" size={size} color={color}></Entypo>;
              },
            }}></Tab.Screen>

          <Tab.Screen
            name="REORDER"
            component={Home}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <MaterialIcons
                    name="reorder"
                    size={size}
                    color={color}></MaterialIcons>
                );
              },
            }}></Tab.Screen>

          <Tab.Screen
            name="CART"
            component={CartDataScreen}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                const {carts} = useContext(CartContext);
                console.log(carts.length);
                return (
                  <View style={{position: 'relative'}}>
                    <MaterialCommunityIcons
                      name="cart"
                      size={size}
                      color={color}></MaterialCommunityIcons>
                    <View
                      style={{
                        height: 16,
                        width: 16,
                        borderRadius: 8,
                        backgroundColor: color,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: -12,
                        right: -10,
                      }}>
                      <Text
                        style={{
                          fontSize: 8,
                          color: 'white',
                          fontWeight: 500,
                        }}>
                        {carts?.length}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}></Tab.Screen>
          <Tab.Screen
            name="ACCOUNT"
            component={Home}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <FontAwesome6
                    name="user"
                    size={size}
                    color={color}></FontAwesome6>
                );
              },
            }}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
