# Codelab: HTML Forms & Simple Interest Calculator

## 1. What you will learn

In this codelab you will learn:

- What an HTML **form** is  
- How to use `<form>`, `<label>`, `<input>`, and `<button>`  
- How to use different input types: `text`, `number`, `submit`, `button`, and `date`  
- How to build a **Simple Interest Calculator** with a date picker and JavaScript  

You only need:

- A text editor (VS Code / Notepad / any editor)  
- A web browser (Chrome / Edge / Firefox)  

You will create a single file named `forms-codelab.html`.

***

## 2. Introduction to HTML Forms

HTML forms allow a website to **collect information** from users.  
Common examples are:

- Login forms (username + password)  
- Contact forms (name, email, message)  
- Payment forms (card details)  

Important form tags:

- `<form>` – the container for the whole form  
- `<label>` – text that describes an input  
- `<input>` – the actual input field (text, number, date, etc.)  
- `<button>` or `<input type="submit">` – used to submit or trigger an action  

***

## 3. Step 1 – Create a Very Basic Form

In this step, you will build the simplest form that asks for the user’s name.

### 3.1 – Create the file

1. Create a new file named `forms-codelab.html`.  
2. Add this basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>HTML Forms Codelab</title>
</head>
<body>
  <h1>HTML Forms – Step 1</h1>

  <!-- We will add our first form below -->
</body>
</html>
```

### 3.2 – Add a simple name form

3. Inside `<body>`, under the heading, add this form:

```html
  <h2>Basic Name Form</h2>

  <form>
    <label for="name">Enter your name:</label><br>
    <input type="text" id="name" name="name"><br><br>

    <input type="submit" value="Submit">
  </form>
```

4. Save the file and open it in the browser.  

You should see:

- A label: “Enter your name:”  
- A text box for typing your name  
- A “Submit” button  

**What is happening here?**

- `<form> ... </form>` wraps all form controls.  
- `<label for="name">` is connected to `<input id="name">`.  
  - Clicking on the label will focus the input field.  
- `type="text"` creates a single‑line text box.  
- `type="submit"` creates a button that submits the form (for now, it will just reload the page).  

***

## 4. Step 2 – Use Different Input Types (Including Date)

Now you will learn how to collect **numbers** and a **date** from the user.  
You will build a small “Loan Details” form.

### 4.1 – Add the new form

1. Below the first form, add a horizontal rule and a new section:

```html
  <hr>

  <h1>HTML Forms – Step 2</h1>
  <h2>Loan Details Form</h2>

  <form>
    <label for="principal">Principal Amount:</label><br>
    <input type="number" id="principal" name="principal"><br><br>

    <label for="rate">Rate of Interest (%):</label><br>
    <input type="number" id="rate" name="rate" step="0.01"><br><br>

    <label for="time">Time (Years):</label><br>
    <input type="number" id="time" name="time"><br><br>

    <label for="startDate">Start Date:</label><br>
    <input type="date" id="startDate" name="startDate"><br><br>

    <input type="submit" value="Calculate">
  </form>
```

2. Save and refresh the page.  

You should now see:

- Three number fields  
- One date picker (a calendar icon in most browsers)  
- A “Calculate” submit button  

**What do these attributes mean?**

- `type="number"`  
  - Only allows numeric input (browsers may show arrows to increase/decrease).  
- `step="0.01"`  
  - Allows decimals like `5.25` instead of only whole numbers.  
- `type="date"`  
  - Shows a date picker so the user can choose a date from a calendar.  
- `name="principal"`, `name="rate"`, etc.  
  - These names are used when form data is sent to a server.  

At this step, the “Calculate” button still just submits/reloads the page.  
In the next step, you will make a real **calculator**.

***

## 5. Step 3 – Build a Simple Interest Calculator (with Date)

Now you will combine everything you learned into a **working** Simple Interest Calculator.

You will:

- Create a new form  
- Read its values using JavaScript  
- Calculate Simple Interest using the formula  
- Display the result on the page  
- Show the chosen **start date**  

### 5.1 – Add the calculator form

1. Under the previous content, add another horizontal rule and this section:

```html
  <hr>

  <h1>HTML Forms – Step 3</h1>
  <h2>Simple Interest Calculator</h2>

  <form id="interestForm">
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
```

2. Note the differences from the earlier forms:

- This form has an `id="interestForm"` so JavaScript can refer to it.  
- The inputs use slightly different `id`s (`principalCalc`, `rateCalc`…) to avoid confusion with the earlier form.  
- The fields have the `required` attribute, which prevents them from being left empty.  
- The calculate button is `type="button"` (not submit), so it will not reload the page.  

### 5.2 – Add the JavaScript function

3. At the **very end** of the file, just before `</body>`, add this script:

```html
  <script>
    function calculateInterest() {
      // Read values from the inputs
      const principal = parseFloat(document.getElementById('principalCalc').value);
      const rate = parseFloat(document.getElementById('rateCalc').value);
      const time = parseFloat(document.getElementById('timeCalc').value);
      const startDate = document.getElementById('startDateCalc').value;

      // Check for missing or invalid values
      if (isNaN(principal) || isNaN(rate) || isNaN(time) || !startDate) {
        document.getElementById('result').textContent =
          'Please enter valid numbers in all fields and choose a date.';
        return;
      }

      // Simple Interest formula: I = (P * R * T) / 100
      const interest = (principal * rate * time) / 100;

      // Show the result and the chosen start date
      document.getElementById('result').textContent =
        'Simple Interest is: ' + interest.toFixed(2) +
        ' | Start Date: ' + startDate;
    }
  </script>
</body>
</html>
```

4. Save the file and refresh your browser.  

### 5.3 – Test the calculator

Try this example:

- Principal: `1000`  
- Rate: `5`  
- Time: `2`  
- Start Date: pick any date from the calendar  

Then click **“Calculate Interest”**.

You should see something like:

> Simple Interest is: 100.00 | Start Date: 2025-11-20  

(Your exact date will depend on what you chose.)

**What is the JavaScript doing?**

- `document.getElementById('principalCalc').value`  
  - Reads the text entered in the field with that `id`.  
- `parseFloat(...)`  
  - Converts the text to a number (for example `"5.5"` → `5.5`).  
- `isNaN(...)`  
  - Checks if the value is **not a number** (invalid input).  
- The formula used is:  
  \[
    \text{Interest} = \frac{\text{Principal} \times \text{Rate} \times \text{Time}}{100}
  \]
- `toFixed(2)`  
  - Formats the result to 2 decimal places (like `100.00`).  
- The result text shows both the **interest** and the **selected start date**.  

***

## 6. Summary

In this codelab you:

- Created basic forms using `<form>`, `<label>`, and `<input>`  
- Used different input types: `text`, `number`, `submit`, `button`, and `date`  
- Learned why `for` (in `<label>`) should match `id` (in `<input>`)  
- Used the `name` attribute to identify form fields  
- Built a complete **Simple Interest Calculator** that:  
  - Reads user inputs  
  - Uses JavaScript to calculate interest  
  - Displays the result along with the chosen **start date**  