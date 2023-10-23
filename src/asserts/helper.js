function checkDistanceInput(value) {
  let newString = value.toString().trim().replace(",", ".");

  if (newString.length > 0 && !isNaN(newString)) {
    return true;
  } else {
    return false;
  }
}

function sortByAlphAscending(a, b) {
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

function sortDrivenRouteByLogicalOrder(drivenRouteA, drivenRouteB) {
  const drivenRouteA_startName = drivenRouteA[0].name.toUpperCase();
  const drivenRouteA_destinationName = drivenRouteA[1].name.toUpperCase();
  const drivenRouteB_startName = drivenRouteB[0].name.toUpperCase();
  const drivenRouteB_destinationName = drivenRouteB[1].name.toUpperCase();

  if (drivenRouteA_destinationName === drivenRouteB_startName) {
    return -1;
  }
  if (drivenRouteA_startName === drivenRouteB_destinationName) {
    return 1;
  }
  return 0;
}

export { checkDistanceInput, sortByAlphAscending , sortDrivenRouteByLogicalOrder };
