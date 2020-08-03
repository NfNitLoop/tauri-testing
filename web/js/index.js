import api from "/web_modules/tauri/api"

// TODO: Why is invoke in this weird location?
let invoke = api.default.tauri.invoke;

export function load() {
    setGreeting();
    setupButton();
    console.log("api:", api)
}

function setGreeting() {
    var content = document.getElementById("content");
    if (!content) { 
        alert("Can't find 'content' element.");
        return;
    }

    content.innerHTML = `<p>Hello, <i>world!</i></p>`;
}

function setupButton() {
    var button = document.getElementById("button");
    if (!button) { 
        alert("Can't find 'button' element.");
        return;
    }

    button.onclick = buttonClicked;
}

function buttonClicked() {
    invoke({
        cmd: "greet",
        name: "Cody",
    })
}