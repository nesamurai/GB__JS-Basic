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


function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case '+':
          result = theSum(arg1, arg2);
          break;
        case '-':
          result = theDifference(arg1, arg2);
          break;
        case '*':
          result = theProduct(arg1, arg2);
          break;
        case '/':
          result = theDivision(arg1, arg2);
    }
    return result;
}
