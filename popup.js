// Configura botões de velocidade
document.querySelectorAll('.speed-btn').forEach(button => {
  button.addEventListener('click', () => {
    const speed = parseFloat(button.getAttribute('data-speed'));
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: speed });
      }
    });
  });
});

// Configura botão de Picture-in-Picture
document.getElementById('pip-btn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "togglePiP" });
        }
    });
});