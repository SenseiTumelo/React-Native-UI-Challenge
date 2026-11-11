import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import IconButton from './components/IconButton';
import { COLORS } from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <IconButton icon="arrow-left" onPress={() => console.log('back')} />
      <IconButton
        icon="user"
        backgroundColor={COLORS.backgroundDark}
        pressedColor="#CF9310"
        iconColor={COLORS.white}
      />
      <IconButton
        icon="plus"
        size={40}
        iconSize={18}
        backgroundColor={COLORS.black}
        pressedColor="#333333"
        iconColor={COLORS.white}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});