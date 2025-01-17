# More JS Selections

Manipulating the DOM in Javascript is a critical skill. You've completed your first set of tasks using the `document` object to access different elements in the DOM. Now, it's time to do a little bit more work accessing elements and making changes based on user actions.

## querySelector vs querySelectorAll

The `document.querySelector()` method is helpful because you can get a single, specific element. The best way to do this is to use the `id` attribute of some HTML element. IDs are unique so it always gives you one response. However, if you target a generic HTML element like `<li>`, the `querySelector()` method will _only return the first instance_ of the list item.

There's a solution for this: `document.querySelectorAll()`. This returns _all_ of the items matching the selector and you can update or run a function on each one in your program rather than selecting each element one at a time.

## Adding, removing, and inserting DOM nodes

Each element you select is called a `Node`. A `Node` is simply an HTML element and it can be manipulated. In the last assignment, you added list items to an existing list using the `appendChild` method on the element. Remember, you must create a new element to be inserted - you cannot just add text to the page without a DOM element to carry it. 

```js
let parent = document.querySelector("#parent")
let child = document.createElement("p")
child.innerText = "This is a new paragraph element."
parent.appendChild(child)
```

You're also able to remove elements from the DOM by targeting one with `querySelector` and then using the `remove()` method on your targeted element. 

```html
<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
```

```js
let element = document.querySelector("#p2")
element.remove()

```

You're also able to insert elements _before_ others if you know what you're targeting. The `insertBefore` method takes two arguments: the new element and the existing element you want to insert _before_ in the DOM.

```html
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>
```

```js
let parent = document.querySelector("#div1")
let firstEl = document.querySelector("#p1")

let newNode = document.createElement("p")
newNode.textContent = "This is a new element"
parent.insertBefore(newNode, firstEl)
```

Follow the instructions in the attached HTML page to compelte each task. When you're finished, commit and push your code up to your repo.
