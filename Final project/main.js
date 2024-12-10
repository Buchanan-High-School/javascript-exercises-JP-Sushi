console.log(products)
let filteredProducts = [...products]
console.log(filteredProducts)

// SELECTORS
const productsContainer = document.querySelector(".not-sidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")

searchForm.addEventListener("keyup", () => {
    let searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    filteredProducts = filteredProducts.filter(product => {
        return product.title.includes(searchTerm)
    })
    displayProducts()
})

// Loop and display eatch product
function displayProducts() {
    // A map allows you to access objects easier
    //.map returns an array witch can be put into the DOM
    //.forEach dosen't return ANYTHING, so it all gets discarded.
    productsContainer.innerHTML = filteredProducts.map(product => {
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