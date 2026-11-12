import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

type CategoryTabProps = {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  selected: boolean;
  onPress: () => void;
};

export default function CategoryTab({
  label,
  icon,
  selected,
  onPress,
}: CategoryTabProps) {
  const color = selected ? COLORS.black : COLORS.inactive;

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
    fontWeight: '500',
  },
});