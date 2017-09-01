// Saves options to chrome.storage
function save_options() {
    var isGrayscale = document.getElementById('grayscale').checked;
    
    chrome.storage.sync.set({
        isGrayscale
    }, function() {
        chrome.notifications.create({
            type: 'basic',
            title: 'Placekitten Options',
            message: 'options saved',
            iconUrl: 'surfer.png'
        });
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value as false
    chrome.storage.sync.get({
      isGrayscale: false
    }, function(options) {
      document.getElementById('grayscale').checked = options.isGrayscale;
    });
  }

  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);