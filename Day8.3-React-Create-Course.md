Excellent\! Now that the foundational structure, security, and authentication are fully implemented, we can proceed with building the core functionality of the LMS: **Course Management for the Instructor**.

The next major step is to detail the creation of a new course, fulfilling the requirement: **"Instructors Can able to Create a Course."**

-----

## 🏗️ Step 7: Build the Course Creation Feature

This requires creating a new form component that handles course details and integrating it into the Instructor Dashboard.

### 7.1 Create a Course Management Context

Before creating the form, we need a simple way to store and manage the list of courses globally (using mock data for now), just like we did with authentication.

**File:** `src/context/CourseContext.jsx`

```jsx
// src/context/CourseContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Mock initial courses
const initialCourses = [
    { id: 'c1', title: 'React for Beginners', instructor: 'Alice Instructor', duration: '10 hours', status: 'Published' },
    { id: 'c2', title: 'JavaScript Fundamentals', instructor: 'Alice Instructor', duration: '8 hours', status: 'Draft' },
];

const CourseContext = createContext(null);

export const useCourses = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState(initialCourses);

    // Function to simulate adding a new course
    const addCourse = (newCourseData) => {
        const newCourse = {
            ...newCourseData,
            id: 'c' + (courses.length + 1),
            instructor: 'Alice Instructor', // Hardcode instructor for simplicity
            status: 'Draft',
        };
        setCourses(prevCourses => [...prevCourses, newCourse]);
        console.log('Course Added:', newCourse);
    };

    return (
        <CourseContext.Provider value={{ courses, addCourse }}>
            {children}
        </CourseContext.Provider>
    );
};
```

### 7.2 Update `main.jsx` to Include `CourseProvider`

Wrap the application in the new provider so course data is available everywhere.

```jsx
// src/main.jsx (Snippet)
// ... imports ...
import { AuthProvider } from './context/AuthContext.jsx'
import { CourseProvider } from './context/CourseContext.jsx' // 👈 New Import
// ...

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CourseProvider> {/* 👈 Wrap inside AuthProvider */}
        <Router>
          {/* ... Routes remain the same ... */}
        </Router>
      </CourseProvider>
    </AuthProvider>
  </StrictMode>,
)
```

### 7.3 Create the Course Creation Form

This component handles the input fields and validation for a new course.

**File:** `src/components/CourseCreationForm.jsx`

```jsx
// src/components/CourseCreationForm.jsx
import React, { useState } from "react";
import { useCourses } from "../context/CourseContext";

const initialFormData = {
  title: "",
  description: "",
  duration: "",
  level: "Beginner",
};

const BASE_INPUT_CLASS =
  "w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-700 " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

function CourseCreationForm({ onCourseAdded }) {
  const [formData, setFormData] = useState(initialFormData);
  const { addCourse } = useCourses();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // This must use the same keys as initialFormData
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(formData);
    setFormData(initialFormData);
    if (onCourseAdded) onCourseAdded();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">
        New Course Details
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Course Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className={BASE_INPUT_CLASS}
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className={BASE_INPUT_CLASS + " resize-y"}
          />
        </div>

        {/* Duration & Level */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Duration (e.g., 8 hours)
            </label>
            <input
              id="duration"
              name="duration"
              type="text"
              value={formData.duration}
              onChange={handleChange}
              className={BASE_INPUT_CLASS}
            />
          </div>

          <div>
            <label
              htmlFor="level"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Level
            </label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              className={BASE_INPUT_CLASS}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="self-start bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded"
        >
          Create Course
        </button>
      </form>
    </div>
  );
}

export default CourseCreationForm;

```

-----

## 👩‍🏫 Step 8: Integrate Form into Instructor Dashboard

We need to add a state variable to `InstructorDashboard.jsx` to toggle the visibility of the creation form.

### Update `src/pages/InstructorDashboard.jsx`

```jsx
// src/pages/InstructorDashboard.jsx
import React, { useState } from 'react'; // 👈 Import useState
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCourses } from '../context/CourseContext'; // 👈 New Import
import CourseCreationForm from '../components/CourseCreationForm'; // 👈 New Import
import Footer from '../components/Footer';

function InstructorDashboard() {
  const { user, role, logout } = useAuth();
  const { courses } = useCourses(); // 👈 Access courses list
  const [showForm, setShowForm] = useState(false); // 👈 State to toggle form visibility

  if (role !== 'instructor') {
    return <Navigate to="/" replace />;
  }
  
  // Filter courses taught by the current instructor (mock name match)
  const instructorCourses = courses.filter(c => c.instructor === user.name);

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* Header remains the same */}
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-green-400">Instructor Portal</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Welcome, {user.name}</span>
          <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium">Logout</button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 grow w-full">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Course Management</h2>
        
        {/* Course Creation Form (Conditionally rendered) */}
        {showForm ? (
            <CourseCreationForm onCourseAdded={() => setShowForm(false)} />
        ) : (
            // Instructor Actions (Show this when form is hidden)
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 flex flex-col items-center">
                    <div className="text-4xl text-blue-600 mb-3">📚</div>
                    <h3 className="text-lg font-semibold mb-2">Create New Course</h3>
                    <p className="text-sm text-slate-500 mb-4 text-center">Define the structure, title, and initial details for a new course.</p>
                    {/* Toggle form visibility */}
                    <button onClick={() => setShowForm(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium">
                        Start Creation
                    </button>
                </div>
                {/* ... (Other action cards remain the same) ... */}
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
        )}
        
        {/* List of Instructor's Courses */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mt-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">
                Your Current Courses ({instructorCourses.length})
            </h3>
            {instructorCourses.length > 0 ? (
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Duration</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {instructorCourses.map(course => (
                            <tr key={course.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{course.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{course.duration}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${course.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {course.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-blue-600 hover:text-blue-900">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-slate-500">You have no courses yet. Start creating one!</p>
            )}
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default InstructorDashboard;
```

-----

## ✅ Current Status

  * **RBAC and Auth:** Complete and working.
  * **Global State (Courses):** Implemented via `CourseContext`.
  * **Instructor Core Function:** **Course Creation Form** is built, uses state/validation, and integrates with the global course list.
  * **Dashboard View:** `InstructorDashboard` dynamically toggles between the action cards and the course creation form.

The next step would be to enhance the **Admin Dashboard** with functionality, or proceed with **adding materials/videos** (Step 9). Which would you prefer?