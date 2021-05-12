import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../theme/appTheme';

interface ButtonCalcProps {
  text: string;
  color?: 'orange' | 'darkGray' | 'lightGray';
  action: (numeroText: string) => void;
}

const ButtonCalc = ({action, text, color = 'darkGray'}: ButtonCalcProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.boton,
          ...styles[color],
          width: text === '0' ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonText,
            color: color === 'lightGray' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
