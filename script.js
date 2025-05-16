const wheels = {
  temp: {
    element: document.getElementById("wheel-temp"),
    result: document.getElementById("result-temp"),
    items: ["Boisson Froide", "Boisson Chaude"],
  },
  matcha: {
    element: document.getElementById("wheel-matcha"),
    result: document.getElementById("result-matcha"),
    items: [
      "Matcha Latte Vanille", "Coco", "Mousse Coco", "Cassis", "Fruits Rouges",
      "Chocolat Blanc", "Blueberry", "Mango", "Lait de Coco", "Coco/Mango"
    ]
  },
  cafe: {
    element: document.getElementById("wheel-cafe"),
    result: document.getElementById("result-cafe"),
    items: [
      "Coffee Latte Caramel", "Caramel Salé", "Caramel Beurre Salé", "Vanille",
      "Crème Brûlée", "Chocolat", "Spéculos", "Pumpkin Spice", "Tiramisu",
      "Peanut Butter", "Brown Sugar"
    ]
  },
  bubble: {
    element: document.getElementById("wheel-bubble"),
    result: document.getElementById("result-bubble"),
    items: [
      "Thé noir / Passion", "Thé noir / Cassis", "Thé noir / Passion / Cassis",
      "Thé noir / Abricot", "Coffee Latte", "Brown Sugar Latte"
    ]
  }
};

const colorPalettes = {
  temp: ['#CD5C5C', '#2E8B57'],
  matcha: ['#a7f3d0', '#6ee7b7', '#34d399'],
  cafe: ['#d6a977', '#a9746e', '#7c4a33'],
  bubble: ['#fcd34d', '#f9a8d4', '#f472b6']
};

Object.entries(wheels).forEach(([key, w]) => {
  const count = w.items.length;
  const step = 100 / count;
  const colors = colorPalettes[key] || ['#ccc'];
  let gradient = 'conic-gradient(';
  for (let i = 0; i < count; i++) {
    const color = colors[i % colors.length];
    gradient += `${color} ${i * step}% ${(i + 1) * step}%, `;
  }
  gradient = gradient.slice(0, -2) + ')';
  w.element.style.background = gradient;
});

let rotationAngles = {
  temp: 0,
  matcha: 0,
  cafe: 0,
  bubble: 0
};

function spin(type) {
  const wheel = wheels[type];
  const itemCount = wheel.items.length;
  const anglePerItem = 360 / itemCount;
  const randomIndex = Math.floor(Math.random() * itemCount);
  const spins = 6;
  const targetAngle = randomIndex * anglePerItem;
  const totalRotation = spins * 360 + targetAngle;

  rotationAngles[type] += totalRotation;

  wheel.result.classList.remove("visible");
  wheel.element.style.transform = `rotate(${rotationAngles[type]}deg)`;

  setTimeout(() => {
    wheel.result.textContent = `👉 ${wheel.items[randomIndex]}`;
    wheel.result.classList.add("visible");
  }, 4000);
}

function shareResult() {
  const text = "Je viens de tirer ma boisson sur Drink with Zay ! 🍹";
  const url = "https://drinkwithzay.com";
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, "_blank");
}
