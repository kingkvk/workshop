
## Steps to Create Your First GitHub Repository

### 1. Sign up or Log in to GitHub
- Go to [github.com](https://github.com) and sign up for an account or log in if you already have one.

### 2. Create a New Repository
- After logging in, click the **+** icon at the top-right corner of the page.
- Select **New repository** from the dropdown.

### 3. Fill in Repository Details
- **Repository name:** Choose a short, memorable name for your project (e.g., `digital-resume`).
- **Description (optional):** Briefly describe your project (e.g., "My Digital Resume").
- **Visibility:** Choose **Public** (anyone can see your repo) or **Private** (only you and collaborators can access).
- Optionally, check **Add a README file** to initialize your repo with a README. This file describes your project.
- You may skip adding `.gitignore` or License files for now.

### 4. Click **Create repository**

### 5. Clone the Repository to Your Local Machine
- On the repository page, find the green **Code** button and click it.
- Copy the repository URL (HTTPS recommended).
- Open a terminal/command prompt.
- Navigate to the folder where you want your project.
- Run this command to clone the repo locally:
  ```
  git clone <repository-URL>
  ```
  Replace `<repository-URL>` with the URL you copied.

### 6. Navigate into the Cloned Directory
```
cd <repository-name>
```
Replace `<repository-name>` with the name of your repo folder.

### 7. Add Project Files
- Create or copy your project files into this directory.
- For example, create a README.md file:
  ```
  echo "# digital-resume" > README.md
  ```

### 8. Stage the Files for Commit
```
git add .
```
This stages all files for the next commit.

### 9. Commit Your Changes
```
git commit -m "Initial commit with README"
```
This saves the snapshot of your changes locally with a message.

### 10. Push Changes to GitHub
```
git push origin main
```
This uploads your local commits to the remote GitHub repository.

***

## What Just Happened?

- You created a **remote repository** on GitHub to store your project in the cloud.
- You **cloned** it locally to work on the files with Git.
- You **added, committed, and pushed** files so the remote repository reflects your changes.
