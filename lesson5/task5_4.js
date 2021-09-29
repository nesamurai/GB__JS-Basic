let catalog = [];

catalog.push({prodName: "HUAWEI P30", prodPrice: 11990});
catalog.push({prodName: "SONY WH-CH510", prodPrice: 2690});
catalog.push({prodName: "HONOR MagicBook X15", prodPrice: 54999});
catalog.push({prodName: "HUAWEI Watch GT2", prodPrice: 17999});
catalog.push({prodName: "ZANUSSI ZCH/S-1000", prodPrice: 3999});
catalog.push({prodName: "TEFAL Smart Force", prodPrice: 10999});
catalog.push({prodName: "BRAUN 12750007", prodPrice: 6990});

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
    catalogElements.appendChild(hit);
}
