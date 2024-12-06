const person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

const teachers = [
    {
        "name": "Mrs. Frost",
        "type": "Environmental Science",
        "experience": 25
    },
    {
        "name": "Mr. Cribley",
        "subject": "Biology",
        "experience": 15
    },
    {
        "name": "Mrs. Lentz",
        "subject": "Physical Science",
        "experience": 22
    },
    {
        "name": "Mr. Bennett",
        "subject": "Chemistry",
        "experience": 15
    },
]

function task1() {
document.querySelector("#task1")
    let Food = {
        "name": "Sushi",
        "type": "Japanes",
        "taste": "Good",
        "rating": 5
    }
    console.log(Food)
    // Create your own object assigned to a variable.
    // console.log your object when this function is run.
}

function task2() {
    let person = {
        "Name": "Joe",
        "Job": "carpenter",
        "Wealthy": "moderite",
        "Hobbie": "piano"
    }
    console.log(person);
    let template = `His name is ${person.Name} and he is a ${person.Job} who makes a ${person.Wealthy} amount of money.`
    console.log(template)
    let target = document.querySelector("#task2")
    let el = document.createElement("p")
  el.innerText = template;
  target.appendChild(el)
    // Write some HTML to create a card display for a person.
    // When you click the button, the data from the `person`
    // object above should be filled in on the page.
}

function task3() {
    [
        {
            "name": "Mrs. Frost",
            "type": "Environmental Science",
            "experience": 25
        },
        {
            "name": "Mr. Cribley",
            "subject": "Biology",
            "experience": 15
        },
        {
            "name": "Mrs. Lentz",
            "subject": "Physical Science",
            "experience": 22
        },
        {
            "name": "Mr. Bennett",
            "subject": "Chemistry",
            "experience": 15
        },
    ]
    // 1. Use the array of teachers to start a loop.
    // 2. In the loop, add a "role" property to each object as they go through the loop
    // 3. Use a template string to add a sentence about each person into the #task3 container.
}