import api from "/web_modules/tauri/api"

// TODO: Why is invoke in this weird location?
let invoke = api.default.tauri.invoke;

export function load() {
    setupButton();
    console.log("api:", api)
}

function setGreeting(html) {
    var content = document.getElementById("content");
    if (!content) { 
        console.log("Can't find 'content' element.");
        return;
    }

    content.innerHTML = html;
}

function setupButton() {
    var button = document.getElementById("button");
    if (!button) { 
        console.log("Can't find 'button' element.");
        return;
    }

    button.onclick = buttonClicked;
}

function buttonClicked() {
    var result = invoke({
        cmd: "greet",
        name: "Cody",
    })

    setGreeting(result.html)
}