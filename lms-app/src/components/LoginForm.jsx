// src/components/LoginForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

const ErrorMessage = ({ error }) => (
    error ? <p className="text-sm text-red-500 mt-1">{error}</p> : null
);

function LoginForm({ onSwitchToRegister }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth(); 

  const validateForm = () => {
    setEmailError('');
    setPasswordError('');
    let isValid = true; 

    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }
    
    if (password.length < 6) { 
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
      const success = login(email); 

      if (success) {
        let path = '/'; 
        if (email.includes('admin@')) {
          path = '/admin';
        } else if (email.includes('instructor@')) {
          path = '/instructor';
        }
        
        navigate(path);
        setEmail('');
        setPassword('');
      } else {
        alert('Login failed. Please use one of the mock emails (admin@lms.com, instructor@lms.com, student@lms.com).');
        setPasswordError('Invalid credentials.');
      }
    } else {
      console.log('Login failed due to client-side validation errors.');
    }
  };
  
  const inputClass = (errorState) => {
    return `w-full border rounded px-3 py-2 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
              if (emailError) setEmailError(''); 
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
              if (passwordError) setPasswordError(''); 
            }} 
            className={inputClass(passwordError)}
          />
          <ErrorMessage error={passwordError} />
        </div>

        {/* Login Button (High Contrast) */}
        <button type="submit"
          className="!bg-slate-900 hover:!bg-slate-700 text-white text-base font-medium px-4 py-3 rounded mt-2">
          Login
        </button>
      </form>

      {/* Link to Registration */}
      <div className="mt-4 text-center text-sm">
        <p className="text-slate-600 flex items-center justify-center space-x-1">
          <span>Don't have an account?</span>
          {/* ✅ FIX: Used '!' to force override of global button styles.
              !bg-transparent, !border-none, !text-blue-600
          */}
          <button 
            type="button" 
            onClick={onSwitchToRegister} 
            className="!bg-transparent !border-none !p-0 !m-0 !text-blue-600 hover:!text-blue-800 font-medium cursor-pointer underline hover:no-underline"
          >
            Register for an account
          </button>
        </p>
      </div>

    </section>
  );
}

export default LoginForm;