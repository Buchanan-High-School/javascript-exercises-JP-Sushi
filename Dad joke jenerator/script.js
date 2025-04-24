let getJokeBtn = document.querySelector(`#fire`)
let saveBtn = document.querySelector(`#save`)
let jokeContainer = document.querySelector(`.response`)
let jokeId = document.querySelector(`#jokeId`);
let savedJokeContainer = document.querySelector(".saved");

// getJokeBtn.addEventListener("click", getJoke);
window.addEventListener("DOMContentLoaded", loadSavedJokes);

let options = {
    headers: {
        "Accept": "application/json",
        "User-Agent": "Buchanan High School CS1 (https://buchananschools.com)"
    }
}

async function getJoke() {
    let request = await fetch("https://icanhazdadjoke.com", options);
    let response = await request.json()
    console.log(response)
    jokeContainer.textContent = response.joke;
    jokeId.value = response.id;
}

let dadBtn = document.querySelector("#dad-joke")
let container = document.querySelector(".response")

dadBtn.addEventListener("click", getDadJoke)

function getDadJoke() {
    console.log("Getting the dad joke");
    fetch("https://icanhazdadjoke.com", options).then(requset => {
        console.log(requset);
        return requset.json()
    }).then(result => {
        jokeId.value = result.id;
        console.log(result)
        container.textContent = result.joke;
    })}

    let form = document.querySelector(`form`);
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        saveJoke(event.target);
    })

    function saveJoke(form) {
        console.log(form)
        let formData = new FormData(form)
        let jokeObject = Object. fromEntries(formData);
        jokeObject["joke"] = jokeContainer.textContent;
        console.log(jokeObject)
        localStorage.setItem(jokeObject.jokeId, JSON.stringify(jokeObject))
        form.reset()
}

function loadSavedJokes() {
    let savedJokes = Object.entries(localStorage);

    // Only do this if it is YOUR DATA
    savedJokeContainer.innerHTML = savedJokes.map(joke => {
        let jokeData = JSON.parse(joke[1]);
        console.log(jokeData)
        return `
            <li>
                <p>${jokeData.joke}</p>
                <p>${jokeData.notes}</p>      
                <p>${jokeData.score}</p>
                <button class="delete"data-jokeId="${jokeData.jokeId}">Delete</button>
            </li>
        `
    }).join("")
    let savedJokeDeleteBtns = document.querySelectorAll(".delete");
    savedJokeDeleteBtns.forEach(button => {
        button.addEventListener("click", (event) => {
            deleteJoke(event.target);
        })
    })
}

function deleteJoke(button) {
    // console.log(button)
    let jokeId = button.dataset.jokeid;
    console.log(jokeId)
    localStorage.removeItem(jokeId);
    loadSavedJokes();
}