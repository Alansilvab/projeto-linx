fetch("../json/products.json")
  .then(r => r.json())
  .then(json => {
    const nameElms = Array.from(document.querySelectorAll("[id='name']"));
    const imageElms = Array.from(document.querySelectorAll("[id='image']"));
    const oldPriceElms = Array.from(
      document.querySelectorAll("[id='oldprice']")
    );
    const priceElms = Array.from(document.querySelectorAll("[id='price']"));
    const descriptionElms = Array.from(
      document.querySelectorAll("[id='description']")
    );
    const installmentMonthsElms = Array.from(
      document.querySelectorAll("[class='months']")
    );
    const installmentMonthPriceElms = Array.from(
      document.querySelectorAll("[class='monthprice']")
    );
    const purchaseElms = Array.from(
      document.querySelectorAll("[class='more-products']")
    );

    nameElms.forEach((n, i) => {
      const product = json.products[i];
      n.textContent = product.name;
    });

    imageElms.forEach((n, i) => {
      const product = json.products[i];
      n.innerHTML = `<img src="${product.image}" />`;
    });

    oldPriceElms.forEach((n, i) => {
      const product = json.products[i];
      n.textContent = `De: R$${product.oldPrice}`;
    });

    priceElms.forEach((n, i) => {
      const product = json.products[i];
      n.textContent = `Por: R$${product.price}`;
    });

    descriptionElms.forEach((n, i) => {
      const product = json.products[i];
      n.textContent = product.description;
    });

    installmentMonthsElms.forEach((n, i) => {
      const product = json.products[i];
      n.textContent = product.installments.count;
    });

    installmentMonthPriceElms.forEach((n, i) => {
      const product = json.products[i];
      n.textContent = `R$${product.installments.value}`;
    });

    purchaseElms.forEach(n => {
      n.innerHTML = `<a href="https://${json.nextPage}" target="_blank">Ainda mais produtos aqui!</a>`;
    });
  });
