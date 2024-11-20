# Data structures, arrays, and loops

All programming languages have ways of representing different types of data. Javascript is no different - there are multiple types of data that can be used in the language:

- String: text content, always enclosed with quotes " "
- Number: Numeric data. Any integer not in quotes is interpreted as a `Number` type.
- Array: A list of elements. These can hold any kind of data.
- Object: A data structure which has methods (functions) and properties which can be manipulated and used for different tasks.

In this exercise, you're going to use the skills you've been devloping to find elements on a page, put them into an array, and then use a loop to manipulate the information.

## Arrays

Arrays are lists - they hold data in comma-separated blocks of code, like this:

```js
// An empty list
let myList = []

// A list of numbers
let numbers = [1, 2, 3, 4]

// A list of type String
let names = ["Brian", "David", "Shelly"]
```

Arrays can also hold lists of objects you've collected on a page. For example, you can use an array to keep track of elements you're targeting for some kind of change in your script:

```js
let target1 = document.querySelector("#div1")
let target2 = document.querySelector("#div2")
let target3 = document.querySelector("#div3")

let myEls = [target1, target2, target3]
```

Arrays are very helpful for storing sets of items to come back to later. Keep in mind that arrays work best when they are a _single type of element_, meaning that you should't mixing `String` elements with `Number` elements - you can get weird results pretty quickly that way.

## Loops

If you want to perform an action on a set of items, a loop is your best tool. This is a _control structure_ - a way to interact with data in a repeatable, predictable way. This section adds some new syntax to your JS code.

Arrays are objects, just like the `document` object when you're using `querySelector`. Every element on your page is _also_ an object - you can use methods like `appendChild` or `insertBefore`. In fact, _everthing in Javascript is an object_. No matter what you're working with, it will have methods and properties you can use.

The `Array` object uses the `forEach()` method to loop over it's values. This loop will go through the array, one item at a time, and do whatever you want it to do. Sometimes, you're just logging a result while you're debugging. Other times, you're updating the DOM with new data. In either case, `forEach` takes an argument and then expects some instructions on what to do next.

```js
let names = ["Brian", "David", "Shelly"]

// for each item in `names`, take the item (name) and then log it in the console
names.forEach(name => {
  console.log(name)
})
```

This is called a _callback function_ - something that is done during another control taking place.

You can combine these methods to have an array of names that are added to the DOM:

```js
let names = ["Brian", "David", "Shelly"]
let target = document.querySelector("#taget")

names.forEach(name => {
  let el = document.createElement("p")
  el.innerText = name;
  target.appendChild(el)
})
```

## Tasks

Your tasks are described in the HTML file. You do not need to edit the template to complete the tasks in this assignment.
