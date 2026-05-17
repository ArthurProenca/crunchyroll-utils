// Fetch and visually highlight the currently selected speed
chrome.storage.local.get(['crunchyrollSpeed'], (result) => {
  const currentSpeed = result.crunchyrollSpeed || 1.0;
  document.querySelectorAll('.speed-btn').forEach(btn => {
    if (parseFloat(btn.getAttribute('data-speed')) === currentSpeed) {
      btn.classList.add('active');
    }
  });
});

// Setup speed buttons
document.querySelectorAll('.speed-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Remove "active" class from all buttons
    document.querySelectorAll('.speed-btn').forEach(btn => btn.classList.remove('active'));
    // Mark the clicked button as active
    button.classList.add('active');

    const speed = parseFloat(button.getAttribute('data-speed'));
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: speed });
      }
    });
  });
});
