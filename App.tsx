import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CategoryTab from './components/CategoryTab';
import SizeOption from './components/SizeOption';
import ProductImage from './components/ProductImage';
import { COLORS } from './constants/colors';

const SIZES = [30, 60, 90];

export default function App() {
  const [category, setCategory] = useState<'relax' | 'sleep'>('relax');
  const [selectedSize, setSelectedSize] = useState(30);

  return (
    <View style={styles.container}>
      <Header cartCount={3} />

      <View style={styles.selectors}>
        <View style={styles.tabs}>
          <CategoryTab
            label="Relax"
            icon="flower-lotus"
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
        <ProductImage source={require('./assets/xefag-relax.png')} />
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  selectors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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