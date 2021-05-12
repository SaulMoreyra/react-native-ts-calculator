import React, {useState, useCallback, useRef} from 'react';

enum Operadores {
  suma,
  resta,
  multiplicar,
  dividir,
}

const useCalculator = () => {
  const [oldNumber, setOldNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const lastOperation = useRef<Operadores>();

  const clearInput = useCallback(() => {
    setNumber('0');
    setOldNumber('0');
  }, []);

  const buildNumber = useCallback(
    (newNumber: string) => {
      console.log(number);
      if (number === 'Error' || number === 'NaN') {
        setNumber(newNumber);
        return;
      }
      if (number.includes('.') && newNumber === '.') return;
      if (number.startsWith('0') || number.startsWith('-0')) {
        if (newNumber === '.') {
          setNumber(number + newNumber);
        } else if (newNumber === '0' && number.includes('.')) {
          setNumber(number + newNumber);
        } else if (newNumber !== '0' && !number.includes('.')) {
          setNumber(newNumber);
        } else if (newNumber === '0' && !number.includes('.')) {
          setNumber(number);
        } else {
          setNumber(number + newNumber);
        }
      } else {
        setNumber(number + newNumber);
      }
    },
    [number],
  );

  const deleteLastNumber = useCallback(() => {
    let isNegative: boolean = number.includes('-');
    if ((isNegative && number.length === 2) || number.length === 1)
      setNumber('0');
    else setNumber(number.slice(0, -1));
  }, [number]);

  const positiveNegative = useCallback(() => {
    if (number.includes('-')) setNumber(number.replace('-', ''));
    else setNumber('-' + number);
  }, [number]);

  const changeLastNumber = useCallback(() => {
    if (number.endsWith('.')) setOldNumber(number.slice(0, -1));
    else if (number === 'Error') setOldNumber('0');
    else setOldNumber(number);
    setNumber('0');
  }, [number]);

  const buttonDivide = useCallback(() => {
    changeLastNumber();
    lastOperation.current = Operadores.dividir;
  }, [changeLastNumber]);

  const buttonMultiply = useCallback(() => {
    changeLastNumber();
    lastOperation.current = Operadores.multiplicar;
  }, [changeLastNumber]);

  const buttonSubstract = useCallback(() => {
    changeLastNumber();
    lastOperation.current = Operadores.resta;
  }, [changeLastNumber]);

  const buttonAdd = useCallback(() => {
    changeLastNumber();
    lastOperation.current = Operadores.suma;
  }, [changeLastNumber]);

  const calculate = useCallback(() => {
    const num1 = Number(number);
    const num2 = Number(oldNumber);

    switch (lastOperation.current) {
      case Operadores.suma:
        setNumber(`${num1 + num2}`);
        break;
      case Operadores.resta:
        setNumber(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        if (num2 === 0) setNumber('Error');
        else setNumber(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setOldNumber('0');
  }, [number, oldNumber, lastOperation]);

  return {
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
  };
};

export default useCalculator;
