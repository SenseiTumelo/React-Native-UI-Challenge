import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from './IconButton';
import CartButton from './CartButton';
import Logo from './Logo';
import { COLORS } from '../constants/colors';

type HeaderProps = {
  cartCount: number;
  onBackPress?: () => void;
  onProfilePress?: () => void;
  onCartPress?: () => void;
};

export default function Header({
  cartCount,
  onBackPress,
  onProfilePress,
  onCartPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <IconButton icon="chevron-left" iconSize={26} onPress={onBackPress} />
        <Logo />
      </View>

      <View style={styles.group}>
        <IconButton
          icon="user"
          backgroundColor={COLORS.backgroundDark}
          pressedColor="#CF9310"
          iconColor={COLORS.white}
          onPress={onProfilePress}
        />
        <CartButton count={cartCount} onPress={onCartPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
});