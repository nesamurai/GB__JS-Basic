let products = [];

// В предыдущем задании каждый продукт был реализован в виде массива [наименование, стоимость].
// Заменю массив на объект в формате {prodName: наименование, prodPrice: стоимость}.

// добавление товара в виде объекта {name: значение-наименование, price: значение-стоимость} в корзину
products.push({prodName: "HUAWEI P30", prodPrice: 11990});
products.push({prodName: "SONY WH-CH510", prodPrice: 2690});

// Измененный функционал подсчета корзины
function countCartPrice(products_array) {
    let cart_value = 0;
    for (let item of products_array) {
        cart_value += item.prodPrice;
    }
    return cart_value;
}

console.log(countCartPrice(products));
