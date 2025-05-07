const items = [
  { name: "Магічний меч", price: 150, id: 1 },
  { name: "Амулет захисту", price: 90, id: 2 },
  { name: "Зілля зцілення", price: 30, id: 3 },
  { name: "Кристал мани", price: 75, id: 4 },
  { name: "Книга заклять", price: 120, id: 5 },
  { name: "Кільце невидимості", price: 200, id: 6 },
  { name: "Шолом Дракона", price: 180, id: 7 },
  { name: "Сфера передбачення", price: 110, id: 8 },
  { name: "Меч вогню", price: 170, id: 9 },
  { name: "Магічний компас", price: 85, id: 10 },
  { name: "Плащ тіней", price: 140, id: 11 },
  { name: "Флакон енергії", price: 50, id: 12 },
  { name: "Чари морозу", price: 95, id: 13 },
  { name: "Ключ до порталу", price: 160, id: 14 },
  { name: "Клинок ельфів", price: 135, id: 15 },
  { name: "Світильник душ", price: 145, id: 16 },
  { name: "Кристал телепортації", price: 155, id: 17 },
  { name: "Посох бурі", price: 190, id: 18 },
  { name: "Броня титана", price: 210, id: 19 },
  { name: "Сандалі швидкості", price: 100, id: 20 },
  { name: "Око пророка", price: 115, id: 21 },
  { name: "Перо фенікса", price: 125, id: 22 },
  { name: "Символ тиші", price: 105, id: 23 },
  { name: "Зілля невразливості", price: 95, id: 24 },
  { name: "Талісман удачі", price: 80, id: 25 },
  { name: "Сфера хаосу", price: 170, id: 26 },
  { name: "Меч блискавки", price: 160, id: 27 },
  { name: "Намисто чарівника", price: 90, id: 28 },
  { name: "Куб аркан", price: 130, id: 29 },
  { name: "Пісочний годинник часу", price: 150, id: 30 },
  { name: "Щит древніх", price: 175, id: 31 },
  { name: "Флакон інферно", price: 70, id: 32 },
  { name: "Книга рун", price: 115, id: 33 },
  { name: "Медальйон темряви", price: 85, id: 34 },
  { name: "Капюшон чаклуна", price: 95, id: 35 },
  { name: "Аркан небес", price: 140, id: 36 },
  { name: "Світло луни", price: 100, id: 37 },
  { name: "Камінь перевтілення", price: 155, id: 38 },
  { name: "Флейта спокою", price: 60, id: 39 },
  { name: "Книга снів", price: 125, id: 40 }
];

  let cart = [];
  
  function renderItems(list) {
    const container = document.getElementById("items-container");
    container.innerHTML = "";
    list.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
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
  