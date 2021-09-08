console.log(0 == null); // false Не знаю как объяснить, ниже привел пример, что при сложении числа с null, он ведет себя как 0
console.log(0 === null); // false Это очевидно из проверки типов, что так как типы разные то и не равны эти выражения.
console.log(typeof(0)); // number
console.log(typeof(null)); // object

5 + null    // returns 5         because null is converted to 0
5 + 0       // 0
