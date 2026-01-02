## 🛠️ Step 1: Install React Router

First, stop your development server (Ctrl+C in the terminal) and install the necessary package:

```bash
npm install react-router-dom
```

-----

## 🔄 Step 2: Create a Dedicated Authentication Page (`AuthPage.jsx`)

We will combine the logic for showing the Login or Registration forms into a new, single component that will act as the `/auth` page.

Create a new file: **`src/pages/AuthPage.jsx`**

```jsx
// src/pages/AuthPage.jsx
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

function AuthPage() {
  // State to control which auth form is visible: 'login' or 'register'
  const [authView, setAuthView] = useState('login'); 

  const toggleAuthView = (view) => {
    setAuthView(view);
  };

  const renderAuthForm = () => {
    if (authView === 'login') {
      return (
        <LoginForm 
          // Prop to switch to the registration view
          onSwitchToRegister={() => toggleAuthView('register')} 
        />
      );
    } else {
      return (
        <RegistrationForm 
          // Prop to switch back to the login view
          onSwitchToLogin={() => toggleAuthView('login')}
        />
      );
    }
  };

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col pt-16 pb-8">
      <main className="mx-auto px-4 py-8 grow w-full">
        {/* Center the auth content */}
        <div className="max-w-md mx-auto"> 
          {renderAuthForm()}
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
```

-----

## 🗺️ Step 3: Configure Routing in `src/main.jsx`

We need to wrap the application in a router and define the routes for the main page (`/`) and the new auth page (`/auth`).

### Update `src/main.jsx`

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'; // This will be the layout for the main content
import AuthPage from './pages/AuthPage.jsx'; // New Auth Page
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Route for the main LMS marketing page */}
        <Route path="/" element={<App />} /> 
        
        {/* Route for the standalone Login/Registration page */}
        <Route path="/auth" element={<AuthPage />} /> 
      </Routes>
    </Router>
  </React.StrictMode>,
);
```

-----

## 🗑️ Step 4: Clean Up `src/App.jsx`

The `App.jsx` file should no longer contain the auth view logic or render the forms. It will focus solely on the LMS marketing page content (Header, Hero, Courses, About, Contact, Footer).

### Update `src/App.jsx`

1.  **Remove Auth Imports:** Remove `useState`, `LoginForm`, `RegistrationForm`, and `renderAuthSection`.
2.  **Remove Auth Section JSX:** Delete the `<section id="auth">` block.
3.  **Use `Link`:** Import `Link` and use it for navigation instead of standard HTML links where appropriate (like the Login button).

<!-- end list -->

```jsx
// src/App.jsx
import { Link } from 'react-router-dom'; // 👈 Import Link
import Header from './components/Header';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Dummy Data for the Course Cards (same as before)
const courses = [ 
  { id: 1, title: 'HTML & CSS Basics', description: 'Learn the building blocks of the web: structure and styling.', level: 'Beginner', duration: '6 hours' },
  { id: 2, title: 'JavaScript Fundamentals', description: 'Make your web pages interactive with core JavaScript concepts.', level: 'Beginner', duration: '8 hours' },
  { id: 3, title: 'React for Beginners', description: 'Build modern single-page applications using React.', level: 'Intermediate', duration: '10 hours' },
  { id: 4, title: 'Node & Express API', description: 'Create backend APIs and connect them to your frontend apps.', level: 'Intermediate', duration: '9 hours' },
];


function App() {
  // ❌ Removed: useState, renderAuthSection, and toggleAuthView

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col">
      <Header />
      <Hero />

      <main className="px-4 py-8 grow w-full"> 
        <div className="max-w-5xl mx-auto"> 

          {/* Courses Section */}
          <section id="courses" className="mb-10">
            <h2 className="text-2xl font-semibold mb-1">Available Courses</h2>
            <p className="text-sm text-slate-600 mb-4">
              Pick a course to start learning today.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>

          <About />
          <ContactForm />
          
          {/* ❌ Removed: Auth Section JSX */}
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
```

-----

## 🔗 Step 5: Update the Login Link in `Header.jsx`

Finally, update the "Login" link in your `Header.jsx` to use the `Link` component and navigate to the new `/auth` path.

### Update `src/components/Header.jsx`

```jsx
// src/components/Header.jsx
import { Link } from 'react-router-dom'; // 👈 Import Link

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
        {/* Use standard anchor links for in-page navigation (since they point to #hashes) */}
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-slate-200 hover:text-white"
          >
            {link.name}
          </a>
        ))}
        {/* Use Link component for navigating to the new /auth page */}
        <Link
          to="/auth" // 👈 Navigate to the dedicated Auth page
          className="ml-2 border border-blue-500 text-blue-300 hover:text-white hover:bg-blue-500 rounded px-3 py-1"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
```

Now, when a user clicks "Login," they will be navigated to a completely separate page dedicated to the authentication forms.