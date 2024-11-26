# Objects

Objects are another data type in programming. Objects are meant to represent information about real-world _things_. A person has properties like name, gender, and age which can all be represented in an object.

An object is built with a _key_: _value_ pair which can be accessed and used in functions. Where arrays are useful for storing lists of items, objects are helpful because each attribute is given a specific name that can be accessed.

## Syntax

An object is wrapped in curly braces, `{}`, and always has a `key` defined for each `value`:

```js
let person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}
```

The key is always a _string_ - it **cannot** be a number. The `value` for each `key` can be _any_ type of data. This is why objects are helpful because they can thoroughly describe any kind of _thing_. In the example above, the `name` and `subject` keys have string values while the `experience` key is a number.

## Accessing data

Data in an object is accessed in two ways: _dot notation_ and _bracket notation_. You can access keys in an object using either method:

```js
let person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

person.name
// Mr. Bennett

person["name"]
// Mr. Bennett
```

You can also set _new_ values on objects using either notation method:

```js
let person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

// These both set the new `role` key on the object
person.role = "Teacher"
person["role"] = "Teacher"

console.log(person)
/*
{
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
    "role": "Teacher"
}
*/
```

The difference between the two is that the bracket notation can take a _variable_ for a key while the dot notation cannot.

```js
let person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

let targetKey = "experience"

console.log(person.targetKey)
// undefined

console.log(person[targetKey])
// 15
```

## Logging Objects

Javascript has a syntax for logging that makes it easier to structure data. These are called _template strings_ and allow you to mix strings (text) with variables (data).

```js
let person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

let template = `The teacher is ${person.name} and he has ${person.experience} years of experience.`
console.log(template)
// "The teacher is Mr. Bennett and he has 15 years of experience."
```

Template strings use the backtick - `` - to wrap your text instead of quotation marks. Variables are placed inside of a template placeholder - <code>${yourVariable}</code> - and are filled in when printed. These can be used in the DOM as well as the console.

## Arrays of Objects

An array is a list of items and those items can be any type of data. Your first arrays were lists of HTML elements accessed through the `document.querySelectorAll()` DOM method. Because an array is a list of data, you can also have arrays of objects.

```js
let teachers = [
    {
        "name": "Mr. Bennett",
        "experience": 15
    },
    {
        "name": "Mrs. Frost",
        "experience": 25
    },
    // ...
]
```

You can use your array loops to access, read, and modify each object just like you accessed, read, and modified each of the DOM properties in Ex04.

```js
teachers.forEach(teacher => {
    console.log(`The teacher is ${teacher.name}.`)
})
```

Your tasks for this section are outlined in the HTML page. The script file for this exercise is less templated so you can start writing your own Javascript more completely. Each task in this exercise uses skills you've developed on 1-4.