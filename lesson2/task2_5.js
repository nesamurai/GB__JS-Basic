function theSum(p1, p2) {
  return p1 + p2;
}

function theDifference(p1, p2) {
  return p1 - p2;
}

function theProduct(p1, p2) {
  return p1 * p2;
}

function theDivision(p1, p2) {
  if (p2 !== 0) {
      return p1 / p2;
  } else {
      return alert("Division by zero!");
  }
}
