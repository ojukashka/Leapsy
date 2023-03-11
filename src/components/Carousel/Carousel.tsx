import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {IProducts} from '../../types/models';
import Product from '../Product';

interface ICarousel {
  products: IProducts;
}

// Rendering the products in an image carousel

const Carousel = ({products}: ICarousel) => {
  return (
    <View>
      <Text style={styles.text}>Your favourite</Text>
      <FlatList
        data={products}
        renderItem={({item}) => <Product product={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 500,
    marginVertical: 21,
  },
});

export default Carousel;
