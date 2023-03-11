import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
// import {Badge} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/logo/logo.png')}
        style={styles.logo}
      />
      <Feather name="shopping-bag" size={24} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 168,
    height: 25,
    margin: 70,
  },
});

export default Header;
