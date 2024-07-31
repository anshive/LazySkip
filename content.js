(function() {
    // Function to skip the ad
    function skipAd() {
      const skipButton = document.querySelector('.ytp-skip-ad-button');
      if (skipButton) {
        skipButton.click();
      }
    }
  
    // Function to observe mutations on the page
    function observerCallback(mutations) {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length || mutation.type === 'attributes') {
          skipAd();
        }
      });
    }
  
    // Set up a MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(observerCallback);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
  
    // Also listen for navigation events
    document.addEventListener('yt-navigate-finish', () => {
      skipAd();
    });
  
    // Initial call to skipAd in case an ad is already playing
    skipAd();
  })();
  