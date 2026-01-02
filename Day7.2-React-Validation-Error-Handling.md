## 🔒 Form Validation and Error Handling

We need to add a few things to our component:

1.  **Error State**: A new state variable to store any validation error messages.
2.  **Validation Logic**: A function to check the email format before allowing form submission.
3.  **User Feedback**: Display the error message near the email input if validation fails.

### Updated `src/components/LoginForm.jsx`

```jsx
// src/components/LoginForm.jsx
import { useState } from 'react';

// Simple Regex for basic email format validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // NEW: Separate states for field-specific errors
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Function to validate the form inputs
  const validateForm = () => {
    // Clear all previous errors at the start of validation
    setEmailError('');
    setPasswordError('');

    let isValid = true; 

    // ** Validation Check 1 & 2: Email **
    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }
    
    // ** Validation Check 3: Simple Password Check (e.g., min length) **
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
      
      // Optionally reset form fields after success
      setEmail('');
      setPassword('');
    } else {
      // Failure path (errors are already set in state)
      console.log('Login failed due to validation errors.');
    }
  };

  return (
    <section id="login" className="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-1">Student Login</h2>
      <p className="text-sm text-slate-700 mb-4">
        Use your LMS account to continue your courses.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
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
            // Conditional border style based on emailError
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              emailError ? 'border-red-500' : 'border-slate-300' 
            }`}
          />
          
          {/* Display EMAIL-specific error message */}
          {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError(''); // Clear specific error on change
            }} 
            // Conditional border style based on passwordError
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              passwordError ? 'border-red-500' : 'border-slate-300' 
            }`}
          />
          
          {/* Display PASSWORD-specific error message */}
          {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}
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

## 📋 Key Takeaways from the Validation

  * **`useState('')` for `error`**: We initialized a state variable to hold a string error message. If the string is empty, there is no error.
  * **`validateForm()` Function**: This function encapsulates all validation rules (email format, password length, etc.). It returns `true` or `false` and is responsible for setting the `error` state.
  * **`handleSubmit` Check**: The form submission is now conditional: `if (validateForm()) { ... login logic ... }`.
  * **Error Display**: The line `{error && <p className="text-sm text-red-500 mt-1">{error}</p>}` conditionally renders the error message only when the `error` state is not empty.

Your login form now enforces basic rules for email and password\!

Would you like to extend this by showing separate error messages for the email and password fields, instead of a single general error message?