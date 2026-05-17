// Update UI to show selected speed
function updateSelectedButton(speed) {
  document.querySelectorAll('.speed-btn').forEach(btn => {
    if (parseFloat(btn.getAttribute('data-speed')) === speed) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

// Load initial state
chrome.storage.local.get(['crunchyrollSpeed'], (result) => {
  const currentSpeed = result.crunchyrollSpeed || 1.0;
  updateSelectedButton(currentSpeed);
});

// Setup speed buttons
document.querySelectorAll('.speed-btn').forEach(button => {
  button.addEventListener('click', () => {
    const speed = parseFloat(button.getAttribute('data-speed'));
    updateSelectedButton(speed);
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: speed });
      }
    });
  });
});
