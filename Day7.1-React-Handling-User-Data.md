## 💻State Management in the Login Form

To make your **Login Form** functional, you need React to "remember" what the user types into the input fields. We'll do this using the `useState` hook.

We will focus on the **`src/components/LoginForm.jsx`** file.

### 1\. Goal: Control Input Fields

In React, input fields should be **"controlled components"**. This means:

1.  We use **state** to store the value of the input.
2.  We use the **`onChange`** event handler to update the state every time a key is pressed.
3.  We set the input's **`value`** property from the state.

### 2\. Update `src/components/LoginForm.jsx`

We need to import `useState` and define two state variables: one for email and one for password.

```jsx
// src/components/LoginForm.jsx
import { useState } from 'react'; // 👈 Import useState

function LoginForm() {
  // 1. Define State Variables for inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Event Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default browser refresh
    console.log('Login attempt:', { email, password });
    alert(`Attempting to log in with Email: ${email}`);
    // In a real app, you would send this data to a backend API here
  };

  return (
    <section id="login" className="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-1">Student Login</h2>
      <p className="text-sm text-slate-700 mb-4">
        Use your LMS account to continue your courses.
      </p>

      {/* 3. Attach handleSubmit to the form */}
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
            // 4. Control the Email Input
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
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
            // 5. Control the Password Input
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on change
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

### 3\. Test the Functionality

After saving this file, when you interact with the form in your browser:

1.  Type into the email and password fields—the `onChange` handlers update the state.
2.  Click the **Login** button.
3.  The `handleSubmit` function runs, and you should see an `alert` with the values you typed.

This is the core concept for handling user data in React\!