let shopifyStore = document.querySelector("shopify-store");
// console.log(shopifyStore.children[0]);

let shopContext = document.createElement("shopify-context");
shopContext.setAttribute("type", "product")
shopContext.setAttribute("handle", window.location.search.substring(1))

shopContext.innerHTML = `
<template>
                <article>
                    <shopify-media width="200" height="300" query="product.featuredImage"></shopify-media>
                    <h2>
                        <shopify-data query="product.title"></shopify-data>
                    </h2>
                    <h3>
                        <shopify-money query="product.selectedOrFirstAvailableVariant.price" format="money_with_currency">
                        </shopify-money>
                    </h3>
                      <button
                            onclick="getElementById('cart').addLine(event).showModal();">
                            Add to cart
                        </button>
                    <p>
                    <shopify-variant-selector></shopify-variant-selector>
                    </p>
                    <p>
                    <shopify-data query="product.vendor"></shopify-data>
                    </p>
                    <p>
                    <shopify-data query="product.description"></shopify-data>
                    </p>

                </article>
                </template>
`;
shopifyStore.appendChild(shopContext);


