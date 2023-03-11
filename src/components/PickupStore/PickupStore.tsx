import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';

const PickupStore = () => {
  return (
    <Pressable style={styles.storeContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Pick-up store</Text>
        <Text style={styles.text2}>Barkley village * 0.5 miles</Text>
      </View>
      <AntDesign name="right" size={20} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  storeContainer: {
    width: '100%',
    height: 60,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textContainer: {
    marginLeft: 15,
  },

  text1: {
    color: colors.white,
    fontSize: 10,
  },
  text2: {
    color: colors.white,
    fontSize: 14,
  },
  icon: {
    color: colors.white,
    marginRight: 15,
  },
});

export default PickupStore;
