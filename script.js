function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    const now = Date.now();
    timeElement.textContent = now; // shows milliseconds
  }
}

function initProfileCard() {
  updateTime();
  setInterval(updateTime, 1000); // update every second
}

document.addEventListener('DOMContentLoaded', initProfileCard);
