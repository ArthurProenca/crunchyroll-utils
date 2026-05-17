# 🏃‍♂️ Crunchyroll Super Controller

Take full control of your Crunchyroll viewing experience! This extension allows you to easily adjust the playback speed (from 0.75x up to 2.0x) and automatically remembers your preferences across all episodes.

---

## 📦 Installation Guide

Ready to install? Head over to the [Releases page](../../releases/latest) and download the appropriate `.zip` file for your browser. Follow the instructions below to get set up.

### 🟢 Google Chrome (and Edge / Brave)

1. Download the `crunchyroll-chrome-vX.X.X.zip` file from the latest release.
2. Extract the `.zip` file into a dedicated folder on your computer.
3. Open your browser and go to `chrome://extensions/`.
4. Turn on the **Developer mode** switch in the top right corner.
5. Click on the **Load unpacked** button in the top left.
6. Select the folder where you extracted the extension.
7. **Done!** You can now pin the extension to your toolbar.

### 🦊 Mozilla Firefox

1. Download the `crunchyroll-firefox-vX.X.X.zip` file from the latest release.
2. Extract the `.zip` file into a folder.
3. Open Firefox and navigate strictly to `about:debugging#/runtime/this-firefox`.
4. Click the **Load Temporary Add-on...** button.
5. Choose the `manifest.json` file from the downloaded folder.
6. **Done!** 
> *Note: Temporary add-ons in Firefox may need to be reloaded if you fully restart the browser. To install it permanently, it needs to be published to the Firefox Add-ons store.*

### 🧭 Apple Safari (macOS)

Because of Apple's architecture, Safari extensions run inside native macOS apps.

1. Download the `crunchyroll-safari-vX.X.X.zip` file from the latest release.
2. Extract it to find the `CrunchyrollController.app` file.
3. Drag the App into your **Applications** folder.
4. Double-click the App to open it.

> **⚠️ Important macOS Note:** 
> Because you downloaded this App outside the Mac App Store, macOS Gatekeeper might block it, saying *"the app is damaged and can't be opened"*. To fix this:
> 1. Open the **Terminal** app on your Mac.
> 2. Copy and paste this command and press Enter: 
>    ```bash
>    xattr -cr /Applications/CrunchyrollController.app
>    ```
> 3. Double-click the App again to open it successfully.

5. Click the prompt inside the App to **"Quit and Open Safari Settings"**.
6. In Safari Settings > Extensions, check the box next to **Crunchyroll Controller** to enable it.
7. **Done!**

---

## ✨ Features

- ⏱ **Speed Control:** Choose between `0.75x`, `1.0x`, `1.25x`, `1.5x`, `1.8x` and `2.0x`.
- 💾 **Persistent Memory:** It safely auto-saves your speed preference for your next binges.
- 🎨 **Sleek UI:** Tailored grid design mapping Crunchyroll's dark theme aesthetic.
- 🔔 **Toast Notification:** Discreet and elegant success alerts displayed right onto your video player.
