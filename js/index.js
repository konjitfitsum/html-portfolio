const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});

async function sendMessage() {
  const userText = userInput.value.trim();
  if (!userText) return;

  // Show user message
  chatWindow.innerHTML += `<div class="message user"><strong>You:</strong> ${userText}</div>`;
  chatWindow.scrollTop = chatWindow.scrollHeight;
  userInput.value = "";

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText }),
    });
    const data = await res.json();

    chatWindow.innerHTML += `<div class="message bot"><strong>Bot:</strong> ${data.reply}</div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight;
  } catch (error) {
    chatWindow.innerHTML += `<div class="message bot"><strong>Bot:</strong> Sorry, something went wrong.</div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}
