import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

type LogoProps = {
  size?: number;
  color?: string;
};

const DOT_COUNT = 10;

export default function Logo({ size = 36, color = COLORS.black }: LogoProps) {
  const dotSize = size * 0.16;
  const radius = (size - dotSize) / 2;

  return (
    <View style={styles.row}>
      <View style={{ width: size, height: size }}>
        {Array.from({ length: DOT_COUNT }).map((_, index) => {
          const angle = (index / DOT_COUNT) * 2 * Math.PI;
          const left = size / 2 + radius * Math.cos(angle) - dotSize / 2;
          const top = size / 2 + radius * Math.sin(angle) - dotSize / 2;

          return (
            <View
              key={index}
              style={{
                position: 'absolute',
                left,
                top,
                width: dotSize,
                height: dotSize,
                borderRadius: dotSize / 2,
                backgroundColor: color,
              }}
            />
          );
        })}
      </View>
      <Text style={[styles.text, { fontSize: size * 0.75, color }]}>xefag</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontWeight: '700',
    letterSpacing: 1,
  },
});