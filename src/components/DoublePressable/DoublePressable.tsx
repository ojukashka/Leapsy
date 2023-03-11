import React from 'react';
import {ReactNode} from 'react';
import {Pressable, StyleSheet} from 'react-native';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
});

export default DoublePressable;
