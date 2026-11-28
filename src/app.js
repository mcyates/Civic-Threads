"use strict"

let prodList = document.querySelectorAll(".product[data-id");

setTimeout(() => {
    // wait a second for shopify to initialize since it doesn't seem possible to use async await with it like this
    prodList = document.querySelectorAll(".product[data-id]");
    setupProductLinks(prodList)

}, 1200);

function setupProductLinks(prodList) {
    //building the dynamic link to each individual product page
    prodList.forEach(product => {
        let href = product.querySelector("a").href;
        product.querySelector("a").href = `${href}${product.dataset.id}`;
    });
}

// handle sorting
let sort = document.querySelector("select");
if (sort != null) {
    let sortVal = sort.value;
    let listContext = document.querySelector("shopify-list-context");
    let isDesc = false;

    sort.addEventListener('change', (event) => {
        listContext.setAttribute("sort-key", event.target.value);
    });
}