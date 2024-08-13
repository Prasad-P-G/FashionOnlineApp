import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Category from '../components/Category';
import ProductCart from '../components/ProductCart';
import data from '../data/data.json';
import {SafeAreaView} from 'react-native-safe-area-context';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens'];

const HomeScreen = () => {
  //json Data
  const [products, setProducts] = useState(data.products);

  const [selectedCategoty, setSelectedCategoty] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = item => {
    const newProduct = products.map(prod => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: true,
        };
      }
      return prod;
    });
    setProducts(newProduct);
  };

  return (
    <LinearGradient
      colors={['#3b5998', '#2CBBD9', '#3b5998']}
      style={styles.container}>
      {/* Header Component */}
      <View>
        <Header></Header>
      </View>

      {/* <Text style={styles.matchText}>CHOOSE FOOD</Text> */}

      {/* Input Container */}
      {/* <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <EvilIcons name={'search'} size={26} color="#20232A" />
        </View>

        <TextInput placeholder="Search" style={styles.textInput}></TextInput>
      </View> */}

      {/* Categories */}
      {/* <FlatList
        data={categories}
        renderItem={({item}) => (
          <Category
            item={item}
            selectedCategoty={selectedCategoty}
            setSelectedCategoty={setSelectedCategoty}></Category>
        )}
        keyExtractor={item => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}></FlatList> */}

      {/* Product cart */}
      <SafeAreaView>
        <FlatList
          numColumns={2}
          ListHeaderComponent={
            <>
              <Text style={styles.matchText}>Match Your Style</Text>

              {/* Input Container */}
              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <EvilIcons name={'search'} size={26} color="#20232A" />
                </View>

                <TextInput
                  placeholder="Search"
                  style={styles.textInput}></TextInput>
              </View>
              {/* Categories */}
              <FlatList
                data={categories}
                renderItem={({item}) => (
                  <Category
                    item={item}
                    selectedCategoty={selectedCategoty}
                    setSelectedCategoty={setSelectedCategoty}></Category>
                )}
                keyExtractor={item => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}></FlatList>
            </>
          }
          data={products}
          renderItem={({item}) => (
            <ProductCart item={item} handleLiked={handleLiked}></ProductCart>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 200,
          }}></FlatList>
      </SafeAreaView>

      {/* <View
        style={{
          flexDirection: 'row',
        }}>
        <ProductCart></ProductCart>
        <ProductCart></ProductCart>
      </View> */}
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#20232A',
    marginTop: 20,
  },
  textInput: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#2BB8D7',
    marginTop: 10,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
});
