function task1() {
  let myList = ["info", "more info", "even more info", "a lot more info"];
  // This will run when you click the button.
  myList.forEach((item) => {
    let el = document.createElement("li");
    el.innerText = item;
    console.log(myList)
    let target = document.querySelector("div")
    target.appendChild(el);
  });
}

function task2A() {
  document.querySelectorAll("color-list")
let target1 = document.querySelector("#li1")
let target2 = document.querySelector("#li2")
let target3 = document.querySelector("#li3")
let target4 = document.querySelector("#li4")
let target5 = document.querySelector("#li5")
let target6 = document.querySelector("#li6")
console.log(target1, target2, target3, target4, target5, target6)
let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Violet"]
color.forEach(color => {
  console.log(color)
})
  // Write your code in here
}

function task2B() {
  document.querySelectorAll("name-list")
let name = ["Hi Mr. Bennett", "Hi Mrs. Frost", "Hi Mr. Cribley", "Hi Mrs. Lentz", "Hi Mr. Pruett"]
name.forEach(greet => {
  console.log(greet)
})
let target = document.querySelector("#name-list")
name.forEach(name => {
  let el = document.createElement("p")
  el.innerText = name;
  target.appendChild(el)
  console.log(target)
})
  // Writ your code in here
}

function task3() {
 let name = document.querySelectorAll(".item")
name.forEach(color => {
  console.log(color)
  // color.style.backgroundColor = "#" + color.dataset.color;
  color.style.backgroundColor = "#" + color.innerText
})
  // Write your code in here
}
