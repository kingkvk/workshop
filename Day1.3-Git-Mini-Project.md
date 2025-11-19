
***

### 1. Introduction to Git Commits  
**Concept:** Commits capture snapshots of your project history.  
**Mini Project:** Initialize the NoteMaster project.

**Steps:**
1. Create and initialize a new project:
   ```bash
   mkdir NoteMaster && cd NoteMaster
   git init
   echo "# NoteMaster App" > README.md
   ```
2. Add and commit your first file:
   ```bash
   git add README.md
   git commit -m "Initial commit with README"
   ```
3. Add a starter Python script:
   ```bash
   echo "print('Welcome to NoteMaster')" > main.py
   git add main.py
   git commit -m "Add main application script"
   ```
4. View the commit history:
   ```bash
   git log --oneline
   ```

**Lesson:** Each logical change should be a separate commit for clarity.

***

### 2. Branching in Git  
**Concept:** Branches let you work independently on features.  
**Mini Project:** Add a “create note” feature on a new branch.

**Steps:**
1. Create a branch for the feature:
   ```bash
   git checkout -b feature/add-notes
   ```
2. Add code for creating notes:
   ```bash
   echo "def add_note(): print('Note added')" >> main.py
   git add main.py
   git commit -m "Add note creation function"
   ```
3. View all branches:
   ```bash
   git branch
   ```
4. Switch back to main and compare:
   ```bash
   git checkout main
   git diff main feature/add-notes
   ```

**Lesson:** Branches isolate features and simplify experimentation.

***

### 3. Merging in Git  
**Concept:** Merge combines changes from different branches.  
**Mini Project:** Integrate the “add note” feature into the main app.

**Steps:**
1. Merge your branch into main:
   ```bash
   git checkout main
   git merge feature/add-notes
   ```
2. Delete the merged branch:
   ```bash
   git branch -d feature/add-notes
   ```
3. Review the updated code:
   ```bash
   git log --oneline --graph
   ```

**Lesson:** Merging keeps development synchronized across teams.

***

### 4. Rebase Introduction  
**Concept:** Rebase keeps history linear by reapplying commits.  
**Mini Project:** Add a “list notes” feature and rebase it!

**Steps:**
1. Create a branch:
   ```bash
   git checkout -b feature/list-notes
   ```
2. Add a list function in `main.py`:
   ```bash
   echo "def list_notes(): print('Listing all notes')" >> main.py
   git add main.py
   git commit -m "Add list notes feature"
   ```
3. Add a commit in main:
   ```bash
   echo "## Features: Add Notes, List Notes" >> README.md
   git add README.md
   git commit -m "Update README with features"
   ```
4. Rebase your branch:
   ```bash
   git checkout feature/list-notes
   git rebase main
   ```

**Lesson:** Rebasing maintains a clean, readable history.

***

### 5. Detach HEAD  
**Concept:** Test older versions safely.  
**Mini Project:** Compare two old versions of NoteMaster.

**Steps:**
1. Display commit list:
   ```bash
   git log --oneline
   ```
2. Check an old commit:
   ```bash
   git checkout HEAD~2
   python main.py
   ```
3. Restore the latest version:
   ```bash
   git checkout main
   ```

**Lesson:** Detached HEAD helps in debugging older states.

***

### 6. Relative Refs  
**Concept:** Move around history efficiently with shortcuts.  
**Mini Project:** Analyze evolution of a feature.

**Steps:**
1. View older commits:
   ```bash
   git show HEAD~1
   ```
2. Compare two previous versions:
   ```bash
   git diff HEAD~2 HEAD~1
   ```

**Lesson:** Relative refs make Git exploration faster.

***

### 7. Reversing Changes in Git  
**Concept:** Undo mistakes at different stages.  
**Mini Project:** Revert a bug in NoteMaster.

**Steps:**
1. Undo last commit but keep files:
   ```bash
   git reset --soft HEAD~1
   ```
2. Revert a previous commit:
   ```bash
   git revert <commit-hash>
   ```
3. Restore a file to an earlier state:
   ```bash
   git checkout HEAD~1 -- main.py
   ```

**Lesson:** Reversing changes safely preserves your work history.

***

### 8. Git Cherry Pick  
**Concept:** Copy specific commits from one branch to another.  
**Mini Project:** Move a bug fix from “patch” branch to main.

**Steps:**
1. Create a patch branch and commit a fix:
   ```bash
   git checkout -b patch/fix-typo
   echo "# Fixed typo" >> README.md
   git add README.md
   git commit -m "Fix minor typo"
   ```
2. Switch to main and apply just that commit:
   ```bash
   git checkout main
   git cherry-pick <commit-hash>
   ```

**Lesson:** Cherry-pick selectively brings helpful changes.

***

### 9. Interactive Rebase  
**Concept:** Edit or squash commits cleanly.  
**Mini Project:** Polish commit messages before release.

**Steps:**
1. View history:
   ```bash
   git log --oneline
   ```
2. Rebase interactively:
   ```bash
   git rebase -i HEAD~3
   ```
3. Use `reword` to rename commits or `squash` to combine small ones.

**Lesson:** Interactive rebase helps keep history clear for collaboration.

***

### 10. Grabbing Just One Commit  
**Concept:** Extract a single change as a patch.  
**Mini Project:** Share a one-line bug fix.

**Steps:**
1. Create a patch file:
   ```bash
   git format-patch -1 <commit-hash>
   ```
2. Apply the patch elsewhere:
   ```bash
   git apply 0001-Fix.patch
   ```

**Lesson:** Great method for transferring patches manually.

***

### 11. Juggling Commits  
**Concept:** Move, delete, or rearrange commits.  
**Mini Project:** Organize commits before pushing to remote.

**Steps:**
1. Open interactive rebase:
   ```bash
   git rebase -i HEAD~5
   ```
2. Reorder or drop unnecessary commits.  
3. Move filtered commits to a new branch:
   ```bash
   git checkout -b stable
   git cherry-pick <commit-range>
   ```

**Lesson:** Juggling commits helps prepare clean contributions.

***

### 12. Git Tags  
**Concept:** Mark key project versions.  
**Mini Project:** Tag NoteMaster releases.

**Steps:**
1. Tag your stable version:
   ```bash
   git tag -a v1.0 -m "Initial release of NoteMaster"
   ```
2. Push tags:
   ```bash
   git push origin --tags
   ```
3. List all tags:
   ```bash
   git tag
   ```

**Lesson:** Tags simplify versioning and deployment tracking.

***

### 13. Git Describe  
**Concept:** Generate unique version identifiers based on history.  
**Mini Project:** Add dynamic version tracking to NoteMaster.

**Steps:**
1. Run:
   ```bash
   git describe --tags
   ```
2. Automatically embed version into your app:
   ```python
   import os
   version = os.popen("git describe --tags").read().strip()
   print(f"NoteMaster version: {version}")
   ```

**Lesson:** Git describe helps integrate version metadata directly into your software.

***

### Final Cumulative Project: Team Collaboration Simulation  
Combine everything into one bigger scenario.

**Scenario:**  
You and a teammate develop NoteMaster together. Practice the following:
- You work on `feature/add-reminder`.
- Teammate works on `feature/search`.
- Both push changes to GitHub.
- Merge changes, handle conflicts, tag a release (`v2.0`), and rebase your local branch before pushing.

**Concepts reinforced:** branching, merging, rebasing, cherry-picking, tagging, and reverting.

***

