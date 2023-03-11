import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const BannerImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.bannerText}>Here's to more sunny days ahead</Text>
        </View>
        <ImageBackground
          source={require('../../assets/images/banner.png')}
          style={styles.bannerImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 21,
  },
  bannerContainer: {
    width: 343,
    height: 204,
    backgroundColor: colors.tertiary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 4,
  },
  textContainer: {
    width: 172,
    height: 96,
  },
  bannerText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 32,
    textTransform: 'uppercase',
  },
  bannerImage: {
    height: 155,
    width: 164,
  },

  image: {
    width: 150,
    height: 300,
  },
});

export default BannerImage;
