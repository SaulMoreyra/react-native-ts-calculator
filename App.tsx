import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculadoraSceen from './src/screens/CalculadoraScreen';
import style from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={style.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraSceen />
    </SafeAreaView>
  );
};

export default App;
