import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Category = ({item, selectedCategoty, setSelectedCategoty}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategoty(item)}>
      <Text
        style={[
          styles.CategoryText,
          selectedCategoty === item && {
            backgroundColor: '#103F91',
            color: 'white',
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  CategoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    // backgroundColor: '#B85248',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
