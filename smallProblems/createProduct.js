function createProduct(productData) {
  let data = JSON.stringify(productData);
  let request = new XMLHttpRequest();

  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

  request.addEventListener('load', () => {
    console.log(`This product was added: ${request.responseText}`);
  });

  request.send(data);
}
createProduct({
  name: 'HB pencil',
  sku: 'hbp100111dsfds',
  price: 50,
});
