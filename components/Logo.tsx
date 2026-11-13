import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import LogoSvg from '../assets/xefag-logo.svg';

type LogoProps = {
  height?: number;
};

const LOGO_ASPECT_RATIO = 3.4;

export default function Logo({ height = 36 }: LogoProps) {
  const { width: screenWidth } = useWindowDimensions();
  const logoHeight = Math.min(height, screenWidth * 0.09);

  return (
    <View>
      <LogoSvg height={logoHeight} width={logoHeight * LOGO_ASPECT_RATIO} />
    </View>
  );
}