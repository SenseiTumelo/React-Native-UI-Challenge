import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

type SizeOptionProps = {
  value: number;
  selected: boolean;
  onPress: () => void;
  size?: number;
  idleBackground?: string;
  idleTextColor?: string;
};

export default function SizeOption({
  value,
  selected,
  onPress,
  size = 52,
  idleBackground = COLORS.backgroundDark,
  idleTextColor = COLORS.inactive,
}: SizeOptionProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: selected ? COLORS.black : idleBackground,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            fontSize: size * 0.42,
            color: selected ? COLORS.white : idleTextColor,
          },
        ]}
      >
        {value}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
text: {
  fontFamily: FONTS.semibold,
},
});