document.addEventListener("DOMContentLoaded", () => {
  let params = new URLSearchParams(document.location.search);
  let productCategory = params.get("product_category");

  let mainElement = document.querySelector(
    ".productsContainer__productContainer"
  );
  let categoryContainer = document.querySelector(
    ".productsBackground__categories"
  );
  let productCountContainer = document.querySelector(
    ".showBtnContainer__items"
  );
  let titleManufacturer = document.querySelector(".manufacturers__titles");
  let manufacturer = document.querySelector(".filter__manufacturersContainer");
  let categoryElement = document.querySelector(".categoryPath__second");
  let categoryHeader = document.querySelector(".productsContainer__header");

  // Fetch
  const products = fetch("../../JSON/products.json")
    .then(function(response) {
      return response.json();
    })
    .then(result => {
      if (productCategory) {
        const product = result.products.filter(function(e) {
          return e.category === productCategory;
        });

        // Create each product
        product.forEach(product => {
          mainElement.innerHTML += `
          <a href="../Product/product.html?product_id=${
            product.id
          }" class="product__link">
            <section class="productContainer__product">
              <img src="../../Img/Produktbilleder/${
                product.img
              }" alt="Billede" class="product__img">
              <h4 class="product__header">${product.producer +
                " " +
                product.name}</h4>
              <h5 class="product__price">${product.price}</h5>
              <button class="product__buyBtn">ADD TO CART</button>
            </section>
          </a>
              `;
        });
        //  Count products
        let countProducts = product.length;
        productCountContainer.innerHTML = `${countProducts} item(s)`;
      } else {
        // Create each product
        result.products.forEach(product => {
          mainElement.innerHTML += `
            <a href="../Product/product.html?product_id=${
              product.id
            }" class="product__link">
            <section class="productContainer__product">
            <img src="../../Img/Produktbilleder/${
              product.img
            }" alt="Billede" class="product__img">
            <h4 class="product__header">${product.producer +
              " " +
              product.name}</h4>
              <h5 class="product__price">${product.price}</h5>
              <button class="product__buyBtn">ADD TO CART</button>
              </section>
              </a>
              `;
        });
      }
      // Current Category
      categoryElement.innerHTML = productCategory;
      categoryHeader.innerHTML = productCategory;

      // Create categories
      let arr = [];
      result.products.forEach(product => {
        return arr.push(product.category);
      });
      function getUnique(arr) {
        return arr.filter((e, i) => arr.indexOf(e) >= i);
      }
      getUnique(arr).forEach(item => {
        categoryContainer.innerHTML += `
          <li class="categories__category"><a href="/Modules/Products/products.html?product_category=${item}" class="category__link ${item}">${item}</a></li>
          `;
      });

      // Create Manufacturer list
      let manufacturerArr = [];
      result.products.forEach(product => {
        return manufacturerArr.push(product.producer);
      });
      getUnique(manufacturerArr).forEach(item => {
        manufacturer.innerHTML += `<li class="manufacturersContainer__container"><a href="" class="manufacturersContainer__manufacturer">${item}</a></li>`;
        titleManufacturer.innerHTML += `
                      <li class="title__manufacturer"><a href="" class="manufacturer__link ${item}">${item}</a></li>
                      `;
      });
    });
});
