# Cookie-Extension
Cookies blocker Chrome extension

The extension is designed to provide users with the ability to delete their browsing data, including cookies, browsing history, and cache, with just a few clicks. 
The extension consists of three buttons that, when clicked, call JavaScript functions to delete the relevant data. The first button deletes all cookies, the second button deletes browsing history, and the third button clears the cache.  The functionality of the extension relies on the use of Chrome APIs that are provided by the browser. 
These APIs enable the extension to access and delete browsing data in a secure and controlled manner.  However, I have identified a potential vulnerability in the extension related to the use of the "chrome.cookies.getAll" function. This function retrieves all cookies stored in the browser, regardless of the website they belong to. While this is necessary for deleting all cookies, it also means that the extension could be used to access and steal sensitive information stored in cookies, such as login credentials or session tokens.  To mitigate this vulnerability, I recommend adding additional security measures to the extension, such as prompting the user to confirm the deletion of cookies or limiting the deletion to cookies belonging to specific websites.
  Overall, the extension provides useful functionality for users who want to manage their browsing data easily. However, it is important to be aware of the potential vulnerability and take appropriate measures to ensure that users' data is protected.    

 here are the steps to add an extension to Google Chrome:

1. Open the Google Chrome browser on your computer.
2. Click on the three vertical dots located at the top right corner of the browser window.
3. Select "More tools" from the drop-down menu, and then select "Extensions".
4. Alternatively, you can type "chrome://extensions/" in the address bar and hit enter to go directly to the Extensions page.
5. Expand the Developer dropdown menu and click “Load Unpacked Extension”
6. Navigate to the local folder containing the extension’s code and click Ok
7. Assuming there are no errors, the extension should load into your browser

That's it! You can now use the extension in your Chrome browser.
