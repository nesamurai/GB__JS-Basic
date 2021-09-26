function getObjFromNum(number) {
    let numObj = {};
    if (number <= 999) {
        let hs = Math.trunc(number / 100);
        let ts = Math.trunc(number % 100 / 10);
        let ones = number % 100 % 10;
        numObj['сотни'] = hs;
        numObj['десятки'] = ts;
        numObj['единицы'] = ones;
        return numObj;
    } else {
        console.log('Entered number greater than 999.')
        return numObj;
    }
}

let rightNum = getObjFromNum(178);
console.log(rightNum);
let wrongNum = getObjFromNum(1178);
console.log(wrongNum);
