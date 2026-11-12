import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, useWindowDimensions, View } from 'react-native';

type ProductImageProps = {
  source: ImageSourcePropType;
  widthRatio?: number;
  maxWidth?: number;
  aspectRatio?: number;
};

export default function ProductImage({
  source,
  widthRatio = 0.55,
  maxWidth = 300,
  aspectRatio = 0.85,
}: ProductImageProps) {
  const { width: screenWidth } = useWindowDimensions();

  const imageWidth = Math.min(screenWidth * widthRatio, maxWidth);
  const imageHeight = imageWidth / aspectRatio;

  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={{ width: imageWidth, height: imageHeight }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});