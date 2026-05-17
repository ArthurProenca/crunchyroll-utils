document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const speed = parseFloat(button.getAttribute('data-speed'));
    
    // Envia uma mensagem para o content script na aba ativa
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: speed });
      }
    });
  });
});