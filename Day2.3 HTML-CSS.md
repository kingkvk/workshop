# Step 0 – Create the Project Files

1. Create a folder named `web-codelab`.  
2. Inside it, create two files:  

- `index.html`  
- `styles.css`  

At first, `styles.css` can be empty.

***

# Step 1 – Basic HTML Page + Link CSS

Paste this into `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>HTML & CSS Codelab</title>
  <!-- Link to external CSS file -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
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
      <p>This page is part of a learning session on HTML, CSS, and forms.</p>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>
        This is <strong>important</strong> information and 
        <em>emphasized</em> text using inline tags.
      </p>
      <div>
        <span>Use the form below to contact us.</span>
      </div>

      <form id="contactForm" class="card-form">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <input type="submit" value="Submit">
      </form>
    </section>

    <section id="calculator">
      <h2>Simple Interest Calculator</h2>
      <form id="interestForm" class="card-form highlight-form">
        <label for="principalCalc">Principal Amount:</label><br>
        <input type="number" id="principalCalc" name="principal" required><br><br>

        <label for="rateCalc">Rate of Interest (% per annum):</label><br>
        <input type="number" id="rateCalc" name="rate" step="0.01" required><br><br>

        <label for="timeCalc">Time (Years):</label><br>
        <input type="number" id="timeCalc" name="time" required><br><br>

        <label for="startDateCalc">Start Date:</label><br>
        <input type="date" id="startDateCalc" name="startDate" required><br><br>

        <input type="button" value="Calculate Interest" onclick="calculateInterest()">
      </form>

      <p id="result"></p>
    </section>
  </main>

  <footer>
    <p>Copyright © 2025</p>
  </footer>

  <script>
    function calculateInterest() {
      const principal = parseFloat(document.getElementById('principalCalc').value);
      const rate = parseFloat(document.getElementById('rateCalc').value);
      const time = parseFloat(document.getElementById('timeCalc').value);
      const startDate = document.getElementById('startDateCalc').value;

      if (isNaN(principal) || isNaN(rate) || isNaN(time) || !startDate) {
        document.getElementById('result').textContent =
          'Please enter valid numbers in all fields and choose a date.';
        return;
      }

      const interest = (principal * rate * time) / 100;

      document.getElementById('result').textContent =
        'Simple Interest is: ' + interest.toFixed(2) +
        ' | Start Date: ' + startDate;
    }
  </script>
</body>
</html>
```

Right now, there is no styling yet.  
Open `index.html` in the browser and keep refreshing as you go.

***

# Step 2 – Basic Page Styling (Body, Header, Main, Footer)

Paste this into `styles.css`:

```css
/* Step 2: Basic page styling */
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

main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #ddd;
  margin-top: 20px;
}
```

Save and refresh the browser.  
You should now see a blue header, white main “card”, and gray footer.

***

# Step 3 – Style Navigation and Headings

Append this **after** the previous CSS in `styles.css`:

```css
/* Step 3: Navigation and headings */
nav {
  background-color: #eee;
  padding: 10px;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007acc;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

h1, h2 {
  margin-top: 0;
}

section {
  margin-bottom: 30px;
}
```

Save and refresh.  
Now the nav bar looks better and headings/sections have spacing.

***

# Step 4 – Box Model for Sections

Replace the existing `section` rule or **add this below** to enhance it:

```css
/* Step 4: Box model for sections */
section {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 4px;
}
```

Save and refresh.  
Each `<section>` is now a bordered card with padding and rounded corners.

***

# Step 5 – Text and Inline Elements

Add this at the bottom of `styles.css`:

```css
/* Step 5: Text and inline elements */
p {
  line-height: 1.6;
}

strong {
  color: #c0392b; /* dark red */
}

em {
  color: #8e44ad; /* purple */
}

span {
  display: inline-block;
  margin-top: 5px;
  color: #555;
}
```

Save and refresh.  
You will see improved line spacing and colored emphasis text.

***

# Step 6 – Form Styling (Contact + Calculator)

Add these rules to `styles.css`:

```css
/* Step 6: Forms styling */
form {
  background-color: #fafafa;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  max-width: 400px;
}

label {
  font-weight: bold;
}

/* Text, email, number, and date inputs */
input[type="text"],
input[type="email"],
input[type="number"],
input[type="date"] {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Buttons (submit and custom button) */
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

Save and refresh.  
Both forms are now nicely styled with full-width inputs and blue buttons.

***

# Step 7 – Classes and IDs (Highlight Calculator Form)

You already added `class="card-form"` and `class="card-form highlight-form"` in `index.html`.  
Now style those classes and the result text.

Append to `styles.css`:

```css
/* Step 7: Classes and special styles */
.card-form {
  margin-bottom: 20px;
}

/* Highlight the calculator form differently */
.highlight-form {
  border-color: #007acc;
  box-shadow: 0 0 5px rgba(0, 122, 204, 0.3);
}

/* Style the result paragraph below the calculator */
#result {
  margin-top: 10px;
  font-weight: bold;
  color: #2c3e50;
}
```

Save and refresh.  
Now:

- Both forms have bottom spacing.  
- The calculator form stands out with blue border and shadow.  
- The result text below the calculator is bold and clearly visible.

***

## Final Files (For Quick Copy)

### Final `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>HTML & CSS Codelab</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
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
      <p>This page is part of a learning session on HTML, CSS, and forms.</p>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>
        This is <strong>important</strong> information and 
        <em>emphasized</em> text using inline tags.
      </p>
      <div>
        <span>Use the form below to contact us.</span>
      </div>

      <form id="contactForm" class="card-form">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <input type="submit" value="Submit">
      </form>
    </section>

    <section id="calculator">
      <h2>Simple Interest Calculator</h2>
      <form id="interestForm" class="card-form highlight-form">
        <label for="principalCalc">Principal Amount:</label><br>
        <input type="number" id="principalCalc" name="principal" required><br><br>

        <label for="rateCalc">Rate of Interest (% per annum):</label><br>
        <input type="number" id="rateCalc" name="rate" step="0.01" required><br><br>

        <label for="timeCalc">Time (Years):</label><br>
        <input type="number" id="timeCalc" name="time" required><br><br>

        <label for="startDateCalc">Start Date:</label><br>
        <input type="date" id="startDateCalc" name="startDate" required><br><br>

        <input type="button" value="Calculate Interest" onclick="calculateInterest()">
      </form>

      <p id="result"></p>
    </section>
  </main>

  <footer>
    <p>COPYRIGHT © 2025</p>
  </footer>

  <script>
    function calculateInterest() {
      const principal = parseFloat(document.getElementById('principalCalc').value);
      const rate = parseFloat(document.getElementById('rateCalc').value);
      const time = parseFloat(document.getElementById('timeCalc').value);
      const startDate = document.getElementById('startDateCalc').value;

      if (isNaN(principal) || isNaN(rate) || isNaN(time) || !startDate) {
        document.getElementById('result').textContent =
          'Please enter valid numbers in all fields and choose a date.';
        return;
      }

      const interest = (principal * rate * time) / 100;

      document.getElementById('result').textContent =
        'Simple Interest is: ' + interest.toFixed(2) +
        ' | Start Date: ' + startDate;
    }
  </script>
</body>
</html>
```

### Final `styles.css`

```css
/* Step 2: Basic page styling */
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

main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #ddd;
  margin-top: 20px;
}

/* Step 3: Navigation and headings */
nav {
  background-color: #eee;
  padding: 10px;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007acc;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

h1, h2 {
  margin-top: 0;
}

/* Step 4: Box model for sections */
section {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 4px;
}

/* Step 5: Text and inline elements */
p {
  line-height: 1.6;
}

strong {
  color: #c0392b; /* dark red */
}

em {
  color: #8e44ad; /* purple */
}

span {
  display: inline-block;
  margin-top: 5px;
  color: #555;
}

/* Step 6: Forms styling */
form {
  background-color: #fafafa;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  max-width: 400px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="date"] {
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

/* Step 7: Classes and special styles */
.card-form {
  margin-bottom: 20px;
}

.highlight-form {
  border-color: #007acc;
  box-shadow: 0 0 5px rgba(0, 122, 204, 0.3);
}

#result {
  margin-top: 10px;
  font-weight: bold;
  color: #2c3e50;
}
```