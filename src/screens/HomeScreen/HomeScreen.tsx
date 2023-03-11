import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import PickupStore from '../../components/PickupStore';
import BannerImage from '../../components/BannerImage';
import Carousel from '../../components/Carousel';
import products from '../../assets/data/products.json';

// HomeScreen consisting of reusable components

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <PickupStore />
      <BannerImage />
      <Carousel products={products} />
    </View>
  );
};

export default HomeScreen;
