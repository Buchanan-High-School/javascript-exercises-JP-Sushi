 let form = document.querySelector(`form`);
 let formInput = document.querySelector(`#user-input`);
 
 let rockBtn = document.querySelector(`#rock`);
 let paperBtn = document.querySelector(`#paper`);
 let scissorsBtn = document.querySelector(`#scissors`);

 form.addEventListener("submit", function(event) {
    event.preventDefault()
    rps(formInput.value);
})
 
rockBtn.addEventListener("click", function() {
    rps("rock")
})
paperBtn.addEventListener("click", function() {
    rps("paper")
})
scissorsBtn.addEventListener("click", function() {
    rps("scissors")
})

let computerChoices = ["rock", "paper", "scissors"];

function pickRandomChoice() {
    return Math.floor(Math.random() * computerChoices.length)
}
 function compare(userChoice, computerChoice) {
    let result;
    if(userChoice === computerChoice) {
        return "Draw";
    }

    if(
        (userChoice == "rock" && computerChoice == "paper") ||
        (userChoice == "paper" && computerChoice == "scissors") ||
        (userChoice == "scissors" && computerChoice == "rock")
    ) {
        result = `You picked ${userChoice}, the computer picked ${computerChoice}, you lose`
    } else {
        result = `You picked ${userChoice}, the computer picked ${computerChoice}, you win`
    }
    return result;
 }

    function rps(userInput) {
        let computerChoice = computerChoices[pickRandomChoice()]

        let result = compare(userInput, computerChoice);
        return console.log(result)
    }