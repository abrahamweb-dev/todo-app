const words = ["Web Developer", "Frontend Developer", "Freelancer"];
const roleEl = document.querySelector(".typing-text span");
const welcomeEl = document.querySelector(".welcome-text span");
const welcomeMessage = welcomeEl.textContent;

let wordIndex = 0, charIndex = 0, deleting = false;

// --- Welcome text: types once, then cycles colors forever ---
function typeWelcome() {
  welcomeEl.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    welcomeEl.textContent += welcomeMessage[i];
    i++;
    if (i === welcomeMessage.length) {
      clearInterval(interval);
      cycleFlagColors();
    }
  }, 80);
}

function cycleFlagColors() {
  const colors = ["#009A44", "#FEDD00", "#DA121A"]; // green, yellow, red
  let colorIndex = 0;
  setInterval(() => {
    welcomeEl.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 800);
}

// --- Role text: independent typing loop, unaffected ---
function typeRole() {
  const current = words[wordIndex];
  roleEl.textContent = deleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  let speed = deleting ? 60 : 120;

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    speed = 1500;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeRole, speed);
}

typeWelcome();
typeRole();
