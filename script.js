const deleteCookiesButton = document.getElementById('delete-cookies');
const deleteHistoryButton = document.getElementById('delete-history');
const clearCacheButton = document.getElementById('clear-cache');

// Add event listeners to the buttons
deleteCookiesButton.addEventListener('click', deleteCookies);
deleteHistoryButton.addEventListener('click', deleteHistory);
clearCacheButton.addEventListener('click', clearCache);

// Function to delete cookies
function deleteCookies() {
  chrome.cookies.getAll({}, function(cookies) {
    for (let i = 0; i < cookies.length; i++) {
      chrome.cookies.remove({url: cookies[i].url, name: cookies[i].name});
    }
    flashMessage('Cookies deleted successfully!');
  });
}

// Function to delete browsing history
function deleteHistory() {
  chrome.history.deleteAll(function() {
    flashMessage('Browsing history deleted successfully!');
  });
}

function clearCache() {
    var callback = function () {
        flashMessage('Cache deleted successfully!');
      };
      
      var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
      var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
      chrome.browsingData.remove({
        "since": oneWeekAgo,
        "originTypes": {
        "protectedWeb": true
        }
      }, {
        "appcache": true,
        "cache": true,
        "cacheStorage": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": false,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "passwords": false,
        "serviceWorkers": true,
        "webSQL": true
      }, callback); 
  }
  
  function flashMessage(message) {
    // Hide the main div
    const mainDiv = document.querySelector('.main');
    mainDiv.style.display = 'none';
  
    const flashDiv = document.createElement('div');
    flashDiv.style.color = 'red';
  
    // Create the img element
    const img = document.createElement('img');
    img.src = 'https://media.giphy.com/media/EKUvB9uFnm2Xe/giphy.gif';
    img.alt = 'Cookie Monster eating cookies';
    img.style.width = '250px';
    img.style.height = '150px';
  
    // Add the img element to the div
    flashDiv.appendChild(img);
  
    // Add the message to the div
    const messageText = document.createElement('p');
    messageText.textContent = message;
    flashDiv.appendChild(messageText);
  
    // Add the flashDiv to the container element
    const container = document.querySelector('.container');   
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.appendChild(flashDiv);
  
    setTimeout(() => {
      flashDiv.remove();
      // Show the main div again
      mainDiv.style.display = 'block';
    }, 5000);
  }
  