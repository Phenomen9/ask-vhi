const revealBtn = document.getElementById("revealBtn");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const messages = [
  "You’re sweet, easy-going, and full of light 💫",
  "You have this calm, beautiful energy that makes everything better 😍",
  "So... Okeyemi Adebola Victoria, will you be my girlfriend? 💖"
];

let index = 0;

revealBtn.addEventListener("click", () => {
  if (index < messages.length) {
    const line = index === 0 ? line2 : line3;
    line.textContent = messages[index];
    line.style.opacity = 1;
    line.style.transform = "translateY(0)";
    index++;
  } else {
    revealBtn.outerHTML = `
      <div id="choiceBtns" style="
        margin-top: 25px; 
        display: flex; 
        gap: 20px; 
        justify-content: center;
        animation: fadeIn 0.8s ease forwards;
        position: relative;
      ">
        <button id="yesBtn" class="choice-btn yes">Yes ❤️</button>
        <button id="noBtn" class="choice-btn no">No 😢</button>
      </div>
    `;

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.addEventListener("click", () => {
      line3.textContent = "Aww  You just made me the happiest person alive! 💖💐";
      document.getElementById("choiceBtns").style.display = "none";
    });

    // make “No” button hard to click
    noBtn.addEventListener("mouseover", () => {
      const container = document.getElementById("choiceBtns");
      const containerRect = container.getBoundingClientRect();
      const maxX = containerRect.width - noBtn.offsetWidth;
      const maxY = containerRect.height - noBtn.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      noBtn.style.position = "absolute";
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
    });

    noBtn.addEventListener("click", () => {
      line3.textContent = "Ouch 😢... it’s okay though, I still think you’re amazing 💫";
      document.getElementById("choiceBtns").style.display = "none";
    });
  }
});
