export const checkAlphabetString = (
  value,
  setValueError,
  setValue,
  check,
  i,
) => {
  const v = /^[\w\säüöß.,-]+$/;

  if (value && !v.test(value)) {
    setValueError(value);
    setValue('');

    check[i] = false;
  } else {
    setValueError('');
    check[i] = true;
  }
};
export const checkHnrInput = (hnrValue, setHnrError, setHnrValue, check, i) => {
  const v = /^\d{1,4}[A-Za-z]?$/;

  if (hnrValue && !v.test(hnrValue)) {
    setHnrError(hnrValue);
    setHnrValue('');
    check[i] = false;
  } else {
    setHnrError('');
    check[i] = true;
  }
};
export const checkPlzInput = (plzValue, setPlzError, setPlzValue, check, i) => {
  const v = /^\d{5}$/;

  if (plzValue && !v.test(plzValue)) {
    setPlzError(plzValue);
    setPlzValue('');
    check[i] = false;
  } else {
    setPlzError('');
    check[i] = true;
  }
};
