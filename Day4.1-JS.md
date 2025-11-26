***

# JavaScript Codelab: From Basics to Advanced

## Step 1 – Getting Started with JavaScript

### 1.1 What is JavaScript?

- JavaScript is a programming language that runs mainly in the browser.  
- It can change HTML, react to user actions, and talk to servers.  

### 1.2 Setup for this codelab

Use your existing `index.html` (for example, your LMS page) and add a `<script>` tag at the bottom, just before `</body>`:

```html
<script src="script.js"></script>
</body>
</html>
```

Create a file named `script.js` in the same folder.  
All JavaScript in this codelab will go into `script.js` unless specified.

### 1.3 First script: Hello from the console

```js
// script.js
console.log("Hello, JavaScript!");
```

Open your page in the browser.  
Press F12 → open “Console” → you should see the message.

**Practice:** Change the message to your name and today’s date.

***

## Step 2 – Variables, Data Types, and Operators

### 2.1 Declaring variables

Use `let` for reassignable values, `const` for constants:

```js
let studentName = "Alex";
const pi = 3.14;

console.log(studentName);
console.log(pi);
```

### 2.2 Basic data types

```js
let name = "Priya";       // string
let age = 20;             // number
let isStudent = true;     // boolean
let score = null;         // null (intentional empty)
let notDefined;           // undefined (no value yet)

console.log(typeof name);       // "string"
console.log(typeof age);        // "number"
console.log(typeof isStudent);  // "boolean"
```

### 2.3 Basic operators

```js
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (remainder)

console.log(a > b);  // true
console.log(a === 10); // true (strict equality)
```

**Practice:**  
Create `let marks = 85` and log whether the student passed with `marks >= 50`.

***

## Step 3 – Control Flow: if, else, and Switch

### 3.1 if / else

```js
let marks = 72;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

### 3.2 switch

```js
let day = "Mon";

switch (day) {
  case "Mon":
    console.log("Start of the week");
    break;
  case "Fri":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}
```

**Practice:**  
Use `if/else` to print “Adult” if `age >= 18` else “Minor”.

***

## Step 4 – Functions (Basics, Parameters, Return)

### 4.1 Basic function

```js
function greet() {
  console.log("Hello from a function!");
}

greet(); // call the function
```

### 4.2 Function with parameters and return

```js
function add(x, y) {
  return x + y;
}

let sum = add(5, 7);
console.log("Sum is:", sum);
```

### 4.3 Arrow function

```js
const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(3, 4)); // 12
```

**Practice:**  
Write a function `square(n)` that returns `n * n`.

***

## Step 5 – Arrays and Loops

### 5.1 Arrays

```js
let courses = ["HTML", "CSS", "JavaScript"];

console.log(courses[0]);   // "HTML"
console.log(courses.length); // 3

courses.push("React");     // add to end
console.log(courses);
```

### 5.2 for loop

```js
for (let i = 0; i < courses.length; i++) {
  console.log("Course", i, ":", courses[i]);
}
```

### 5.3 for...of loop

```js
for (let course of courses) {
  console.log("Course:", course);
}
```

**Practice:**  
Create an array of 5 student names and log each one with a greeting.

***

## Step 6 – Objects and Methods

### 6.1 Basic object

```js
let student = {
  name: "Anita",
  age: 21,
  enrolled: true,
  courses: ["HTML", "CSS", "JS"]
};

console.log(student.name);
console.log(student.courses[1]);
```

### 6.2 Methods on objects

```js
let course = {
  title: "JavaScript Basics",
  hours: 10,
  printInfo: function () {
    console.log(this.title + " - " + this.hours + " hours");
  }
};

course.printInfo(); // "JavaScript Basics - 10 hours"
```

**Practice:**  
Create a `course` object with `title`, `level`, `isPublished`, and a method `summary()` that logs a sentence.

***

## Step 7 – DOM Basics: Selecting and Changing Elements

Now connect JavaScript to your HTML (for example, the LMS page).

### 7.1 Add an element to manipulate

In your HTML (LMS hero), add an ID:

```html
<h1 id="hero-title">Learn Web Development the Smart Way</h1>
```

### 7.2 Select and change text

In `script.js`:

```js
const heroTitle = document.getElementById("hero-title");

console.log(heroTitle.textContent);

heroTitle.textContent = "Welcome to MyLMS – Learn by Doing!";
```

### 7.3 Change style with JavaScript

```js
heroTitle.style.color = "#f97316"; // orange
heroTitle.style.fontSize = "2.5rem";
```

**Practice:**  
Change the text and color of another heading (for example, `#courses` section title).

***

## Step 8 – DOM Events (Click, Input, Submit)

### 8.1 Simple button click

Add a button to the hero section:

```html
<button id="hero-cta" class="...">Browse All Courses</button>
```

In `script.js`:

```js
const heroButton = document.getElementById("hero-cta");

heroButton.addEventListener("click", () => {
  console.log("Hero button clicked!");
  alert("Redirecting to course list...");
});
```

### 8.2 Input change example

For a search box:

```html
<input type="text" id="course-search" placeholder="Search courses..." />
```

```js
const searchInput = document.getElementById("course-search");

searchInput.addEventListener("input", () => {
  console.log("Searching for:", searchInput.value);
});
```

**Practice:**  
Add a button that, when clicked, changes the background color of the page.

***

## Step 9 – DOM Project: Simple LMS “Enrolled Courses” List

Goal: Click “Enroll” on a course card and show it in an “Enrolled Courses” list.

### 9.1 Add enroll buttons and list in HTML

Inside each course card, add a button:

```html
<button class="enroll-btn">Enroll</button>
```

Somewhere in `main`, add:

```html
<section id="enrolled" class="...">
  <h2>Enrolled Courses</h2>
  <ul id="enrolled-list"></ul>
</section>
```

### 9.2 JavaScript logic

```js
const enrollButtons = document.querySelectorAll(".enroll-btn");
const enrolledList = document.getElementById("enrolled-list");

enrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the course title inside the same card
    const card = button.closest("article");
    const titleElement = card.querySelector("h3");
    const title = titleElement.textContent;

    // Create list item
    const li = document.createElement("li");
    li.textContent = title;

    enrolledList.appendChild(li);
  });
});
```

**Practice:**  
Prevent duplicate enrollments by checking if the title already exists in the list.

***

## Step 10 – Advanced Basics: ES6+ Features

### 10.1 let, const, and block scope

```js
if (true) {
  let x = 10;
  const y = 20;
  console.log(x, y); // works
}
// console.log(x); // Error: x is not defined
```

### 10.2 Template literals

```js
let name = "Ravi";
let courseName = "JavaScript";

console.log(`Hello ${name}, welcome to the ${courseName} course!`);
```

### 10.3 Destructuring

```js
const user = { name: "Leena", role: "Student" };
const { name: userName, role } = user;

console.log(userName); // "Leena"
console.log(role);     // "Student"
```

**Practice:**  
Use a template literal to generate a sentence about a course: title, level, duration.

***

## Step 11 – Modules (Conceptual Intro)

In real projects (bundlers/Vite/Next etc.), JavaScript is split into modules.

Example (concept only):

`math.js`:

```js
export function add(a, b) {
  return a + b;
}
```

`main.js`:

```js
import { add } from "./math.js";
console.log(add(2, 3));
```

For now, just understand:

- `export` makes functions/variables available to other files.  
- `import` brings them in.  

***

## Step 12 – Asynchronous JavaScript: setTimeout and Promises

### 12.1 setTimeout

```js
console.log("Before timeout");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("After timeout");
```

### 12.2 Fetching data with fetch (Promise)

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Post title:", data.title);
  })
  .catch((error) => {
    console.error("Error fetching:", error);
  });
```

### 12.3 Async / await syntax

```js
async function loadPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Async title:", data.title);
  } catch (err) {
    console.error("Error:", err);
  }
}

loadPost();
```

**Practice:**  
Write an async function that fetches another post ID and logs both ID and title.

***

## Step 13 – Object‑Oriented JavaScript (Classes)

### 13.1 Class and instances

```js
class Course {
  constructor(title, level, hours) {
    this.title = title;
    this.level = level;
    this.hours = hours;
  }

  summary() {
    return `${this.title} (${this.level}) - ${this.hours} hours`;
  }
}

const jsCourse = new Course("JavaScript Basics", "Beginner", 8);
console.log(jsCourse.summary());
```

### 13.2 Inheritance

```js
class FreeCourse extends Course {
  constructor(title, level, hours) {
    super(title, level, hours);
    this.price = 0;
  }

  summary() {
    return super.summary() + " • Free";
  }
}

const htmlCourse = new FreeCourse("HTML Basics", "Beginner", 4);
console.log(htmlCourse.summary());
```

**Practice:**  
Create a `PaidCourse` subclass with a `price` and include it in `summary()`.

***

## Step 14 – Mini Project: Simple Interest Calculator (JS‑Only Perspective)

You already did this in HTML forms, but now focus on the JavaScript part.

HTML:

```html
<form id="interestForm">
  <label>Principal:</label>
  <input type="number" id="p" /><br />

  <label>Rate (% per year):</label>
  <input type="number" id="r" /><br />

  <label>Time (years):</label>
  <input type="number" id="t" /><br />

  <button type="button" id="calcBtn">Calculate</button>
</form>
<p id="result"></p>
```

JavaScript:

```js
function calculateInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

const calcBtn = document.getElementById("calcBtn");
const resultEl = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  const p = parseFloat(document.getElementById("p").value);
  const r = parseFloat(document.getElementById("r").value);
  const t = parseFloat(document.getElementById("t").value);

  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    resultEl.textContent = "Please enter valid numbers.";
    return;
  }

  const interest = calculateInterest(p, r, t);
  resultEl.textContent = `Simple Interest: ${interest.toFixed(2)}`;
});
```

***