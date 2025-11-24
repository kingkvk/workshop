### Digital Resume Task (Git Commands)

### Step 1: Prepare Your Files

- Open any text editor (like VS Code)
- Create a new file named `index.html`.
- Create another file named `style.css` in the same folder.
- Put your basic HTML resume structure in `index.html` and style it in `style.css`.

Example `index.html` to start:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Name - Resume</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Web Developer | your.email@example.com | +91-XXXXXXXXXX</p>
    </header>
    <section>
        <h2>Education</h2>
        <ul>
            <li>Bachelor of Technology, Computer Science, XYZ University, 2021</li>
        </ul>
    </section>
    <section>
        <h2>Skills</h2>
        <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Git & GitHub</li>
        </ul>
    </section>
    <section>
        <h2>Experience</h2>
        <ul>
            <li>Web Developer Intern at ABC Corp, Summer 2025</li>
        </ul>
    </section>
</body>
</html>
```
Example `style.css` to get started:

```css
body { font-family: Arial, sans-serif; margin: 40px; }
header { background: #f5f5f5; padding: 20px; }
h1 { color: #333; }
h2 { color: #0074D9; border-bottom: 1px solid #ccc; }
ul { list-style-type: none; padding: 0; }
section { margin-top: 30px; }
```

### Step 2: Initialize Local Repository

Open a terminal in your resume folder and run these commands:

```bash
git init
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Add and Commit Your Files

Run these commands one by one to track your files and commit your changes:

```bash
git add index.html style.css
git status  # Optional: Check which files are staged
git commit -m "Initial commit: Add resume files"
```

### Step 4: Connect to GitHub Repository

- Go to GitHub and create a new repository (name example: `resume`).
- Copy the repository URL (it looks like `https://github.com/yourusername/resume.git`).

Connect your local folder to GitHub repo:

```bash
git remote add origin https://github.com/yourusername/resume.git
```

### Step 5: Push Your Code

Upload the files to your repository using:

```bash
git push -u origin master
```
(If your repo is `main` branch, use `main` instead of `master`.)

### Step 6: Verify Files on GitHub

- Go to your GitHub repository in your browser.
- Check if `index.html` and `style.css` are uploaded and visible.

### Step 7: (Optional) Host the Resume Online with GitHub Pages

- Go to repository 'Settings' > 'Pages' section.[11]
- Under 'Source', select branch (`main` or `master`) and `/root` as folder.
- Save and check the link GitHub provides (it will look like `https://yourusername.github.io/resume/`). Your resume will appear live on the Internet.

| Git Command         | Use                                         |
|---------------------|---------------------------------------------|
| `git init`          | Initialize a git repo in your folder [5][6]|
| `git add .`         | Stage all changes for commit [5][6]|
| `git commit -m ""`  | Commit staged files with a message [5][6]|
| `git remote add origin URL` | Link local folder to GitHub repo   |
| `git push origin master`    | Upload code to cloud repository   |
| `git status`        | See status of current changes [5][6]|

***
