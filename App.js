import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import BookScreen from './screens/BookScreen';

const App = () => {
  const [loadingFonts, setLoadingFonts] = useState(true);

  const fontsLoader = async () => {
    try {
      await Font.loadAsync({
        'gilroy-bold': require('./assets/fonts/Gilroy-Bold.ttf'),
        'sectra': require('./assets/fonts/GT-Sectra-Fine-Regular.ttf'),
        'montserra-black': require('./assets/fonts/Montserrat-Black.ttf'),
        'montserra-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'montserra-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf')
      });
      setLoadingFonts(false);
    } catch(e) {
      console.log('error', e);
    }
  }

  useEffect(() => {
    fontsLoader();
  }, []);

  if (loadingFonts) return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>);

  return (
    <View style={styles.container}>
      <BookScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: "center",
    justifyContent: "center",
	}
});
