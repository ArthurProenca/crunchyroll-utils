// Escuta mensagens vindas do popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setSpeed") {
    // O player do Crunchyroll usa uma tag HTML5 <video>
    const video = document.querySelector('video');
    if (video) {
        video.playbackRate = request.speed;
        console.log(`[Crunchyroll Speed Controller] Velocidade alterada para ${request.speed}x`);
    } else {
        console.log("[Crunchyroll Speed Controller] Nenhum vídeo encontrado na página.");
    }
  }
});