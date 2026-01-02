### 1\. 🔑 Step 1: Define User Roles and Mock Data

Create the constant data file for mock authentication. This separation avoids Fast Refresh issues.

**File:** `src/data/authMocks.js`

```javascript
// src/data/authMocks.js
// Defines the mock users and their associated roles for testing login.

export const MOCK_USER = {
  admin: { 
    id: 1, 
    name: "Admin User", 
    email: "admin@lms.com", 
    role: "admin" 
  },
  instructor: { 
    id: 2, 
    name: "Alice Instructor", 
    email: "instructor@lms.com", 
    role: "instructor" 
  },
  student: { 
    id: 3, 
    name: "Bob Student", 
    email: "student@lms.com", 
    role: "student" 
  },
};
```

-----

### 2\. 🔑 Step 2: Creating the Global Auth Context

The context manages the global user state and provides `login/logout` functions.

**File:** `src/context/AuthContext.jsx`

```jsx
import React, { createContext, useContext, useState } from 'react';
import { MOCK_USER } from '../data/authMocks'; 

const AuthContext = createContext(null);

// Custom Hook for consumption
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  // Mock login function (takes only email for mock purposes)
  const login = (email) => {
    
    if (email === MOCK_USER.admin.email) {
      setUser(MOCK_USER.admin);
      return true;
    } else if (email === MOCK_USER.instructor.email) {
      setUser(MOCK_USER.instructor);
      return true;
    } else if (email === MOCK_USER.student.email) {
      setUser(MOCK_USER.student);
      return true;
    }
    
    setUser(null);
    return false;
  };

  const logout = () => {
    setUser(null);
  };
  
  const role = user ? user.role : 'guest';

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

-----

### 3\. 🔒 Step 3: Implement Protected Route Component

This component acts as the gatekeeper for restricted routes.

**File:** `src/components/ProtectedRoute.jsx`

```jsx
// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ allowedRoles, children }) {
  const { user, role } = useAuth();

  // 1. Redirect if not logged in
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // 2. Redirect if role is not authorized
  if (!allowedRoles.includes(role)) {
    alert('Access Denied. You do not have the required permissions.');
    return <Navigate to="/" replace />;
  }

  // 3. Render content if authorized
  return children;
}

export default ProtectedRoute;
```

-----

### 4\. 🌐 Step 4: Configure Router and Integration (`main.jsx`)

Wrap the application, define the routes, and apply the `ProtectedRoute`.

**File:** `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthPage from './pages/AuthPage.jsx'

import { AuthProvider } from './context/AuthContext.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import InstructorDashboard from './pages/InstructorDashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public/Student Route */}
          <Route path='/' element={<App/> }/>
          <Route path='/auth' element={<AuthPage/>}/>
          
          {/* Protected Routes */}
          <Route path='/admin' element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard/>
            </ProtectedRoute>
          }/>
          
          <Route path='/instructor' element={
            <ProtectedRoute allowedRoles={['instructor']}>
              <InstructorDashboard/>
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>,
)
```

-----

### 5\. 🚪 Step 5: Update Login Logic and Redirection

Modify the Login Form to authenticate globally and navigate based on the successful user's role.

**File:** `src/components/LoginForm.jsx` (Core Logic)

```jsx
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
  const { login } = useAuth(); // Use the global login function

  const validateForm = () => {
    // ... (Validation logic remains the same) ...
    setEmailError('');
    setPasswordError('');
    let isValid = true; 
    if (!email.trim()) { setEmailError('Email is required.'); isValid = false; } 
    else if (!EMAIL_REGEX.test(email)) { setEmailError('Please enter a valid email address.'); isValid = false; }
    if (password.length < 6) { setPasswordError('Password must be at least 6 characters long.'); isValid = false; }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
      // 1. Call global login function (passing only email for mock)
      const success = login(email); 

      if (success) {
        // 2. Determine path based on mock email/role
        let path = '/'; 
        if (email.includes('admin@')) {
          path = '/admin';
        } else if (email.includes('instructor@')) {
          path = '/instructor';
        }
        
        // 3. Navigate to the appropriate dashboard
        navigate(path);
        setEmail('');
        setPassword('');
        
      } else {
        alert('Login failed. Invalid credentials.');
        setPasswordError('Invalid credentials.');
      }
    } 
  };
  
  // ... (rest of the component and JSX remains the same, using inputClass helper) ...
  const inputClass = (errorState) => {
    return `w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      errorState ? 'border-red-500' : 'border-slate-300' 
    }`;
  };

  return (
    <section id="login" className="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
      <h2 className="text-xl font-semibold mb-1">Student Login</h2>
      <p className="text-sm text-slate-700 mb-4">Use your LMS account to continue your courses.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
        
        {/* Email Field JSX using inputClass(emailError) and ErrorMessage */}
        <div>
          <label htmlFor="loginEmail" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input id="loginEmail" name="loginEmail" type="email" required value={email} onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }} className={inputClass(emailError)} />
          <ErrorMessage error={emailError} />
        </div>

        {/* Password Field JSX using inputClass(passwordError) and ErrorMessage */}
        <div>
          <label htmlFor="loginPassword" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input id="loginPassword" name="loginPassword" type="password" required value={password} onChange={(e) => { setPassword(e.target.value); if (passwordError) setPasswordError(''); }} className={inputClass(passwordError)} />
          <ErrorMessage error={passwordError} />
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded">Login</button>
      </form>
      
      {/* Link to Registration */}
      <div className="mt-4 text-center text-sm">
        <p className="text-slate-600">Don't have an account?{' '}
          <button type="button" onClick={onSwitchToRegister} className="text-blue-600 hover:text-blue-800 font-medium bg-transparent p-0 border-none">Register for an account</button>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;
```

-----

### 6\. 💻 Step 6: Admin and Instructor Dashboard Pages

These pages serve as the entry points for administrative and instructional tasks, relying on the protection from Step 3.

#### 6.1 `src/pages/AdminDashboard.jsx`

```jsx
// src/pages/AdminDashboard.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer'; 

function AdminDashboard() {
  const { user, role, logout } = useAuth();
  
  // Note: ProtectedRoute already handles the unauthorized navigation
  if (role !== 'admin') return <Navigate to="/" replace />; 

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-red-400">Admin Console</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Welcome, {user.name}</span>
          <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium">Logout</button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 grow w-full">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">System Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                <p className="text-sm text-slate-500">Total Instructors</p>
                <p className="text-3xl font-bold text-blue-800 mt-1">12</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
                <p className="text-sm text-slate-500">Total Students</p>
                <p className="text-3xl font-bold text-green-800 mt-1">450</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
                <p className="text-sm text-slate-500">Active Courses</p>
                <p className="text-3xl font-bold text-yellow-800 mt-1">28</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">Instructor Management</h3>
                <p className="text-slate-600 mb-4">View and manage all instructor accounts and their assigned courses.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium">View Instructors</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">Student Enrollment & Tracking</h3>
                <p className="text-slate-600 mb-4">Monitor student activity, registrations, and completion rates.</p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium">View Students</button>
            </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
```

#### 6.2 `src/pages/InstructorDashboard.jsx`

```jsx
// src/pages/InstructorDashboard.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

function InstructorDashboard() {
  const { user, role, logout } = useAuth();

  if (role !== 'instructor') return <Navigate to="/" replace />;

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-green-400">Instructor Portal</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Welcome, {user.name}</span>
          <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium">Logout</button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 grow w-full">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Course Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 flex flex-col items-center">
                <div className="text-4xl text-blue-600 mb-3">📚</div>
                <h3 className="text-lg font-semibold mb-2">Create New Course</h3>
                <p className="text-sm text-slate-500 mb-4 text-center">Define the structure, title, and initial details for a new course.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium">Start Creation</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600 flex flex-col items-center">
                <div className="text-4xl text-purple-600 mb-3">📎</div>
                <h3 className="text-lg font-semibold mb-2">Manage Materials</h3>
                <p className="text-sm text-slate-500 mb-4 text-center">Upload PDFs, documents, external links, and quizzes for existing courses.</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium">Add Content</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-600 flex flex-col items-center">
                <div className="text-4xl text-yellow-600 mb-3">🎬</div>
                <h3 className="text-lg font-semibold mb-2">Manage Course Videos</h3>
                <p className="text-sm text-slate-500 mb-4 text-center">Embed or link video lessons and lecture recordings.</p>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-slate-900 px-4 py-2 rounded font-medium">Video Library</button>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">Your Current Courses</h3>
            <ul className="list-disc pl-5 text-slate-600">
                <li>React for Beginners (45 students enrolled)</li>
                <li>JavaScript Fundamentals (120 students enrolled)</li>
            </ul>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default InstructorDashboard;
```