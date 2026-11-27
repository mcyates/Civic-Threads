let shopifyStore = document.querySelector("shopify-store");
// console.log(shopifyStore.children[0]);

let shopContext = document.createElement("shopify-context");
shopContext.setAttribute("type", "product")
shopContext.setAttribute("handle", window.location.search.substring(1))

shopContext.innerHTML = `
<template>
                <section class="itemListing">
                    <shopify-media width="200" height="300" query="product.featuredImage"></shopify-media>
                    <div class="productDetails">
                    <h2>
                        <shopify-data query="product.title"></shopify-data>
                    </h2>
                    <p>
                        <shopify-data query="product.description"></shopify-data>
                    </p>
                    <h3>
                        <shopify-money query="product.selectedOrFirstAvailableVariant.price" format="money_with_currency">
                        </shopify-money>
                    </h3>
                      <button class="greyButton"
                            onclick="getElementById('cart').addLine(event).showModal();">
                            Add to cart -                         <shopify-money query="product.selectedOrFirstAvailableVariant.price" format="money_with_currency">
                        </shopify-money>
                        </button>
                    <p>
                    <shopify-variant-selector></shopify-variant-selector>
                    </p>
                    <p>
                    <shopify-data query="product.vendor"></shopify-data>
                    </p>

                    </div>
                </section>
</template>
`;
shopifyStore.appendChild(shopContext);


