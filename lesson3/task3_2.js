// 2a
let products = [];

// добавление товара в виде массива [наименование, стоимость] в корзину
products.push(["HUAWEI P30", 11990]);
products.push(["SONY WH-CH510", 2690]);

// 2b
function countCartPrice(products_array) {
    let cart_value = 0;
    for (var i = 0; i < products_array.length; i++) {
        cart_value += products_array[i][1];
    }
    return cart_value;
}

console.log(countCartPrice(products));
