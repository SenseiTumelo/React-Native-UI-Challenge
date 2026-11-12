import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

type PrimaryButtonProps = {
  title: string;
  onPress?: () => void;
  icon?: keyof typeof Feather.glyphMap;
  backgroundColor?: string;
  pressedColor?: string;
  textColor?: string;
};

export default function PrimaryButton({
  title,
  onPress,
  icon,
  backgroundColor = COLORS.buttonYellow,
  pressedColor = COLORS.backgroundDark,
  textColor = COLORS.black,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? pressedColor : backgroundColor },
      ]}
    >
      {icon && <Feather name={icon} size={20} color={textColor} />}
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
});