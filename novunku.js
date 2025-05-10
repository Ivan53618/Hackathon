const items = [
    { name: "Зілля зцілення", price: 30, id: 3, img: "https://100.games/wp-content/uploads/2021/11/1-1.jpg" },
    { name: "Сандалі швидкості", price: 100, id: 20, img: "https://ae04.alicdn.com/kf/S2214c113fb3d49458b5c622b0316dfaeI.jpg_480x480.jpg" },
    { name: "Перо фенікса", price: 125, id: 22, img: "https://st3.depositphotos.com/9237796/16675/i/450/depositphotos_166757294-stock-illustration-watercolor-bird-feather-from-wing.jpg" },
    { name: "Кристал мани", price: 75, id: 4, img: "https://www.viadurini.fr/data/prod/img/servizio-da-tavola-piatti-colorati-blu-in-gres-e-porcellana-18-pezzi-eivissa-4.jpg" },
    { name: "Корона імперії", price: 250, id: 42, img: "https://i.pinimg.com/736x/04/dd/b4/04ddb4773405a6be550a3d607ec856d6.jpg" },
    { name: "Свиток спалаху", price: 65, id: 46, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo3D59je8au5QwcvBiPehuly3lcqdF7laRpnVqFuKZyl6rcVQ_fos93VoHpPdL1TGttc&usqp=CAU"},
    { name: "Медальйон надії", price: 75, id: 48, img: "https://images.prom.ua/1026040391_w640_h320_amulet-narodov-mira.jpg" },
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
    