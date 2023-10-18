function checkDistanceInput(value) {

  let newString = value.toString().trim().replace(",", ".");
  

  if (newString.length > 0  && !isNaN(newString)) {
    return true;
  } else {
    return false;
  }
}

function sortByAddress(a,b){
  console.log(a)
  console.log(b)
  const nameA = a.toUpperCase(); // ignore upper and lowercase
  const nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

export { checkDistanceInput,sortByAddress };
