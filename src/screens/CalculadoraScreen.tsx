import React, {useState, useCallback, useRef} from 'react';
import {View, Text} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import useCalculator from '../hooks/useCalculator';
import styles from '../theme/appTheme';

const CalculadoraSceen = () => {
  const {
    oldNumber,
    number,
    clearInput,
    buildNumber,
    deleteLastNumber,
    positiveNegative,
    buttonDivide,
    buttonMultiply,
    buttonSubstract,
    buttonAdd,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      {oldNumber !== '0' && (
        <Text style={styles.resultadoSmall}>{oldNumber}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.fila}>
        <ButtonCalc color="lightGray" text="C" action={clearInput} />
        <ButtonCalc color="lightGray" text="+/-" action={positiveNegative} />
        <ButtonCalc color="lightGray" text="del" action={deleteLastNumber} />
        <ButtonCalc color="orange" text="÷" action={buttonDivide} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc color="orange" text="x" action={buttonMultiply} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc color="orange" text="-" action={buttonSubstract} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc color="orange" text="+" action={buttonAdd} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="0" action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc color="orange" text="=" action={calculate} />
      </View>
    </View>
  );
};

export default CalculadoraSceen;
