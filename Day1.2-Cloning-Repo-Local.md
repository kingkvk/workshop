## Phase 2: Clone, Commit, and Push from Your Computer

### 1. Clone the Repository

1. On your new repository page, click the green “<> Code” button.  
2. Make sure “HTTPS” is selected.  
3. Copy the repository URL (it looks like `https://github.com/username/repo-name.git`).  
4. Open your terminal (Command Prompt, PowerShell, or macOS/Linux terminal).  
5. Go to the folder where you want to keep your projects:

```bash
cd ~/Projects
```

2. Run this command (replace `<repository-URL>` with the URL you copied):

```bash
git clone <repository-URL>
```

Example:

```bash
git clone https://github.com/user_name/resume.git
```

### 2. Go Into the Project Folder

Use `cd` to enter the new project folder:

```bash
cd <repository-name>
```

Example:

```bash
cd resume
```

### 3. Add or Create Project Files

Add your project files (HTML, CSS, JS, etc.) into this folder.

Example: create a simple file:

```bash
echo "Hello World" > index.html
```

### 4. Stage Files for Commit

Use `git add` to tell Git which files you want to include in the next commit.

```bash
git add .
# The '.' means "add all new and changed files in this folder"
```

### 5. Commit Your Changes

Create a snapshot of your changes with a message:

```bash
git commit -m "Add initial project files"
```

Use a clear and short message that describes what you did.

### 6. Push Changes to GitHub

Send your local commits to the GitHub repository:

```bash
git push origin main
```

Notes:

- `origin` is the default name for the remote on GitHub.  
- `main` is the default primary branch name.  
- The first time you push, Git may ask for your GitHub username and password or a Personal Access Token.

***

## Quick Git Workflow Summary

Use this table as a quick reference:

| Step      | Command            | What it does                                           |
|----------|--------------------|--------------------------------------------------------|
| Prepare  | `git clone`        | Copies the GitHub repository to your computer         |
| Track    | `git add`          | Marks files to be included in the next commit         |
| Snapshot | `git commit`       | Saves a version of your tracked changes locally       |
| Sync     | `git push`         | Sends your local commits to the remote on GitHub      |