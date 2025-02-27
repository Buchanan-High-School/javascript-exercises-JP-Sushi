// Handle all requests to the server
// pram method - "get", "post", "put", "delete"
// param endpoint - URL endpoint to request
// para data - JSON object for post/put requests
async function request(method, endpoint, data = null) {
    let userId = btoa("Poehner:601043")
const headers = {
        "Content-Type": "application/json",
        "Authorization": `Basic ${userId}`
    }

    let options = {
        method: method,
        headers: headers,
    }

    if(method.toLowerCase() === "post") {
        options["body"] = JSON.stringify(data);
    }

    let request = await fetch(`http://10.20.240.46/${endpoint}`, options)

    if(request.ok) {
        let result = await request.json()
        return result
    }
}

window.addEventListener("DOMContentLoaded", async function() {
    let result = await request("get", "todo", null)
    render(result.data);
    console.log(result);
})

// Get the form and post on submit
let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    postTodo(event.target);
})

//Handles the POST of a new Todo to the server
async function postTodo(form) {
    let formData = Object.fromEntries(new FormData(form))
    let result = await request("post", "todo", formData)
    console.log(result)
}

let todoContainer = document.querySelector(".todo-Container")
let map = document.querySelector(".todo-Container")

//Render tht todos into the DOM
//It accepts an array of todo opbjects
function render(todoList) {
    todoContainer.innerHTML = todoList.map (todo => {
        return `
        <h2>${todo.title}</h2>
        <p>${todo.description}</p>
        <button data-todoid="${todo.id}" onclick="deleteTodo(this)">Delete</button>
        `
    })
}

//Delete a todo
async function deleteTodo(button) {
    let todoId = button.dataset.todoid;
    let response = await request("delete", `todo/${todoId}`)
    console.log(response)
    render(response.data)
}

//Update a todo
async function completeTodo(button) {
    let body = {

    }

    // let response = await ...
}