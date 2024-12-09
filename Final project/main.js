console.log(products)
let filteredProducts = [...products]

// SELECTORS
const productsContainer = document.querySelector(".not-sidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")

searchForm.addEventListener("keyup", () => {
    console.log("Typing!")
})

// Loop and display eatch product
function displayProducts() {
    // A map allows you to access objects easier
    productsContainer.innerHTML = products.map(product => {
        // Return the HTML for each product
       return `<article class="product">
                    <img src="${product.image}" alt="" />
                    <footer>
                        <p class="product-name">${product.title}</p>
                        <p class="product-price">${product.price}</p>
                    </footer>
                </article>`
    }).join("")
}
// run the function
displayProducts()