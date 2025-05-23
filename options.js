// Saves options to chrome.storage.sync.
function saveOptions() {
	console.log('in save options');

  const reloadPageVal = document.getElementById('reload_page_after_extension_reload').checked;
  const reloadExtensionVal = document.getElementById('reload_extension_after_every_load').checked;
  chrome.storage.sync.set({
    'reloadPage': reloadPageVal,
    'reloadExtension': reloadExtensionVal,
  }, function () {
    // Update status to let user know options were saved.
    const statusEl = document.getElementById('status');

    statusEl.textContent = 'Options saved.';
    setTimeout(function () {
      statusEl.textContent = '';
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restoreOptions() {
  chrome.storage.sync.get({
    'reloadPage': false,
    'reloadExtension': false
  }, function (items) {
    document.getElementById('reload_page_after_extension_reload').checked = items.reloadPage;
    document.getElementById('reload_extension_after_every_load').checked = items.reloadExtensionVal;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
