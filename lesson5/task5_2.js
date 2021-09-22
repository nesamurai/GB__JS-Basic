// This chunk of code is from previous lesson
let products = [];

products.push({prodName: "HUAWEI P30", prodPrice: 11990});
products.push({prodName: "SONY WH-CH510", prodPrice: 2690});

function countCartPrice(products_array) {
    let cart_value = 0;
    for (let item of products_array) {
        cart_value += item.prodPrice;
    }
    return cart_value;
}

// This is new code for lesson 5
let outputLine = document.querySelector("div");
if (products.length === 0) {
    outputLine.textContent = "Корзина пуста.";
} else {
    let n = products.length;
    let m = countCartPrice(products);
    outputLine.innerHTML = `В корзине: <b>${n}</b> товара(ов) на сумму <b>${m}</b> рублей.`
}
