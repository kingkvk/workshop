###  1: Prepare Your Files

- In your cloned repository folder, create two files:  
  - `index.html`  
  - `style.css`  

Example `index.html` starter:

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

Example `style.css` starter:

```css
body {
    font-family: Arial, sans-serif;
    margin: 40px;
}

header {
    background: #f5f5f5;
    padding: 20px;
}

h1 {
    color: #333;
}

h2 {
    color: #0074D9;
    border-bottom: 1px solid #ccc;
}

ul {
    list-style-type: none;
    padding: 0;
}

section {
    margin-top: 30px;
}
```

***

###  2: (If Needed) Set Your Git Identity

Run this only if you have NOT set it before on this machine:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

If it is already set, you can skip this .

***

###  3: Check Status and Stage Files

Make sure you are in the cloned repository folder in your terminal.

Run:

```bash
git status
```

You should see `index.html` and `style.css` as untracked files.

Stage the files:

```bash
git add index.html style.css
# or to stage everything:
# git add .
```

Check status again (optional):

```bash
git status
```

***

###  4: Commit Your Changes

Create your first commit in this project:

```bash
git commit -m "Initial commit: Add resume files"
```

Use a clear message that describes what you did.

***

###  5: Push Changes to GitHub

If your branch is `main` (common default):

```bash
git push origin main
```

If your branch is `master`:

```bash
git push origin master
```

The first time you push from this machine, Git may ask for your GitHub login or token.

***

###  6: Verify Files on GitHub

- Open your repository page on GitHub in the browser.  
- Confirm that `index.html` and `style.css` are visible in the file list.

***

###  7: Host the Resume with GitHub Pages

- In your GitHub repository, go to “Settings”.  
- Find the “Pages” section.  
- Under “Source”, choose:
  - Branch: `main` or `master`  
  - Folder: `/root`  
- Click “Save”.  
- After a short time, GitHub will show a URL like:  
  - `https://yourusername.github.io/repo-name/`  
- Open that link to see your resume live.

***

### Quick Reference: Git Commands Used

| Git Command                 | Description                                      |
|----------------------------|--------------------------------------------------|
| `git status`               | Show current status of files and staging area   |
| `git add index.html style.css` | Stage the resume files for commit          |
| `git add .`                | Stage all new/changed files in the folder       |
| `git commit -m "message"`  | Save staged changes with a commit message       |
| `git push origin main`     | Push commits to the `main` branch on GitHub     |
| `git push origin master`   | Push commits to the `master` branch on GitHub   |