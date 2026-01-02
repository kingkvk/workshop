import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

function AuthPage() {
  // State to control which authentication form is currently visible
  // Possible values: 'login' (default) or 'register'
  const [authView, setAuthView] = useState('login'); 

  // Function to change the current view state
  const toggleAuthView = (view) => {
    setAuthView(view);
  };

  // Function to conditionally render the appropriate form component
  const renderAuthForm = () => {
    if (authView === 'login') {
      return (
        <LoginForm 
          // Passed as a prop to let the Login Form switch the view state
          onSwitchToRegister={() => toggleAuthView('register')} 
        />
      );
    } else {
      return (
        <RegistrationForm 
          // Passed as a prop to let the Registration Form switch the view state
          onSwitchToLogin={() => toggleAuthView('login')}
        />
      );
    }
  };

  return (
    // Outer container ensures full height and provides the light background
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col">
      {/* Main tag centers the content vertically and horizontally.
        pt-16 ensures the form doesn't sit right against the top of the viewport.
      */}
      <main className="mx-auto px-4 py-8 grow w-full flex items-center justify-center">
        {/* max-w-md restricts the width of the form container for readability */}
        <div className="max-w-md mx-auto w-full"> 
          {renderAuthForm()}
        </div>
      </main>
      {/* Note: The Header and Footer are typically omitted on dedicated auth pages, 
        or handled by a different layout wrapper in the main.jsx file.
      */}
    </div>
  );
}

export default AuthPage;