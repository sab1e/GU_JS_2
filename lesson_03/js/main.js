const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    })
}

class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.allProducts = [];

    this._fetchProducts();

    console.log(this.sumPrice());
  }

  _fetchProducts() {
      getRequest(`${API}/catalogData.json`).then((data) => {
          this.#goods = JSON.parse(data);
          this.#render();
          console.log(this.#goods);
      }).catch((err) => {
          console.log(err);
      });
  };

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  sumPrice() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

class Basket {

  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];

    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
      getRequest(`${API}/getBasket.json`).then((data) => {
          this.goods = JSON.parse(data).contents;
          this.render();
          console.log(this.goods);
      }).catch((err) => {
          console.log(err);
      });
  };

  render() {
    const block = document.querySelector(this.container);
    block.innerHTML = '';
    for (let product of this.goods) {
        const productObject = new BasketItem(product);

        this.allProducts.push(productObject);
        block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class BasketItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
    this.quantity = product.quantity
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <p>${this.quantity} шт.</p>
                  <button class="del-btn">Удалить</button>
              </div>
          </div>`;
  }
}

const list = new ProductList();
btn = document.querySelector(`.btn-cart`)
btn.addEventListener('click', event => new Basket());
