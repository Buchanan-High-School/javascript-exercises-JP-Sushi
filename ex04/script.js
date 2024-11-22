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
  
  
  // Write your code in here
}

function task2B() {
  
  
  
  // Writ your code in here
}

function task3() {
  // Write your code in here
}
