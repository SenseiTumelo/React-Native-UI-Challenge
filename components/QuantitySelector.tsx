import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from './IconButton';
import { COLORS } from '../constants/colors';

type QuantitySelectorProps = {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
};

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  return (
    <View style={styles.container}>
      <IconButton
        icon="minus"
        size={46}
        iconSize={18}
        backgroundColor={COLORS.black}
        pressedColor="#333333"
        iconColor={COLORS.white}
        onPress={() => onChange(Math.max(min, value - 1))}
      />
      <Text style={styles.value}>{value}</Text>
      <IconButton
        icon="plus"
        size={46}
        iconSize={18}
        backgroundColor={COLORS.black}
        pressedColor="#333333"
        iconColor={COLORS.white}
        onPress={() => onChange(Math.min(max, value + 1))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  value: {
    fontSize: 22,
    fontWeight: '500',
    color: COLORS.black,
    minWidth: 24,
    textAlign: 'center',
  },
});