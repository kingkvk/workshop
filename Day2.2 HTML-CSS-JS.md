***

# HTML & CSS Basics – 6‑Step Codelab

## What you will build

In this codelab, you will build a simple one‑page website with:

- A proper HTML structure  
- Headings, paragraphs, links, images, and lists  
- Semantic layout using header, nav, main, footer  
- Basic CSS styling (colors, spacing, fonts)  
- A contact form  
- A Simple Interest calculator using a form + JavaScript  

You only need:

- A folder on your computer  
- A text editor (VS Code / Notepad / any code editor)  
- A web browser (Chrome / Edge / Firefox)  

***

## Step 0 – Project Setup

1. Create a folder named `html-codelab` anywhere on your computer.  
2. Inside that folder, create a new file named `index.html`.  
3. Open `index.html` in your editor.  
4. Type this code and save the file:  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>HTML & CSS Basics Codelab</title>
</head>
<body>
  <!-- Content will go here in the next steps -->
</body>
</html>
```

5. Open the file in your browser by double‑clicking `index.html`.  
   You should see a blank page with the title “HTML & CSS Basics Codelab” in the browser tab.  

***

## Step 1 – Headings, Paragraphs, Line Breaks

In this step you will practice:

- Headings: `<h1>` to `<h3>`  
- Paragraphs: `<p>`  
- Line breaks: `<br>`  

1. Inside the `<body>` tag, replace the comment with this content:  

```html
<body>
  <!-- Step 1: Headings and paragraphs -->
  <h1>My First Web Page</h1>

  <h2>Introduction</h2>
  <p>This is my first paragraph on this page.</p>

  <h3>Line Break Example</h3>
  <p>
    This sentence is on one line.<br>
    This sentence appears on the next line.
  </p>
</body>
```

2. Save and refresh the browser.  

You should now see a big main heading, a smaller heading, and some text with a line break.  
Remember:  

- `<h1>` is the main page heading (use it once for the main title).  
- `<p>` wraps a paragraph of text.  
- `<br>` creates a line break inside a paragraph.  

***

## Step 2 – Links, Images, and Lists

Now you will add:

- A clickable **link** (`<a>`)  
- An **image** (`<img>`)  
- An **unordered list** (`<ul>`)  
- An **ordered list** (`<ol>`)  

1. Add this code **below** the existing content inside `<body>`:  

```html
  <!-- Step 2: Links, images, and lists -->
  <h2>Links and Images</h2>
  <p>
    Visit 
    <a href="https://www.example.com" target="_blank">Example Website</a>
    for more information.
  </p>

  <img src="https://via.placeholder.com/150" alt="Placeholder Image" />

  <h2>My Favorite Fruits (Unordered List)</h2>
  <ul>
    <li>Apples</li>
    <li>Oranges</li>
    <li>Bananas</li>
  </ul>

  <h2>Steps to Learn Web Development (Ordered List)</h2>
  <ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
  </ol>
```

2. Save and refresh.  

Key ideas:

- `<a href="URL">Text</a>` creates a hyperlink.  
- `target="_blank"` opens the link in a new tab.  
- `<img src="..." alt="...">` shows an image; `alt` is text shown if the image fails or for screen readers.  
- `<ul>` = unordered (bulleted) list, `<ol>` = ordered (numbered) list, `<li>` = each list item.  

***

## Step 3 – Semantic Layout (header, nav, main, footer)

Now you will organize the page using **semantic HTML5 tags**:

- `<header>` – top section of the page  
- `<nav>` – navigation links  
- `<main>` – main content of the page  
- `<section>` – logical sections inside main  
- `<footer>` – bottom of the page  

1. Replace **everything inside `<body>`** with this:  

```html
<body>
  <!-- Step 3: Semantic layout -->
  <header>
    <h1>My Simple Website</h1>
  </header>

  <nav>
    <a href="#home">Home</a> |
    <a href="#about">About</a> |
    <a href="#contact">Contact</a> |
    <a href="#calculator">Calculator</a>
  </nav>

  <main>
    <section id="home">
      <h2>Home</h2>
      <p>Welcome to my simple website built with HTML and CSS.</p>
    </section>

    <section id="about">
      <h2>About</h2>
      <p>This page is part of a one-day HTML & CSS learning session.</p>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>We will soon add a contact form in this section.</p>
    </section>

    <section id="calculator">
      <h2>Simple Interest Calculator</h2>
      <p>We will build the calculator form here in a later step.</p>
    </section>
  </main>

  <footer>
    <p>Copyright © 2025</p>
  </footer>
</body>
```

2. Save and refresh.  

Now the page is structured clearly, even before adding any CSS.  
The navigation links use `href="#id"` to jump to sections with matching `id` attributes.  

***

## Step 4 – Add Basic CSS Styling (Internal)

You will now:

- Add a `<style>` block inside `<head>`  
- Style the body, header, nav, main, and footer  

1. Update the `<head>` tag to look like this:  

```html
<head>
  <meta charset="UTF-8" />
  <title>HTML & CSS Basics Codelab</title>
  <style>
    /* Basic page styling */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      color: #333;
    }

    header {
      background-color: #007acc;
      color: white;
      padding: 20px;
      text-align: center;
    }

    nav {
      background-color: #eee;
      padding: 10px;
      text-align: center;
    }

    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: #007acc;
    }

    nav a:hover {
      text-decoration: underline;
    }

    main {
      padding: 20px;
      max-width: 800px;
      margin: 20px auto;
      background-color: white;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    footer {
      text-align: center;
      padding: 10px;
      background-color: #ddd;
      margin-top: 20px;
    }
  </style>
</head>
```

2. Save and refresh.  

You should now see:

- A colored header bar  
- A light gray navigation bar  
- White main content area with a light shadow  
- A gray footer  

Key CSS ideas used here:

- **Selector**: `body`, `header`, `nav a` – which element(s) to style  
- **Property**: `color`, `background-color`, `padding`, `margin`, `text-align`, etc.  
- **Value**: what you set for the property (for example `#007acc`, `20px`, `center`)  

***

## Step 5 – Special Text Tags and Contact Form

Now you will:

- Use **inline text tags**: `<strong>`, `<em>`, `<span>`  
- Add a basic **contact form** using `<form>`, `<label>`, `<input>`  

1. Find the `<section id="contact">` in `<main>` and replace it with:  

```html
    <section id="contact">
      <h2>Contact</h2>
      <p>
        This is <strong>important</strong> information and 
        <em>emphasized</em> text using inline tags.
      </p>
      <div>
        <span>Use the form below to contact us.</span>
      </div>

      <form id="contactForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required /><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required /><br><br>

        <input type="submit" value="Submit" />
      </form>
    </section>
```

2. Next, **add more CSS** inside the same `<style>` block (at the bottom of it):  

```css
    form {
      background-color: #fafafa;
      padding: 15px;
      border-radius: 5px;
      border: 1px solid #ccc;
      max-width: 400px;
    }

    input[type="text"],
    input[type="email"],
    input[type="number"] {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      margin-bottom: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    input[type="submit"],
    input[type="button"] {
      background-color: #007acc;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="submit"]:hover,
    input[type="button"]:hover {
      background-color: #005fa3;
    }
```

3. Save and refresh.  

Now your contact section has:

- Styled text with `<strong>` (bold) and `<em>` (italic)  
- A nicely styled form with name and email fields and a submit button  

***

## Step 6 – Simple Interest Calculator (Form + JavaScript)

You will now create a **Simple Interest Calculator** using:

- HTML form with number inputs  
- The formula: \( I = \frac{P \times R \times T}{100} \)  
- JavaScript function that runs on button click  

### 6.1 – Add the Calculator Form

1. Replace the existing `<section id="calculator">` with this:  

```html
    <section id="calculator">
      <h2>Simple Interest Calculator</h2>
      <form id="interestForm">
        <label for="principal">Principal Amount:</label><br>
        <input type="number" id="principal" name="principal" required /><br><br>

        <label for="rate">Rate of Interest (% per annum):</label><br>
        <input type="number" id="rate" name="rate" step="0.01" required /><br><br>

        <label for="time">Time (Years):</label><br>
        <input type="number" id="time" name="time" required /><br><br>

        <input type="button" value="Calculate Interest" onclick="calculateInterest()" />
      </form>

      <p id="result"></p>
    </section>
```

2. The CSS written previously for `input[type="number"]` and buttons will automatically style these fields.  

### 6.2 – Add the JavaScript Logic

1. Just before the closing `</body>` tag, add this `<script>` block:  

```html
  <script>
    function calculateInterest() {
      const principal = parseFloat(document.getElementById('principal').value);
      const rate = parseFloat(document.getElementById('rate').value);
      const time = parseFloat(document.getElementById('time').value);

      if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').textContent =
          'Please enter valid numbers in all fields.';
        return;
      }

      const interest = (principal * rate * time) / 100;
      document.getElementById('result').textContent =
        'Simple Interest is: ' + interest.toFixed(2);
    }
  </script>
</body>
</html>
```

2. Save and refresh the page.  
3. Try entering values (for example, Principal = 1000, Rate = 5, Time = 2) and click **Calculate Interest**.  

You should see the calculated interest shown in the paragraph with id `result`.  



## What you learned

By finishing this codelab, you practiced:

- HTML document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)  
- Headings, paragraphs, line breaks, links, images, lists  
- Semantic layout: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`  
- Special text tags: `<strong>`, `<em>`, `<span>`, `<div>`  
- Basic CSS: colors, spacing, fonts, hover effects, layout  
- Forms: `<form>`, `<label>`, `<input>` with types like `text`, `email`, `number`, `button`, `submit`  
- A simple JavaScript function to calculate and display Simple Interest.