### 1. Introduction to Git Commits
**Goal:** Understand how Git saves snapshots of your project through commits.

**Steps:**
1. Create a new folder and initialize Git:  
   ```bash
   mkdir git-learning && cd git-learning
   git init
   ```
2. Create a file and make your first commit:  
   ```bash
   echo "My first Git project" > README.md
   git add README.md
   git commit -m "Initial commit with README"
   ```
3. Modify the file and commit again.  
   ```bash
   echo "Added project description" >> README.md
   git add README.md
   git commit -m "Added project description"
   ```
4. View commit history:  
   ```bash
   git log --oneline
   ```

***

### 2. Branching in Git
**Goal:** Learn how to create and manage branches for features or experiments.

**Steps:**
1. Create and switch to a new branch:
   ```bash
   git branch feature-login
   git checkout feature-login
   ```
2. Add a file and commit:
   ```bash
   echo "Login feature" > login.txt
   git add login.txt
   git commit -m "Add login feature"
   ```
3. View branch structure:
   ```bash
   git log --oneline --graph --all
   ```

***

### 3. Merging in Git
**Goal:** Combine changes from one branch into another.

**Steps:**
1. Switch back to main branch:
   ```bash
   git checkout main
   ```
2. Merge your feature branch:
   ```bash
   git merge feature-login
   ```
3. Handle any merge conflict manually, then:
   ```bash
   git add .
   git commit
   ```
4. View history again:
   ```bash
   git log --oneline --graph
   ```

***

### 4. Rebase Introduction
**Goal:** Learn how to rewrite history by moving commits on top of another branch.

**Steps:**
1. Create a new branch from `main`:
   ```bash
   git checkout -b feature-payment
   ```
2. Make a couple of commits on that branch.
3. Switch to `main` and add one new commit.
4. Rebase your `feature-payment` branch:
   ```bash
   git checkout feature-payment
   git rebase main
   ```
5. Observe the linear commit history:
   ```bash
   git log --oneline --graph
   ```

***

### 5. Detach HEAD
**Goal:** Explore commits without being on a branch.

**Steps:**
1. View commits:
   ```bash
   git log --oneline
   ```
2. Checkout a specific commit:
   ```bash
   git checkout <commit-hash>
   ```
3. You’re now in a detached HEAD state.  
   Add a file and commit — notice it doesn’t belong to any branch.
4. Move back to `main`:
   ```bash
   git checkout main
   ```

***

### 6. Relative Refs
**Goal:** Navigate commit history using relative references.

**Examples:**
- Move to the commit before HEAD:  
  ```bash
  git checkout HEAD~1
  ```
- Jump two commits back:  
  ```bash
  git checkout HEAD~~
  ```
- Reference parent commits:  
  ```bash
  git show HEAD^
  ```

***

### 7. Reversing Changes in Git
**Goal:** Undo mistakes safely.

**Examples:**
- Undo uncommitted changes:  
  ```bash
  git restore <file>
  ```
- Reset staged changes:  
  ```bash
  git reset HEAD <file>
  ```
- Revert a commit (creates a new commit that undoes changes):  
  ```bash
  git revert <commit-hash>
  ```

***

### 8. Git Cherry Pick
**Goal:** Copy a specific commit from one branch to another.

**Steps:**
1. Identify the commit hash from your `feature-login` branch.
2. Switch to `main` and apply it:
   ```bash
   git cherry-pick <commit-hash>
   ```
3. View how that single commit now appears on `main`.

***

### 9. Interactive Rebase
**Goal:** Edit, reorder, or combine commits.

**Steps:**
1. Run interactive rebase:
   ```bash
   git rebase -i HEAD~3
   ```
2. Change `pick` to:
   - `edit` to modify a commit.
   - `reword` to change the message.
   - `squash` to combine commits.
3. Save and follow Git’s instructions.

***

### 10. Grabbing Just 1 Commit
**Goal:** Extract one commit without merging everything.

**Example:**
1. Use cherry-pick:  
   ```bash
   git cherry-pick <commit-hash>
   ```
2. Or create a patch and apply it:
   ```bash
   git format-patch -1 <commit-hash>
   git apply <patch-file>
   ```

***

### 11. Juggling Commits
**Goal:** Move, drop, or edit commits to refine history.

**Steps:**
1. Use interactive rebase again (`git rebase -i`) to reorder commits.
2. Drop a commit by deleting its line.
3. Move commits between branches:
   ```bash
   git checkout target-branch
   git cherry-pick <commit-range>
   ```

***

### 12. Git Tags
**Goal:** Mark specific points in history (e.g., releases).

**Examples:**
- Add a lightweight tag:
  ```bash
  git tag v1.0
  ```
- Add an annotated tag:
  ```bash
  git tag -a v1.0 -m "First release"
  ```
- Push tags to remote:
  ```bash
  git push origin v1.0
  ```
- List all tags:
  ```bash
  git tag
  ```

***

### 13. Git Describe
**Goal:** Generate a readable description of the current commit.

**Steps:**
- Run:
  ```bash
  git describe
  ```
- It outputs something like:
  ```
  v1.0-3-gf23ab
  ```
  meaning three commits after tag v1.0, with the short hash `f23ab`.

***

