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

let toastTimeout;
function showToast(message) {
    let toast = document.getElementById('crunchyroll-speed-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'crunchyroll-speed-toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 40px;
            right: 40px;
            background-color: rgba(20, 21, 25, 0.9);
            color: #f47521;
            padding: 12px 24px;
            border-radius: 8px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bold;
            font-size: 16px;
            z-index: 999999;
            box-shadow: 0 4px 15px rgba(0,0,0,0.6);
            transition: opacity 0.3s ease;
            pointer-events: none;
            border: 1px solid #33363e;
        `;
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.style.opacity = '1';
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.style.opacity = '0';
    }, 2000);
}

// Listen to messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const video = getVideo();
  
  if (request.action === "setSpeed") {
    // Save preference
    chrome.storage.local.set({ crunchyrollSpeed: request.speed });
    if (video) {
        video.playbackRate = request.speed;
        console.log(`[Crunchyroll Super Controller] Playback speed manually set to ${request.speed}x`);
        showToast(`Speed: ${request.speed}x`);
    } 
  }
});