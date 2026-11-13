import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

type CategoryTabProps = {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  selected: boolean;
  onPress: () => void;
  inactiveColor?: string;
};

export default function CategoryTab({
  label,
  icon,
  selected,
  onPress,
  inactiveColor = COLORS.inactive,
}: CategoryTabProps) {
  const color = selected ? COLORS.black : inactiveColor;

  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
    >
      <MaterialCommunityIcons name={icon} size={22} color={color} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pressed: {
    opacity: 0.6,
  },
label: {
  fontSize: 16,
  fontFamily: FONTS.medium,
},
});