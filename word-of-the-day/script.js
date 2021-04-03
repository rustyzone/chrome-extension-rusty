// Send message to background

chrome.runtime.sendMessage({ name: "getWord" }, (response) => {
    console.log(response);
    // document.querySelector("body").innerHTML = response.text;
});
