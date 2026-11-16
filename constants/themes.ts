import { ImageSourcePropType } from 'react-native';

export type Category = 'relax' | 'sleep';

export type Theme = {
  background: string;
  backgroundDark: string;
  inactive: string;
  buttonBackground: string;
  buttonPressed: string;
  buttonText: string;
  image: ImageSourcePropType;
};

export const THEMES: Record<Category, Theme> = {
  relax: {
    background: '#F9B91A',
    backgroundDark: '#E8A515',
    inactive: '#C9962A',
    buttonBackground: '#F9B91A',
    buttonPressed: '#E8A515',
    buttonText: '#111111',
    image: require('../assets/xefag-relax.png'),
  },
  sleep: {
    background: '#9A0B30',
    backgroundDark: '#7E0725',
    inactive: '#B4506A',
    buttonBackground: '#9A0B30',
    buttonPressed: '#7E0725',
    buttonText: '#FFFFFF',
    image: require('../assets/Xefag-sleep.png'),
  },
};