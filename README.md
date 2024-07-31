# LazySkip
This extension auto-clicks the "Skip Ad" button on YouTube. By using it, you accept full responsibility for any consequences, including potential violations of YouTube's terms of service. This tool is provided "as-is" with no warranties. Use because you love skipping ads, just like us.

Are you tired of reaching for your mouse to click that pesky "Skip Ad" button on YouTube? Do you wish there was a way to make those ads disappear with zero effort? Well, you're in luck! Introducing **YtSkip**, the extension designed by lazy people, for lazy people.

## What is YtSkip?

YtSkip is a browser extension that automatically clicks the "Skip Ad" button on YouTube videos, so you can enjoy your content uninterrupted. No more waiting, no more clicking, just pure, unadulterated laziness.

## Installation

1. Download the extension files.
2. Open your browser's extension page.
   - For Chrome: Go to `chrome://extensions/`
   - For Firefox: Go to `about:addons`
3. Enable "Developer mode" (for Chrome).
4. Click on "Load unpacked" and select the `LazySkip` directory.
5. Voila! The extension is now installed.

## How It Works

LazySkip works its magic by injecting a simple script into YouTube pages. This script waits for the "Skip Ad" button to appear and clicks it for you. Here's a peek under the hood:

```javascript
// content.js
setInterval(() => {
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
        skipButton.click();
        console.log('Ad skipped!');
    }
}, 1000);
