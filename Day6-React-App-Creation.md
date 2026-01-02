## 🚀 Step 1: Set Up the React Project

You'll start by using **Vite**, a modern build tool, to quickly scaffold a new React project.

### 1.1 Create the Project

Open your terminal or command prompt and run the following commands:

1.  **Create the Vite React project:**

    ```bash
    npm create vite@latest lms-app -- --template react
    ```

      * *Note: If prompted, select **`react`** for the framework and **`javascript`** for the variant.*

2.  **Navigate into the new project directory:**

    ```bash
    cd lms-app
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

### 1.2 Install and Configure Tailwind CSS

Since you are using Tailwind, you need to install it in your new React project:

1.  **Install Tailwind dependencies:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

2.  **Generate Tailwind configuration files:**

    ```bash
    npm install tailwindcss @tailwindcss/vite
    ```

   

3.  **Configure `vite.config.js`:**
    Update the `content` array in `vite.config.js` to tell Tailwind where to look for class names in your React files:

    ```javascript
    // vite.config.js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [
      react(),
      tailwindcss(),
      ],
    })

    ```

4.  **Add Tailwind Directives to CSS:**
    Replace the entire content of `src/index.css` with the Tailwind directives:

    ```css
    /* src/index.css */
    @import "tailwindcss";
    
    ```

### 1.3 Clean Up Boilerplate

1.  **Remove `src/App.css`** (you will use `src/index.css` for Tailwind).

2.  **Clear the content of `src/App.jsx`**:
    Replace the default content with a simple clean component:

    ```jsx
    // src/App.jsx
    function App() {
      return (
        <>
          <h1 className="text-3xl font-bold underline">
            MyLMS React
          </h1>
        </>
      );
    }
    export default App;
    ```

3.  **Clean up `src/main.jsx`** by removing the import of `App.css` and the logo.

-----

## 🧱 Step 2: Create Reusable Components

The strength of React is breaking the UI into smaller, independent, and reusable pieces. You'll create a new folder `src/components` for these files.

### 2.1 Component Structure

Create the following files inside `src/components`:

  * `src/components/Header.jsx`
  * `src/components/Hero.jsx`
  * `src/components/CourseCard.jsx`
  * `src/components/About.jsx`
  * `src/components/ContactForm.jsx`
  * `src/components/LoginForm.jsx`
  * `src/components/Footer.jsx`

-----

## 🧩 Step 3: Implement the Components

Now, you'll copy the HTML structure for each section and convert it to **JSX**, applying the Tailwind classes.

### 3.1 `src/components/Header.jsx`

Copy the Header HTML and make the following changes for JSX:

  * Replace `class="..."` with **`className="..."`**.
  * Add a temporary data structure for navigation links.

<!-- end list -->

```jsx
// src/components/Header.jsx
const navLinks = [
  { name: 'Courses', href: '#courses' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="bg-slate-900 text-white flex items-center justify-between px-6 py-3">
      <div className="text-xl font-bold">MyLMS</div>
      <nav className="flex items-center space-x-4 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-slate-200 hover:text-white"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#login"
          className="ml-2 border border-blue-500 text-blue-300 hover:text-white hover:bg-blue-500 rounded px-3 py-1"
        >
          Login
        </a>
      </nav>
    </header>
  );
}

export default Header;
```

-----

### 3.2 `src/components/Hero.jsx`

Copy the Hero Section HTML and use **`className`**.

```jsx
// src/components/Hero.jsx
function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-500 text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Learn Web Development the Smart Way
        </h1>
        <p className="text-sm md:text-base max-w-xl mb-5">
          Browse interactive courses, track your progress, and build real projects in our learning management system.
        </p>
        <button className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-5 py-2 rounded">
          Browse All Courses
        </button>
      </div>
    </section>
  );
}

export default Hero;
```

-----

### 3.3 `src/components/CourseCard.jsx`

This component is key for reusability. It will accept the course data via **props**.

```jsx
// src/components/CourseCard.jsx
/* Course is an object like: 
   { title: 'HTML & CSS Basics', description: '...', duration: '6 hours', level: 'Beginner' } 
*/
function CourseCard({ course }) {
  const { title, description, level, duration } = course;

  return (
    <article className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex flex-col">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-700 mb-2">
        {description}
      </p>
      <p className="text-xs text-slate-500 mb-3">{level} • {duration}</p>
      <button className="mt-auto inline-block bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 text-sm px-3 py-1 rounded">
        View Course
      </button>
    </article>
  );
}

export default CourseCard;
```

-----

### 3.4 `src/components/About.jsx`

Copy the About Section HTML.

```jsx
// src/components/About.jsx
function About() {
  return (
    <section id="about" className="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-2">About MyLMS</h2>
      <p className="text-sm text-slate-700">
        MyLMS is a simple learning management system designed to help students
        learn web development step by step with practical projects.
      </p>
    </section>
  );
}

export default About;
```

-----

### 3.5 `src/components/ContactForm.jsx`

Copy the Contact Section HTML. Note that the `<label>`'s `for` attribute becomes **`htmlFor`** in JSX.

```jsx
// src/components/ContactForm.jsx
function ContactForm() {
  // In a real app, you would add an event handler like onSubmit={handleSubmit}
  return (
    <section id="contact" className="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-1">Contact Us</h2>
      <p className="text-sm text-slate-700 mb-4">
        Have questions about a course? Send us a message.
      </p>

      <form className="flex flex-col gap-3">
        <div>
          <label htmlFor="studentName" className="block text-sm font-medium text-slate-700 mb-1">
            Name
          </label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="studentEmail" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            id="studentEmail"
            name="studentEmail"
            type="email"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
          ></textarea>
        </div>

        <button type="submit"
          className="self-start bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
```

-----

### 3.6 `src/components/LoginForm.jsx`

Copy the Login Section HTML, using **`htmlFor`** for labels.

```jsx
// src/components/LoginForm.jsx
function LoginForm() {
  return (
    <section id="login" className="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-1">Student Login</h2>
      <p className="text-sm text-slate-700 mb-4">
        Use your LMS account to continue your courses.
      </p>

      <form className="flex flex-col gap-3 max-w-sm">
        <div>
          <label htmlFor="loginEmail" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            id="loginEmail"
            name="loginEmail"
            type="email"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="loginPassword" className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            id="loginPassword"
            name="loginPassword"
            type="password"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded">
          Login
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
```

-----

### 3.7 `src/components/Footer.jsx`

Copy the Footer HTML.

```jsx
// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-center text-xs py-3">
      © 2025 MyLMS. All rights reserved.
    </footer>
  );
}

export default Footer;
```

-----

## 🏗️ Step 4: Assemble the Main Application (`App.jsx`)

Finally, you'll import all the smaller components and put them together in the main `App.jsx` file. You'll also define the course data here.

```jsx
// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import About from './components/About';
import ContactForm from './components/ContactForm';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

// Dummy Data for the Course Cards
const courses = [
  {
    id: 1,
    title: 'HTML & CSS Basics',
    description: 'Learn the building blocks of the web: structure and styling.',
    level: 'Beginner',
    duration: '6 hours'
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description: 'Make your web pages interactive with core JavaScript concepts.',
    level: 'Beginner',
    duration: '8 hours'
  },
  {
    id: 3,
    title: 'React for Beginners',
    description: 'Build modern single-page applications using React.',
    level: 'Intermediate',
    duration: '10 hours'
  },
  {
    id: 4,
    title: 'Node & Express API',
    description: 'Create backend APIs and connect them to your frontend apps.',
    level: 'Intermediate',
    duration: '9 hours'
  },
];


function App() {
  // Apply the body classes from the original HTML here
  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col">
      <Header />
      <Hero />

      <main className="max-w-5xl mx-auto px-4 py-8 grow">
        {/* Courses Section */}
        <section id="courses" className="mb-10">
          <h2 className="text-2xl font-semibold mb-1">Available Courses</h2>
          <p className="text-sm text-slate-600 mb-4">
            Pick a course to start learning today.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Map over the courses array to render CourseCard components */}
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <About />
        <ContactForm />
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
```

-----

## ✅ Step 5: Run the Project

Your project is now converted\! You can run it to see the result.

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

2.  Open the URL provided in your terminal (usually `http://localhost:5173`) in your web browser.

You now have a fully functional React application, using **components** and **props** to manage your UI structure and data\!

Would you like to explore how to add **state** to one of the forms (like the Login form) to capture user input?