function checkDistanceInput(value) {
  console.log(value.toString);
  let newString = value.toString().trim().replace(",", ".");
  console.log(newString.length);
  console.log(!isNaN(!newString.length > 0));

  if (newString.length > 0  && !isNaN(newString)) {
    return true;
  } else {
    return false;
  }
}

export { checkDistanceInput };
