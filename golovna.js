const items = [
  { name: "Магічний меч", price: 150, id: 1, img: "https://static8.depositphotos.com/1419868/935/i/450/depositphotos_9353571-stock-photo-medieval-sword.jpg" },
  { name: "Амулет захисту", price: 90, id: 2, img: "https://content.rozetka.com.ua/goods/images/big/22449102.jpg" },
  { name: "Книга заклять", price: 120, id: 5, img: "https://shop.talantbooks.com.ua/content/images/42/340x480l50nn0/84184660799396.jpeg" },
  { name: "Кільце невидимості", price: 200, id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIZtjI75PHO_kWsSOxS0nIwpSRPatG9Bn6O253U47IHRhCBZbbHrPxy9bVzhNgrximC0&usqp=CAU" },
  { name: "Шлем Дракона", price: 180, id: 7, img: "https://i.citrus.world/uploads/shop/0/e/0e2a69f6bafb1d101432ea28ad041603.JPG" },
  { name: "Меч вогню", price: 170, id: 9, img: "https://img.pikbest.com/png-images/20240827/blazing-fire-sword_10763674.png!sw800" },
  { name: "Магічний компас", price: 85, id: 10, img: "https://pogoda.rovno.ua/sites/default/files/images/20142904154059.jpg" },
  { name: "Ключ до порталу", price: 160, id: 14, img: "https://voentorg.ua/image/cache/catalog/newproducts/136bee71-cdb2-11ef-8261-00155d2dfa00-2x3.jpeg" },
  { name: "Кристал телепортації", price: 155, id: 17, img: "https://i.pinimg.com/564x/36/0e/1f/360e1fb16162afa1dd4742c8e6b859ce.jpg" },
  { name: "Талісман удачі", price: 80, id: 25, img: "https://st2.depositphotos.com/4115373/10034/i/450/depositphotos_100343332-stock-illustration-clover-in-watercolor.jpg" },
  { name: "Меч блискавки", price: 160, id: 27, img: "https://sfy.com.ua/9985-thickbox_default/samurajskij-mech-8201-katana-damask.jpg" },
  { name: "Щит древніх", price: 175, id: 31, img: "https://i2.storeland.net/2/6552/165519444/afacdb/20220116145120-jpg.jpg" },
  { name: "Капюшон чаклуна", price: 95, id: 35, img: "https://images.prom.ua/2548015079_w640_h640_unikalnaya-shlyapa-vedmy.jpg" },
  { name: "Камінь перевтілення", price: 155, id: 38, img: "https://www.sandhgemstone.com/cdn/shop/products/71tETctfbqL_24e19d55-a340-4618-b59d-31f1a3cc88a6_300x300.jpg?v=1681988558" },
];

  let cart = [];

  function renderItems(list) {
    const container = document.getElementById("items-container");
    container.innerHTML = "";
    list.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="item-img" />
        <h3>${item.name}</h3>
        <p>💰 ${item.price} золота</p>
        <button onclick="addToCart(${item.id})">Додати</button>
      `;
      container.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const item = items.find(i => i.id === id);
    cart.push(item);
    document.getElementById("cart-count").textContent = cart.length;
  }
  
  document.getElementById("sort").addEventListener("change", e => {
    const value = e.target.value;
    let sorted = [...items];
    if (value === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (value === "price-desc") sorted.sort((a, b) => b.price - a.price);
    renderItems(sorted);
  });
  
  document.getElementById("cart-btn").addEventListener("click", () => {
    const modal = document.getElementById("cart-modal");
    const list = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");
    modal.classList.remove("hidden");
    list.innerHTML = "";
    let sum = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price} золота`;
      list.appendChild(li);
      sum += item.price;
    });
    total.textContent = `Разом: ${sum} золота`;
  });
  
  function closeCart() {
    document.getElementById("cart-modal").classList.add("hidden");
  }
  
  renderItems(items);
  