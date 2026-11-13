import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import QuantitySelector from './QuantitySelector';
import PrimaryButton from './PrimaryButton';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

type ProductCardProps = {
  title: string;
  dosage: string;
  price: number;
  quantity: number;
  onQuantityChange: (newValue: number) => void;
  onBuyPress?: () => void;
  bottomInset?: number;
  buttonColor?: string;
buttonPressedColor?: string;
buttonTextColor?: string;
};

export default function ProductCard({
  title,
  dosage,
  price,
  quantity,
  onQuantityChange,
  onBuyPress,
  buttonColor,
buttonPressedColor,
buttonTextColor,
  bottomInset = 0,
}: ProductCardProps) {
  const { width } = useWindowDimensions();
  const titleSize = Math.min(34, width * 0.085);
  const priceSize = Math.min(36, width * 0.09);

  return (
    <View style={[styles.card, { paddingBottom: 24 + bottomInset }]}>
      <Text
        style={[styles.title, { fontSize: titleSize, lineHeight: titleSize * 1.2 }]}
      >
        {title}
      </Text>
      <Text style={styles.dosage}>{dosage}</Text>

      <View style={styles.row}>
        <Text style={[styles.price, { fontSize: priceSize }]}>
          ${price.toFixed(2)}
        </Text>
        <QuantitySelector value={quantity} onChange={onQuantityChange} />
      </View>

<PrimaryButton
  title="Buy Now"
  icon="shopping-cart"
  onPress={onBuyPress}
  backgroundColor={buttonColor}
  pressedColor={buttonPressedColor}
  textColor={buttonTextColor}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 24,
    paddingTop: 28,
  },
 title: {
  fontFamily: FONTS.bold,
  color: COLORS.black,
},
dosage: {
  marginTop: 8,
  fontSize: 16,
  fontFamily: FONTS.regular,
  color: COLORS.grey,
},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 24,
  },
price: {
  fontFamily: FONTS.bold,
  color: COLORS.black,
},
});