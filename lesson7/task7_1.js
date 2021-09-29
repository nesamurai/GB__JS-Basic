// создание списка товаров в корзине
let products = [];

// наполнение корзины
products.push({prodName: "HUAWEI P30", prodPrice: 11990});
products.push({prodName: "SONY WH-CH510", prodPrice: 2690});
products.push({prodName: "HONOR MagicBook X15", prodPrice: 54999});

// функция подсчета суммы корзины
function countCartPrice(products_array) {
    let cart_value = 0;
    for (let item of products_array) {
        cart_value += item.prodPrice;
    }
    return cart_value;
}

// вывод информации по корзине на странице
let outputLine = document.querySelector(".cart-preview");
if (products.length === 0) {
    outputLine.textContent = "Корзина пуста.";
} else {
    let n = products.length;
    let m = countCartPrice(products);
    outputLine.innerHTML = `В корзине: <b>${n}</b> товар(а/ов) на сумму <b>${m}</b> рублей.`;
}

// отображение состава корзины
var cartElements = document.querySelector("ul");

for (let element of products) {
    let li = document.createElement("li");
    li.innerHTML = `${element.prodName} стоимостью&ensp;<b>${element.prodPrice}</b>&ensp;<span>&#8381;</span>`;
    cartElements.appendChild(li);
}

const listItems = cartElements.children;

// определение кнопок на странице
const btnToggleFirst = document.getElementsByClassName("btn-toggle")[0];
const btnToggleSecond = document.getElementsByClassName("btn-toggle")[1];
const btnToggleThird = document.getElementsByClassName("btn-toggle")[2];

// опредение блоков для состава корзины, адреса и комментария
const cartContent = document.querySelector(".cart-contents");
const addressBlock = document.querySelector(".delivery-address");
addressBlock.innerHTML = "<ins>Адрес доставки:</ins><br>127000<br>г. Москва<br>ул. Академика Королева<br>д. 12";
addressBlock.style.display = "none";
const commentBlock = document.querySelector(".comment");
commentBlock.innerHTML = "<ins>Комментарий:</ins><br><small>СОВЕРШЕННО СЕКРЕТНО! При опасности сжечь!</small>";
commentBlock.style.display = "none";


btnToggleFirst.addEventListener("click", () => {
    cartContent.style.display = "none";
    addressBlock.removeAttribute("style");
});

btnToggleSecond.addEventListener("click", () => {
    addressBlock.style.display = "none";
    commentBlock.removeAttribute("style");
});

btnToggleThird.addEventListener("click", () => {
    commentBlock.style.display = "none";
    cartContent.removeAttribute("style");
});

// добавляем возможность удалить товар из корзины
function attachRemoveButton(li) {
	let remove = document.createElement("button");
	remove.className = "remove";
	remove.textContent = "Удалить";
	li.appendChild(remove);
}

// добавление кнопки удаления для каждого товара в корзине
for (let i = 0; i < listItems.length; i += 1) {
	attachRemoveButton(listItems[i]);
}

cartElements.addEventListener("click", (event) => {
	if (event.target.tagName == "BUTTON") {
		let button = event.target;
		let li = button.parentNode;
        const liPrice = /\s([\d]+)\s/.exec(li.textContent);
        const liName = /([A-Z]+)\s([/-\w\s\d]+)\s([а-я]+)/.exec(li.textContent);
        for (let idx = 0; idx < products.length; idx += 1) {
            if (products[idx]["prodName"] === liName[0].slice(0, -11)) {
                products = products.slice(0, idx).concat(products.slice(idx+1));
            } else {
                continue;
            }
        }
        for (let p; p < products.length; p++) {
            if (products[p].prodName === liName[0].slice(0, -11)) {
                delete products[p];
            }}
		li.remove();
        // пересчет корзины
        if (products.length === 0) {
            outputLine.textContent = "Корзина пуста.";
        } else {
            let updatedN = products.length;
            let updatedM = countCartPrice(products);
            outputLine.innerHTML = `В корзине: <b>${updatedN}</b> товар(а/ов) на сумму <b>${updatedM}</b> рублей.`;
        }
    }
});
