const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = event;
  
    // Update UI to notify the user they can add the app to the home screen
    showInstallButton();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const choiceResult = await deferredPrompt.userChoice;

  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }

  // Clear the saved event since it can only be used once
  deferredPrompt = null;

  // Hide the install button
  hideInstallButton();
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App was installed', event);
});
