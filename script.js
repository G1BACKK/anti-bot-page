let clickCount = 0;
const counter = document.getElementById("counter");
const button = document.getElementById("subscribe-btn");

button.addEventListener("click", () => {
  clickCount++;
  counter.innerText = `${clickCount} Clicks`;

  if (clickCount >= 3) {
    window.location.href = "https://t.me/+NB_Chz9PeyIwNzk1"; // your Telegram channel
  }
});
