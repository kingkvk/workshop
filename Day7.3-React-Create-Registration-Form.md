## 🏗️ Step 1: Create the Registration Component

Create a new file named **`src/components/RegistrationForm.jsx`**. This component will handle the state and validation for the new registration fields.

### `src/components/RegistrationForm.jsx`

```jsx
import { useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const PHONE_REGEX = /^\d{10}$/; 

// Helper component defined outside the main function (as fixed per ESLint rule)
const ErrorMessage = ({ field, errors }) => (
    errors[field] ? <p className="text-sm text-red-500 mt-1">{errors[field]}</p> : null
);

// Accept the new prop: onSwitchToLogin
function RegistrationForm({ onSwitchToLogin }) {
  // State for all form fields
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  // State for all error messages (using an object for multiple field errors)
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Validation checks
    if (!name.trim()) { newErrors.name = 'Name is required.'; isValid = false; }
    if (!department.trim()) { newErrors.department = 'Department is required.'; isValid = false; }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }
    
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required.';
      isValid = false;
    } else if (!PHONE_REGEX.test(phone)) {
      newErrors.phone = 'Phone must be 10 digits.';
      isValid = false;
    }
    
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Registration Data:', { name, department, email, phone, password });
      alert(`Registration successful for ${name}. You can now log in.`);
      
      // Optionally reset form fields after successful submission
      setName('');
      setDepartment('');
      setEmail('');
      setPhone('');
      setPassword('');
      setErrors({});
      // Automatically switch back to the login page after successful registration
      onSwitchToLogin(); 
    }
  };

  // Helper function for inputs to handle state change and clear immediate errors
  const handleChange = (field, value) => {
    // Clear the specific error for the field being typed into
    if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
    }

    switch (field) {
        case 'name': setName(value); break;
        case 'department': setDepartment(value); break;
        case 'email': setEmail(value); break;
        case 'phone': setPhone(value); break;
        case 'password': setPassword(value); break;
    }
  };

  const inputClass = (field) => {
    return `w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      errors[field] ? 'border-red-500' : 'border-slate-300' 
    }`;
  };


  return (
    <section className="bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-1">Student Registration</h2>
      <p className="text-sm text-slate-700 mb-4">
        Enter your details to create a new LMS account.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
        
        {/* Name Field */}
        <div>
          <label htmlFor="regName" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
          <input id="regName" type="text" value={name} required
            onChange={(e) => handleChange('name', e.target.value)}
            className={inputClass('name')}
          />
          <ErrorMessage field="name" errors={errors} />
        </div>

        {/* Department Field */}
        <div>
          <label htmlFor="regDepartment" className="block text-sm font-medium text-slate-700 mb-1">Department</label>
          <input id="regDepartment" type="text" value={department} required
            onChange={(e) => handleChange('department', e.target.value)}
            className={inputClass('department')}
          />
          <ErrorMessage field="department" errors={errors} />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="regEmail" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input id="regEmail" type="email" value={email} required
            onChange={(e) => handleChange('email', e.target.value)}
            className={inputClass('email')}
          />
          <ErrorMessage field="email" errors={errors} />
        </div>

        {/* Phone Number Field */}
        <div>
          <label htmlFor="regPhone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
          <input id="regPhone" type="tel" value={phone} required
            onChange={(e) => handleChange('phone', e.target.value)}
            className={inputClass('phone')}
          />
          <ErrorMessage field="phone" errors={errors} />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="regPassword" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input id="regPassword" type="password" value={password} required
            onChange={(e) => handleChange('password', e.target.value)}
            className={inputClass('password')}
          />
          <ErrorMessage field="password" errors={errors} />
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded">
          Register Account
        </button>
      </form>

      {/* Add Login Link */}
      <div className="mt-4 text-center text-sm">
        <p className="text-slate-600">
          Already have an account?{' '}
          <button 
            type="button" 
            onClick={onSwitchToLogin} 
            className="text-blue-600 hover:text-blue-800 font-medium bg-transparent p-0 border-none"
          >
            Log in here
          </button>
        </p>
      </div>

    </section>
  );
}

export default RegistrationForm;
```

-----

## 🔄 Step 2: Implement Page Switching in `App.jsx`

We need a way to show *either* the `LoginForm` *or* the `RegistrationForm`. Since this page switching relates to the authentication flow, we'll introduce a state variable in `App.jsx` to control which form is visible.

### Update `src/App.jsx`

1.  **Import the new component.**
2.  **Add State** to track the current view (`'login'` or `'register'`).
3.  **Create a conditional render function** to display the correct form.

<!-- end list -->

```jsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import About from './components/About';
import ContactForm from './components/ContactForm';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

// Dummy Data for the Course Cards
const courses = [
  { id: 1, title: 'HTML & CSS Basics', description: 'Learn the building blocks of the web: structure and styling.', level: 'Beginner', duration: '6 hours' },
  { id: 2, title: 'JavaScript Fundamentals', description: 'Make your web pages interactive with core JavaScript concepts.', level: 'Beginner', duration: '8 hours' },
  { id: 3, title: 'React for Beginners', description: 'Build modern single-page applications using React.', level: 'Intermediate', duration: '10 hours' },
  { id: 4, title: 'Node & Express API', description: 'Create backend APIs and connect them to your frontend apps.', level: 'Intermediate', duration: '9 hours' },
];


function App() {
  // State to control which auth form is visible: 'login' or 'register'
  const [authView, setAuthView] = useState('login'); 

  // Function to switch between Login and Registration forms
  const toggleAuthView = (view) => {
    setAuthView(view);
  };

  // Function to conditionally render the Login/Registration content
  const renderAuthSection = () => {
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
    // Structure fix: This wrapper is now full-width due to index.css changes
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col">
      <Header />
      <Hero />

      {/* Main content area */}
      <main className="px-4 py-8 grow w-full"> 
        
        {/* All main content is centered and width-limited inside this div for readability */}
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
          
          {/* Conditional Rendering for Auth Forms */}
          <section id="auth" className="mb-10">
            {renderAuthSection()}
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
```

-----

## 🔗 Step 3: Add the Link to `LoginForm.jsx`

Finally, we need to modify the `LoginForm` component to show the "Don't have an account?" link and use the `onSwitchToRegister` prop we passed from `App.jsx`.

### Update `src/components/LoginForm.jsx`

The `LoginForm` component now accepts a prop, so we must add it to the function signature and use it.

```jsx
import { useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

// Helper component defined outside the main function (Fixes the ESLint error)
const ErrorMessage = ({ error }) => (
    error ? <p className="text-sm text-red-500 mt-1">{error}</p> : null
);

/**
 * LoginForm component handles student login, state management, validation,
 * and provides a link to switch to the registration view.
 * * @param {object} props
 * @param {function} props.onSwitchToRegister - Function to switch to the registration form.
 */
function LoginForm({ onSwitchToRegister }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Separate states for field-specific errors
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Function to validate the form inputs
  const validateForm = () => {
    // Clear all previous errors
    setEmailError('');
    setPasswordError('');

    let isValid = true; 

    // Email Validation
    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }
    
    // Password Validation
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
      // Success path
      console.log('Login successful:', { email, password });
      alert(`Login successful for: ${email}`);
      
      // Reset fields on successful login
      setEmail('');
      setPassword('');
    } else {
      // Failure path (errors are already set in state by validateForm)
      console.log('Login failed due to validation errors.');
    }
  };
  
  // Conditional Tailwind class helper for border color
  const inputClass = (errorState) => {
    return `w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      errorState ? 'border-red-500' : 'border-slate-300' 
    }`;
  };

  return (
    <section id="login" className="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-1">Student Login</h2>
      <p className="text-sm text-slate-700 mb-4">
        Use your LMS account to continue your courses.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
        
        {/* Email Field */}
        <div>
          <label htmlFor="loginEmail" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            id="loginEmail"
            name="loginEmail"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(''); // Clear specific error on change
            }}
            className={inputClass(emailError)}
          />
          <ErrorMessage error={emailError} />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="loginPassword" className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            id="loginPassword"
            name="loginPassword"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError(''); // Clear specific error on change
            }} 
            className={inputClass(passwordError)}
          />
          <ErrorMessage error={passwordError} />
        </div>

        <button type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded">
          Login
        </button>
      </form>
      
      {/* Link to Registration */}
      <div className="mt-4 text-center text-sm">
        <p className="text-slate-600">
          Don't have an account?{' '}
          <button 
            type="button" 
            onClick={onSwitchToRegister} 
            className="text-blue-600 hover:text-blue-800 font-medium bg-transparent p-0 border-none"
          >
            Register for an account
          </button>
        </p>
      </div>

    </section>
  );
}

export default LoginForm;
```

**Testing:** Now, when you click the "Login" link in the header, the `LoginForm` appears. When you click **"Register for an account"** at the bottom, the state in `App.jsx` changes, and the `RegistrationForm` will be rendered in its place\!
