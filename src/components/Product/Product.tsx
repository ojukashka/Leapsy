import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {IProduct} from '../../types/models';

// One product from the array of object of products

const Product = ({product}: {product: IProduct}) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{uri: product.img}} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    margin: 14,
  },
  productImage: {
    width: 159,
    height: 183,
  },
  productName: {
    fontSize: 16,
    // lineHeight: 20,
    color: colors.black,
    marginTop: 12,
  },
  productPrice: {
    fontSize: 13,
    margin: 4,
  },
});

export default Product;
