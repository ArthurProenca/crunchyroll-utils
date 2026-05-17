function getVideo() {
    return document.querySelector('video');
}

// Aplica a velocidade salva automaticamente
function applySavedSpeed() {
    chrome.storage.local.get(['crunchyrollSpeed'], (result) => {
        const speed = result.crunchyrollSpeed || 1.0;
        const video = getVideo();
        // Apenas recarrega a velocidade se estiver diferente
        if (video && video.playbackRate !== speed) {
            video.playbackRate = speed;
        }
    });
}

// Verifica periodicamente (útil porque o Crunchyroll troca de episódio sem recarregar a página - SPA)
setInterval(applySavedSpeed, 2000);

// Escuta mensagens vindas do popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const video = getVideo();
  
  if (request.action === "setSpeed") {
    // Salva a preferência
    chrome.storage.local.set({ crunchyrollSpeed: request.speed });
    if (video) {
        video.playbackRate = request.speed;
        console.log(`[Crunchyroll Super Controller] Velocidade manually alterada para ${request.speed}x`);
    } 
  } 
  else if (request.action === "togglePiP") {
      if (video) {
          if (document.pictureInPictureElement) {
              document.exitPictureInPicture();
          } else {
              video.requestPictureInPicture();
          }
      }
  }
});