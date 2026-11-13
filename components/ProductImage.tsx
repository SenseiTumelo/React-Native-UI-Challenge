import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { COLORS } from '../constants/colors';

type ProductImageProps = {
  source: ImageSourcePropType;
  widthRatio?: number;
  maxWidth?: number;
  maxHeightRatio?: number;
  aspectRatio?: number;
  shadowColor?: string;
};

export default function ProductImage({
  source,
  widthRatio = 0.55,
  maxWidth = 300,
  maxHeightRatio = 0.38,
  aspectRatio = 0.85,
  shadowColor = COLORS.backgroundDark,
}: ProductImageProps) {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  let imageWidth = Math.min(screenWidth * widthRatio, maxWidth);
  let imageHeight = imageWidth / aspectRatio;

  const maxHeight = screenHeight * maxHeightRatio;
  if (imageHeight > maxHeight) {
    imageHeight = maxHeight;
    imageWidth = imageHeight * aspectRatio;
  }

  return (
    <View style={styles.container}>
      <View style={{ width: imageWidth, height: imageHeight }}>
        <View
          style={[
            styles.shadow,
            {
              width: imageWidth * 0.6,
              height: imageWidth * 0.09,
              left: imageWidth * 0.2,
              borderRadius: imageWidth,
              backgroundColor: shadowColor,
            },
          ]}
        />
        <Image source={source} style={styles.image} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
    opacity: 0.7,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});