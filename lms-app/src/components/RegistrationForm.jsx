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