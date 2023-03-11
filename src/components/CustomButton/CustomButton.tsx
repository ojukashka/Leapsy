import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import colors from '../../theme/colors';

// type Props = {
//   onPress(): 'void';
//   style: {};
//   title: string;
// };

interface ICustomButton {
  onPress(): void;
  style: object;
  title: string;
}

// Reusable Button Component

const CustomButton = (props: ICustomButton) => {
  const {onPress, style, title = 'Login'} = props;
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.primary,
    width: 343,
    height: 48,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default CustomButton;
