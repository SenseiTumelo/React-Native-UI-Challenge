import React, { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CategoryTab from '../components/CategoryTab';
import SizeOption from '../components/SizeOption';
import ProductImage from '../components/ProductImage';
import ProductCard from '../components/ProductCard';
import BackgroundDecor from '../components/BackgroundDecor';
import { DOSAGE, PRICES } from '../constants/Products';
import { THEMES, Category } from '../constants/themes';

const SIZES = [30, 60, 90];

const CATEGORY_LABELS: Record<Category, string> = {
  relax: 'Relax',
  sleep: 'Sleep',
};

export default function ProductScreen() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const circleSize = Math.min(52, width * 0.13);

  const [category, setCategory] = useState<Category>('relax');
  const [selectedSize, setSelectedSize] = useState(30);
  const [quantity, setQuantity] = useState(2);
  const [cartCount, setCartCount] = useState(3);

  const theme = THEMES[category];
  const title = `${CATEGORY_LABELS[category]} ${selectedSize} Dissolvable Wafers`;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <BackgroundDecor color={theme.backgroundDark} />

      <View style={[styles.top, { paddingTop: insets.top + 10 }]}>
        <Header cartCount={cartCount} profileColor={theme.backgroundDark} />

        <View style={styles.selectors}>
          <View style={[styles.tabs, { marginTop: (circleSize - 24) / 2 }]}>
            <CategoryTab
              label="Relax"
              icon="spa-outline"
              selected={category === 'relax'}
              inactiveColor={theme.inactive}
              onPress={() => setCategory('relax')}
            />
            <CategoryTab
              label="Sleep"
              icon="moon-waning-crescent"
              selected={category === 'sleep'}
              inactiveColor={theme.inactive}
              onPress={() => setCategory('sleep')}
            />
          </View>

          <View style={styles.sizes}>
            {SIZES.map((size) => (
              <SizeOption
                key={size}
                value={size}
                size={circleSize}
                selected={selectedSize === size}
                idleBackground={theme.backgroundDark}
                idleTextColor={theme.inactive}
                onPress={() => setSelectedSize(size)}
              />
            ))}
          </View>
        </View>

        <View style={styles.imageArea}>
          <ProductImage
            source={theme.image}
            widthRatio={0.7}
            shadowColor={theme.backgroundDark}
          />
        </View>
      </View>

      <ProductCard
        title={title}
        dosage={DOSAGE}
        price={PRICES[selectedSize]}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onBuyPress={() => setCartCount(cartCount + quantity)}
        bottomInset={insets.bottom}
        buttonColor={theme.buttonBackground}
        buttonPressedColor={theme.buttonPressed}
        buttonTextColor={theme.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    paddingHorizontal: 20,
  },
  selectors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  tabs: {
    flexDirection: 'row',
    gap: 24,
  },
  sizes: {
    gap: 14,
  },
  imageArea: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -70,
  },
});