let blockBtn = document.querySelector("#blocker")
let catBtn = document.querySelector("#cat-fact")
let dogBtn = document.querySelector("#dog-fact")
let container = document.querySelector(".response")

blockBtn.addEventListener("click", blockingFn)
catBtn.addEventListener("click", getCatFact)
dogBtn.addEventListener("click", getDogFact)

function blockingFn() {
    console.log("Blocking function started");
    alert("This blocks the main process!")
    console.log("The process is finished.")
}

async function getCatFact() {
    console.log("clicked!")
    let request = await fetch("https://meowfacts.herokuapp.com")
    console.log(request)
    let result = await request.json()
    console.log(result)
    console.log(result.data);
    console.log(result.data[0])
    container.textContent = result.data[0];
    return;
}

function getDogFact() {
    console.log("Getting the dog fact");
    fetch("https://dogapi.dog/api/v2/facts").then(requset => {
        console.log(requset);
        return requset.json()
    }).then(result => {
        console.log(result)
        container.textContent = result.data[0];
    })}