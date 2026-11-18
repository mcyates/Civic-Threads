"use strict"
console.log(window.location.search);
console.log(window.location.pathname);
let prodList = document.querySelectorAll(".product[data-id");

setTimeout(() => {
    prodList = document.querySelectorAll(".product[data-id]");
    setupProductLinks(prodList)
}, 500);

function setupProductLinks(prodList) {
    // console.log(prodList);
    prodList.forEach(product => {
        console.log(`${product.children[4].href}${product.dataset.id}`)
        product.children[4].href = `${product.children[4].href}${product.dataset.id}`;
    });
}