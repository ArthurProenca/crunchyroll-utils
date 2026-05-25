const speedSlider = document.getElementById('speed-slider');
const speedValueDisplay = document.getElementById('speed-value');
const presetButtons = document.querySelectorAll('.preset-btn');

function formatSpeed(speed) {
  // guarantee 1 decimal place format like "1.0"
  return parseFloat(speed).toFixed(1);
}

function updateUI(speed) {
  speedSlider.value = speed;
  speedValueDisplay.innerHTML = `${formatSpeed(speed)}<span>x</span>`;
}

function setSpeed(speed) {
  const parsedSpeed = parseFloat(speed);
  updateUI(parsedSpeed);
  
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: parsedSpeed });
    }
  });
}

// Load initial state
chrome.storage.local.get(['crunchyrollSpeed'], (result) => {
  const currentSpeed = result.crunchyrollSpeed || 1.0;
  updateUI(currentSpeed);
});

// Listener for slider (Atualiza o slider enquanto arrasta)
speedSlider.addEventListener('input', (e) => {
  const newSpeed = e.target.value;
  updateUI(parseFloat(newSpeed));
});

// Efetiva a alteração da velocidade ao soltar o slider
speedSlider.addEventListener('change', (e) => {
  const newSpeed = e.target.value;
  setSpeed(newSpeed);
});

// Setup preset buttons
presetButtons.forEach(button => {
  button.addEventListener('click', () => {
    const fixedSpeed = button.getAttribute('data-speed');
    setSpeed(fixedSpeed);
  });
});
