const items = [
    { name: "Магічний меч", price: 110, id: 1, img: "https://static8.depositphotos.com/1419868/935/i/450/depositphotos_9353571-stock-photo-medieval-sword.jpg" },
    { name: "Шолом Дракона", price: 130, id: 7, img: "https://i.citrus.world/uploads/shop/0/e/0e2a69f6bafb1d101432ea28ad041603.JPG" },
    { name: "Ключ до порталу", price: 99, id: 14, img: "https://voentorg.ua/image/cache/catalog/newproducts/136bee71-cdb2-11ef-8261-00155d2dfa00-2x3.jpeg" },
    { name: "Кристал телепортації", price: 95, id: 17, img: "https://i.pinimg.com/564x/36/0e/1f/360e1fb16162afa1dd4742c8e6b859ce.jpg" },
    { name: "Меч блискавки", price: 100, id: 27, img: "https://sfy.com.ua/9985-thickbox_default/samurajskij-mech-8201-katana-damask.jpg" },
    { name: "Щит древніх", price: 100, id: 31, img: "https://i2.storeland.net/2/6552/165519444/afacdb/20220116145120-jpg.jpg" },
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
    