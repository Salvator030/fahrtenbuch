function checkDistanceInput(value) {

  let newString = value.toString().trim().replace(",", ".");
  

  if (newString.length > 0  && !isNaN(newString)) {
    return true;
  } else {
    return false;
  }
}

export { checkDistanceInput };
