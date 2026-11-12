import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductScreen from './screens/ProductScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ProductScreen />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}