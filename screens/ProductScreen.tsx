import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CategoryTab from '../components/CategoryTab';
import SizeOption from '../components/SizeOption';
import ProductImage from '../components/ProductImage';
import ProductCard from '../components/ProductCard';
import { COLORS } from '../constants/colors';
import { DOSAGE, PRICES } from '../constants/Products';

const SIZES = [30, 60, 90];

type Category = 'relax' | 'sleep';

const CATEGORY_LABELS: Record<Category, string> = {
  relax: 'Relax',
  sleep: 'Sleep',
};

export default function ProductScreen() {
  const insets = useSafeAreaInsets();

  const [category, setCategory] = useState<Category>('relax');
  const [selectedSize, setSelectedSize] = useState(30);
  const [quantity, setQuantity] = useState(2);
  const [cartCount, setCartCount] = useState(3);

  const title = `${CATEGORY_LABELS[category]} ${selectedSize} Dissolvable Wafers`;

  return (
    <View style={styles.container}>
      <View style={[styles.top, { paddingTop: insets.top + 10 }]}>
        <Header cartCount={cartCount} />

        <View style={styles.selectors}>
          <View style={styles.tabs}>
            <CategoryTab
              label="Relax"
              icon="spa-outline"
              selected={category === 'relax'}
              onPress={() => setCategory('relax')}
            />
            <CategoryTab
              label="Sleep"
              icon="moon-waning-crescent"
              selected={category === 'sleep'}
              onPress={() => setCategory('sleep')}
            />
          </View>

          <View style={styles.sizes}>
            {SIZES.map((size) => (
              <SizeOption
                key={size}
                value={size}
                selected={selectedSize === size}
                onPress={() => setSelectedSize(size)}
              />
            ))}
          </View>
        </View>

        <View style={styles.imageArea}>
          <ProductImage
            source={require('../assets/xefag-relax.png')}
            widthRatio={0.7}
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    marginTop: 14,
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