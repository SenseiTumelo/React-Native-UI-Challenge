import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

type BackgroundDecorProps = {
  color?: string;
};

export default function BackgroundDecor({
  color = COLORS.backgroundDark,
}: BackgroundDecorProps) {
  const { width } = useWindowDimensions();
  const leafSize = width * 0.7;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <MaterialCommunityIcons
        name="leaf"
        size={leafSize}
        color={color}
        style={[
          styles.leaf,
          { left: -leafSize * 0.2, top: '28%', transform: [{ rotate: '-30deg' }] },
        ]}
      />
      <MaterialCommunityIcons
        name="leaf"
        size={leafSize}
        color={color}
        style={[
          styles.leaf,
          { right: -leafSize * 0.25, top: '34%', transform: [{ rotate: '35deg' }] },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  leaf: {
    position: 'absolute',
    opacity: 0.35,
  },
});