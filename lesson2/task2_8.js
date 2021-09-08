function power(val, pow) {
    let result = val;
    if (pow === 0) {
        return 1;
    } else if (pow === 1) {
        return result;
    } else {
        result *= power(val, pow - 1);
    }
    return result;
}
