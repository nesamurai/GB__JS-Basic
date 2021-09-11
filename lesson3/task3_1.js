let simple_nums = [2];
let num = 3;
while (num < 101) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            break;
        } else if (i === num - 1) {
            simple_nums.push(num);
        }
    }
    num++;
}
console.log(simple_nums);
