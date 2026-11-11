import React from 'react';
import { Pressable, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

type IconButtonProps = {
  icon: keyof typeof Feather.glyphMap;
  onPress?: () => void;
  size?: number;
  iconSize?: number;
  backgroundColor?: string;
  pressedColor?: string;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
};

export default function IconButton({
  icon,
  onPress,
  size = 48,
  iconSize = 22,
  backgroundColor = COLORS.white,
  pressedColor = '#E6E6E6',
  iconColor = COLORS.black,
  style,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: pressed ? pressedColor : backgroundColor,
        },
        style,
      ]}
    >
      <Feather name={icon} size={iconSize} color={iconColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});