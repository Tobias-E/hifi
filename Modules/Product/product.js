document.addEventListener('DOMContentLoaded', () => {
let params = new URLSearchParams(document.location.search);
let productId = parseInt(params.get("product_id"));
let mainElement = document.querySelector(".productContainer");
let topElement = document.querySelector('.categoryPath');

const products = fetch("../../JSON/products.json")
    .then(function(response){
        return response.json();
    })
    .then(result => {
        const product = result.products.find(function(e){
            return e.id == productId;
        });
        topElement.innerHTML = `
        <p class="categoryPath__home">Home</p>
        <i class="categoryPath__space">/</i>
        <p class="categoryPath__second">${product.category}</p>
        <i class="categoryPath__space">/</i>
        <p class="categoryPath__third">${product.name}</p>
        `
        mainElement.innerHTML = `
        <img
        src="../../Img/Produktbilleder/${product.img}"
        alt=""
        class="productContainer__img"
      />
      <p class="productContainer__imgText">MORE VIEWS</p>
      <figure class="productContainer__moreImgContainer">
        <img
          src="../../Img/Produktbilleder/${product.img}"
          alt=""
          class="moreImgContainer__img"
        />
        <img
          src="../../Img/Produktbilleder/${product.img}"
          alt=""
          class="moreImgContainer__img"
        />
      </figure>
      <h4 class="productContainer__bottomDescriptionHeader">DESCRIPTION</h4>
      <p class="productContainer__bottomDescriptionText">${product.text}</p>
      <section class="productContainer__descriptionContainer">
        <h3 class="descriptionContainer__header">${product.producer} ${product.name}</h3>
        <div class="descriptionContainer__linkPriceContainer">
          <a href="" class="linkPriceContainer__link"
            >See other ${product.producer} products</a
          >
          <h3 class="linkPriceContainer__price">${product.price}</h3>
        </div>
        <p class="descriptionContainer__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, non.
          Porro corporis quaerat laudantium impedit amet, eos dolores
          voluptatibus recusandae!
        </p>
        <div class="descriptionContainer__productBtnContainer">
          <button class="productBtnContainer__btn">Ask a question</button>
          <button class="productBtnContainer__btn">Part exchange</button>
          <button class="productBtnContainer__btn">Pay by finance</button>
          <button class="productBtnContainer__btn">Seen a better price?</button>
        </div>
      </section>
      <div class="productContainer__buyBox">
        <h5 class="buyBox__h5">Finish</h5>
        <div class="buyBox__radioContainer">
          <label class="radioContainer__radio">
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
            Black
          </label>
          <label class="radioContainer__radio">
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
            Silver
          </label>
        </div>
        <div class="buyBox__qtyContainer">
          <label for="qty" class="qtyContainer__qtyText"
            >Qty:
            <input type="number" name="qty" id="" class="qtyContainer" />
          </label>
          <button class="qtyContainer__button">Add to cart</button>
        </div>
      </div>
      <div class="productContainer__addInfo">
        <h2 class="addInfo__header">additional information</h2>
        <div class="addInfo__contentContainer">
          <p class="contentContainer__infoKey">Manufacturer</p>
          <p class="contentContainer__infoKey">Model</p>
          <p class="contentContainer__infoKey">Free warranty</p>
          <p class="contentContainer__infoKey">Delivery charge</p>
          <p class="contentContainer__infoKey">Delivery time</p>
          <p class="contentContainer__infoKey">Card surcharges</p>
          <p class="contentContainer__infoValue grid1">${product.producer}</p>
          <p class="contentContainer__infoValue grid2">${product.name}</p>
          <p class="contentContainer__infoValue grid3">3 years</p>
          <p class="contentContainer__infoValue grid4">Free</p>
          <p class="contentContainer__infoValue grid5">1 - 5 Working Days</p>
          <p class="contentContainer__infoValue grid6">No</p>
        </div>
      </div>
        `
    });
});