"use strict"
console.log(window.location.search);
console.log(window.location.pathname);
let prodList = document.querySelectorAll(".product[data-id");

setTimeout(() => {
    // wait a second for shopify to initialize since it doesn't seem possible to use async await with it like this
    prodList = document.querySelectorAll(".product[data-id]");
    setupProductLinks(prodList)

}, 1000);

function setupProductLinks(prodList) {
    //building the dynamic link to each individual product page
    prodList.forEach(product => {
        let href = product.querySelector("a").href;
        product.querySelector("a").href = `${href}${product.dataset.id}`;
    });
}