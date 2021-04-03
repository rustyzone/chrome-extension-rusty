// Listen for messages

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name === "getWord") {
        const apiKey = "api-key";
        const date = new Date().toISOString.slice(0, 10);
        const apiEndPoint = `https://api.wordknik.com/v4/words.json/wordOfTheDay?date=${date}&api_key=${apiKey}`;
        // Send response
        response({ api: apiEndPoint, date });
    }
    return true; //to help fix issue with chrome.runtime
});
