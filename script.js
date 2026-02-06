const rose = document.getElementById("rose");
const message = document.getElementById("message");

const petals = document.querySelectorAll(".petal");
const rotations = [0, 90, 180, 270];

petals.forEach((petal, i) => {
  petal.style.setProperty("--r", rotations[i] + "deg");
});

rose.addEventListener("click", () => {
  rose.classList.add("bloom");
  message.classList.add("show");
  createPetals();
});

/* Floating petals effect */
function createPetals() {
  for (let i = 0; i < 12; i++) {
    const petal = document.createElement("div");
    petal.className = "floating-petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 6000);
  }
}
