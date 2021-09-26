// making an empty cart
let products = [];

// products.push({prodName: "HUAWEI P30", prodPrice: 11990});
// products.push({prodName: "SONY WH-CH510", prodPrice: 2690});

function countCartPrice(products_array) {
    let cart_value = 0;
    for (let item of products_array) {
        cart_value += item.prodPrice;
    }
    return cart_value;
}

// creating appearance of the cart on a page
let outputLine = document.getElementById("in-cart");
if (products.length === 0) {
    outputLine.textContent = "Корзина пуста.";
} else {
    let n = products.length;
    let m = countCartPrice(products);
    outputLine.innerHTML = `В корзине: <b>${n}</b> товар(a/ов) на сумму <b>${m}</b> рублей.`
}

// creating catalog
let catalog = [];

catalog.push({prodName: "HUAWEI P30", prodPrice: 11990});
catalog.push({prodName: "SONY WH-CH510", prodPrice: 2690});
catalog.push({prodName: "HONOR MagicBook X15", prodPrice: 54999});
catalog.push({prodName: "HUAWEI Watch GT2", prodPrice: 17999});
catalog.push({prodName: "ZANUSSI ZCH/S-1000", prodPrice: 3999});
catalog.push({prodName: "TEFAL Smart Force", prodPrice: 10999});
catalog.push({prodName: "BRAUN 12750007", prodPrice: 6990});
catalog.push({prodName: "BRAUN BT3242", prodPrice: 3499});
catalog.push({prodName: "PHILIPS BRE715/00", prodPrice: 5299});

var catalogElements = document.getElementById("catalog");

var catalogHeading = document.createElement("h1");
catalogHeading.textContent = "КАТАЛОГ:";
catalogHeading.style.marginTop = "50px";
catalogHeading.style.marginLeft = "25px";
catalogHeading.style.textDecoration = "underline";
catalogHeading.style.color = "darkgreen";
catalogElements.appendChild(catalogHeading);

for (let element of catalog) {
    var hit = document.createElement("p");
    hit.innerHTML = `Только сегодня <mark>${element.prodName}</mark> по цене <b>${element.prodPrice}</b> <span>&#8381;</span>`;
    hit.style.marginLeft = "50px";
    hit.style.fontSize = "30px";
    attachBuyButton(hit);
    catalogElements.appendChild(hit);
}

// func for adding "Купить" button to every para in the catalog
function attachBuyButton(p) {
    let buy = document.createElement('button');
    buy.className = 'buy';
    buy.textContent = 'Купить';
    buy.style.color = "white";
    buy.style.fontSize = '1em';
    buy.style.backgroundColor = '#34baec';
    buy.style.cursor = 'pointer';
    buy.style.float = 'right';
    p.appendChild(buy);
}

// clicking on "Купить" button
catalogElements.addEventListener('click', (event)=>{
    if(event.target.tagName === "BUTTON"){
        const button = event.target;
        const p = button.parentNode;
        const pPrice = /([\d]+) ₽/.exec(p.textContent);
        const pName = /([A-Z]+) ([/-\w\s\d]+) по/.exec(p.textContent);
        products.push({
            prodName: pName[0].slice(0, -3),
            prodPrice: Number(pPrice[0].slice(0, -2))
        });
        // changing contents of the cart
        let updatedN = products.length;
        let updatedM = countCartPrice(products);
        outputLine.innerHTML = `В корзине: <b>${updatedN}</b> товар(a/ов) на сумму <b>${updatedM}</b> рублей.`
    }
})
