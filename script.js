const wheels = {
  matcha: {
    element: document.getElementById("wheel-matcha"),
    result: document.getElementById("result-matcha"),
    items: [
      "Matcha Latte Vanille", "Matcha Latte Coco", "Matcha Latte Mousse Coco", "Matcha Latte Cassis", "Matcha Latte Fruits Rouges",
      "Matcha Latte Chocolat Blanc", "Matcha Latte Blueberry", "Matcha Latte Mango", "Matcha Latte Lait de Coco", "Matcha Latte Coco/Mango","Matcha Latte Passion"
    ]
  },
  cafe: {
    element: document.getElementById("wheel-cafe"),
    result: document.getElementById("result-cafe"),
    items: [
      "Coffee Latte Caramel", "Coffee Latte Caramel Salé", "Coffee Latte Caramel Beurre Salé", "Coffee Latte Vanille",
      "Coffee Latte Crème Brûlée", "Coffee Latte Chocolat", "Coffee Latte Spéculos", "Coffee Latte Pumpkin Spice", "Coffee Latte Tiramisu",
      "Coffee Latte Peanut Butter", "Coffee Latte Brown Sugar"
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
  matcha: ['#37633F', '#67944C', '#A3C651'],
  cafe: ['#442818', '#9B592A', '#BC9558'],
  bubble: ['#F7AF60', '#F7995E', '#F47F58']
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
    wheel.result.textContent = ` ${wheel.items[randomIndex]}`;
    wheel.result.classList.add("visible");
  }, 4000);
}

function shareResult() {
  const text = "Je viens de tirer ma boisson sur Drink with Zay ! 🍹";
  const url = "https://drinkwithzay.com";
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, "_blank");
}
