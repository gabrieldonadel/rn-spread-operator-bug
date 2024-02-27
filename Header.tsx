import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const isFabricEnabled = (global as any).nativeFabricUIManager != null;
  const isBridgelessEnabled = Boolean((global as any).RN$Bridgeless);

  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require('react-native/Libraries/NewAppScreen/components/logo.png')}
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}>
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Welcome to
        {'\n'}
        React Native Bugs
      </Text>
      <View style={{position: 'absolute', bottom: 5, left: 10}}>
        <Text style={styles.highlight}>
          isFabricEnabled {String(isFabricEnabled)}
        </Text>
        <Text style={styles.highlight}>
          isBridgelessEnabled {String(isBridgelessEnabled)}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: 250,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 38,
    fontWeight: '700',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});
