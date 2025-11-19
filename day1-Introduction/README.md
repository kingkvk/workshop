
## Day 1: Introduction and Environment Setup

### 1. What is a Learning Management System (LMS)?
- Definition: A software application to deliver, manage, and track learning content and progress.
- Use Cases: Universities, corporate training, online courses.
- Example: Canvas, Moodle, EdX platforms enable course delivery, assignments, and progress tracking.

### 2. Overview of the Full Stack Technology
- **React.js (Frontend)**
  - Meaning: A JavaScript library for building interactive user interfaces.
  - Role: Handles the presentation layer and user experience.
- **Node.js and Express.js (Backend)**
  - Meaning: Node.js is a JavaScript runtime; Express is a web application framework for Node.js.
  - Role: Server-side logic, handling API requests, and routing.
- **MongoDB Atlas (Database)**
  - Meaning: A scalable cloud-based NoSQL database for storing application data.
  - Role: Persisting user, course, and assignment information.
- **JWT Authentication**
  - Meaning: JSON Web Tokens for secure user authentication without server-side sessions.
- **AWS S3 and EC2 (Deployment)**
  - Meaning: Amazon cloud services for hosting frontend (S3) and backend (EC2) applications.
- **Git and GitHub (Version Control)**
  - Meaning: Systems for tracking changes in code and collaborative development.

### 3. Installation and Setup Steps

#### Install Node.js and npm
- Download from nodejs.org and install.
- Verify installation: `node -v` and `npm -v` commands.

#### Install Git
- Download and install from git-scm.com.
- Verify installation: `git --version` command.

#### Setup VS Code (or preferred IDE)
- Download and install [Visual Studio Code](https://code.visualstudio.com/download) .
- Install useful extensions: ESLint, Prettier, GitLens.

#### Create GitHub Account and Repository
- Sign up on github.com.
- Create a new repository for the LMS project.
- Clone the repo locally using `git clone <repo-url>`.

#### Setup MongoDB Atlas
- Register on mongodb.com/cloud/atlas.
- Create a free cluster and get connection string for the application.

#### AWS Account Setup (Optional for Day 1)
- Create AWS account if needed for later deployment steps.
