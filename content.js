function getVideo() {
    return document.querySelector('video');
}

// Automatically apply saved speed
function applySavedSpeed() {
    chrome.storage.local.get(['crunchyrollSpeed'], (result) => {
        const speed = result.crunchyrollSpeed || 1.0;
        const video = getVideo();
        // Only updates speed if it's different to avoid overriding
        if (video && video.playbackRate !== speed) {
            video.playbackRate = speed;
        }
    });
}

// Check periodically (useful since Crunchyroll changes episodes without reloading page like a SPA)
setInterval(applySavedSpeed, 2000);

// Listen to messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const video = getVideo();
  
  if (request.action === "setSpeed") {
    // Save preference
    chrome.storage.local.set({ crunchyrollSpeed: request.speed });
    if (video) {
        video.playbackRate = request.speed;
        console.log(`[Crunchyroll Super Controller] Playback speed manually set to ${request.speed}x`);
    } 
  }
});