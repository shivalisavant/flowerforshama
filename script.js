const words = [
    "not gay 🫶",
  "you are magic 💫",
  "warm hugs 🫂",
  "also not bisexual 🌼",
  "muah☁️",
  "stay golden ✨",
  "you’re lovely 💗",
  "SLAY",
  "love u",
  "only love"
];

function createFloatingText() {
  const text = document.createElement('div');
  text.classList.add('floating-text');
  text.textContent = words[Math.floor(Math.random() * words.length)];

  // random position anywhere in viewport
  text.style.left = Math.random() * window.innerWidth + "px";
  text.style.top = Math.random() * window.innerHeight + "px";

  document.body.appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 12000);
}

setInterval(createFloatingText, 600);
