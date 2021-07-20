import { useState } from 'react';

const useInput = (validateValue, setIsFormTouched) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = typeof validateValue !== 'function' ? true : validateValue(enteredValue);
  const hasError = !isValueValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
    if (setIsFormTouched) {
      setIsFormTouched(true);
    }
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
    if (setIsFormTouched) {
      setIsFormTouched(true);
    }
  };

  return {
    value: enteredValue,
    hasError,
    isTouched,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
