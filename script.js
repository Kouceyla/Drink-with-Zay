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
      "Matcha Latte Vanille", "Coco", "Mousse Coco", "Cassis", "Fruits Rouge",
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

function spin(type) {
  const wheel = wheels[type];
  const itemCount = wheel.items.length;
  const anglePerItem = 360 / itemCount;
  const randomIndex = Math.floor(Math.random() * itemCount);
  const extraRotation = 720 + randomIndex * anglePerItem;

  // Animation de rotation + reset
  wheel.result.classList.remove("visible");
  wheel.element.style.transform = `rotate(${extraRotation}deg)`;

  setTimeout(() => {
    wheel.result.textContent = `👉 ${wheel.items[randomIndex]}`;
    wheel.result.classList.add("visible");
  }, 4000);
}

// 🎨 Couleurs personnalisées par roue
const colorPalettes = {
  temp: ['#f9a8d4', '#a7f3d0'],
  matcha: ['#a7f3d0', '#6ee7b7', '#34d399'],
  cafe: ['#d6a977', '#a9746e', '#7c4a33'],
  bubble: ['#fcd34d', '#f9a8d4', '#f472b6']
};

// 🌀 Appliquer les couleurs à chaque roue
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
