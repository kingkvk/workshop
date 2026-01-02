## 🏗️ Step 9: Implement Course Material and Video Management

We will focus on implementing the functionality teased in the "Manage Materials" and "Manage Videos" buttons on the Instructor Dashboard. Since these are related, we can manage them within a single detailed screen.

### 9.1 Update `CourseContext` to Handle Materials

We need to update our mock course structure to hold an array for materials.

**File:** `src/context/CourseContext.jsx` (Snippet)

```jsx
// src/context/CourseContext.jsx
// ... imports and initial setup ...

// Mock initial courses, now including a materials array
const initialCourses = [
    { id: 'c1', title: 'React for Beginners', instructor: 'Alice Instructor', duration: '10 hours', status: 'Published', 
      materials: [
          { mid: 1, type: 'video', title: 'Introduction to React Hooks', url: 'https://youtube.com/hook_intro' },
          { mid: 2, type: 'pdf', title: 'Styling with Tailwind Guide', url: '/files/tailwind_guide.pdf' }
      ]
    },
    { id: 'c2', title: 'JavaScript Fundamentals', instructor: 'Alice Instructor', duration: '8 hours', status: 'Draft', materials: [] },
];

const CourseContext = createContext(null);

export const useCourses = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState(initialCourses);

    // ... (addCourse function remains the same) ...

    // New Function: Add a material item to a specific course
    const addMaterial = (courseId, materialData) => {
        setCourses(prevCourses => prevCourses.map(course => {
            if (course.id === courseId) {
                const newMaterial = {
                    ...materialData,
                    mid: Date.now(), // Use timestamp for unique ID
                };
                return {
                    ...course,
                    materials: [...course.materials, newMaterial],
                };
            }
            return course;
        }));
    };

    return (
        <CourseContext.Provider value={{ courses, addCourse, addMaterial }}>
            {children}
        </CourseContext.Provider>
    );
};
```

### 9.2 Create the Material Management Component

This component will be the interface for adding new materials (videos, files, links) to a chosen course.

**File:** `src/components/MaterialManager.jsx`

```jsx
// src/components/MaterialManager.jsx
import React, { useState } from 'react';
import { useCourses } from '../context/CourseContext';

const MaterialManager = ({ course, onBack }) => {
    const { addMaterial } = useCourses();
    const [type, setType] = useState('video');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !url.trim()) {
            setError('All fields are required.');
            return;
        }

        const materialData = { title, url, type };
        addMaterial(course.id, materialData);

        // Reset form and show success
        setTitle('');
        setUrl('');
        setError('');
        alert(`Successfully added ${type} to ${course.title}!`);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">
                Manage Content for: {course.title}
            </h3>
            
            <button onClick={onBack} className="mb-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                ← Back to Dashboard
            </button>

            {/* List Existing Materials */}
            <div className="mb-6 border p-4 rounded bg-slate-50">
                <h4 className="font-semibold mb-2">Current Materials ({course.materials.length})</h4>
                <ul className="list-disc pl-5 text-sm text-slate-700">
                    {course.materials.map(m => (
                        <li key={m.mid} className="mb-1">
                            [{m.type.toUpperCase()}] {m.title}
                        </li>
                    ))}
                    {course.materials.length === 0 && <li className="text-slate-500">No materials added yet.</li>}
                </ul>
            </div>

            {/* Add New Material Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h4 className="font-semibold">Add New Resource</h4>

                {/* Resource Type */}
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Resource Type</label>
                    <select id="type" value={type} onChange={(e) => { setType(e.target.value); setError(''); }} 
                            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="video">Video URL (e.g., YouTube/Vimeo)</option>
                        <option value="pdf">File/PDF Link</option>
                        <option value="link">External Link/Reading</option>
                    </select>
                </div>

                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => { setTitle(e.target.value); setError(''); }} 
                           className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                {/* URL/Link */}
                <div>
                    <label htmlFor="url" className="block text-sm font-medium text-slate-700 mb-1">URL / Link Address</label>
                    <input type="url" id="url" value={url} onChange={(e) => { setUrl(e.target.value); setError(''); }} 
                           className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button type="submit" className="self-start bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded">
                    Add {type.toUpperCase()} Resource
                </button>
            </form>
        </div>
    );
}

export default MaterialManager;
```

### 9.3 Update Instructor Dashboard for Switching

Modify `InstructorDashboard.jsx` to select a course and switch the view to the `MaterialManager`.

**File:** `src/pages/InstructorDashboard.jsx` (Core Logic)

```jsx
// src/pages/InstructorDashboard.jsx
import React, { useState } from 'react';
// ... (existing imports) ...
import MaterialManager from '../components/MaterialManager'; // 👈 New Import

function InstructorDashboard() {
  const { user, role, logout } = useAuth();
  const { courses } = useCourses();
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null); // 👈 State to hold the course being managed

  // ... (authorization check remains the same) ...
  const instructorCourses = courses.filter(c => c.instructor === user.name);

  // Function to determine which UI to render
  const renderContent = () => {
    if (selectedCourse) {
      // Show Material Manager for the selected course
      return <MaterialManager course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
    }
    
    if (showForm) {
      // Show Course Creation Form
      return <CourseCreationForm onCourseAdded={() => setShowForm(false)} />;
    }

    // Default: Show Action Cards and Course List
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* 1. Create Course Button */}
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 flex flex-col items-center">
                    <div className="text-4xl text-blue-600 mb-3">📚</div>
                    <h3 className="text-lg font-semibold mb-2">Create New Course</h3>
                    <button onClick={() => setShowForm(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium">
                        Start Creation
                    </button>
                </div>
                {/* 2. Manage Materials Card (Now acts as a guide/trigger for course selection) */}
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600 flex flex-col items-center">
                    <div className="text-4xl text-purple-600 mb-3">📎</div>
                    <h3 className="text-lg font-semibold mb-2">Manage Materials/Videos</h3>
                    <p className="text-sm text-slate-500 mb-4 text-center">Select a course below to upload content, files, and links.</p>
                    <button disabled className="w-full bg-slate-300 text-slate-600 px-4 py-2 rounded font-medium cursor-not-allowed">
                        Select Below
                    </button>
                </div>
                {/* 3. Placeholder for other actions */}
                 <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-600 flex flex-col items-center">
                    <div className="text-4xl text-yellow-600 mb-3">🛠️</div>
                    <h3 className="text-lg font-semibold mb-2">Course Settings</h3>
                    <p className="text-sm text-slate-500 mb-4 text-center">Manage enrollment limits, pricing, or visibility.</p>
                    <button disabled className="w-full bg-yellow-600 hover:bg-yellow-700 text-slate-900 px-4 py-2 rounded font-medium">
                        Settings
                    </button>
                </div>
            </div>

            {/* List of Instructor's Courses - Now includes a 'Manage' button */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">
                    Your Current Courses ({instructorCourses.length})
                </h3>
                {instructorCourses.length > 0 ? (
                    <table className="min-w-full divide-y divide-slate-200">
                        {/* ... table headers ... */}
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
                                        <button 
                                            onClick={() => setSelectedCourse(course)} // 👈 Select course for management
                                            className="text-blue-600 hover:text-blue-900 font-semibold"
                                        >
                                            Manage Content
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-slate-500">You have no courses yet. Start creating one!</p>
                )}
            </div>
        </>
    );
  }; // End of renderContent

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* ... Header and Footer remains the same ... */}
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-green-400">Instructor Portal</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Welcome, {user.name}</span>
          <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium">Logout</button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 grow w-full">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Course Management</h2>
        
        {renderContent()} {/* RENDER THE CONDITIONAL CONTENT */}
        
      </main>
      <Footer />
    </div>
  );
}

export default InstructorDashboard;
```

-----

## ✅ Current Status

You have successfully implemented the full Instructor workflow:

1.  **Course Creation:** (Step 7) Instructors can create a new course using a dedicated form.
2.  **Course Listing:** The dashboard shows a dynamically generated table of the instructor's courses.
3.  **Material Management:** (Step 9) Instructors can click "Manage Content" on any listed course to open the `MaterialManager` and add videos, files, and links, storing them in the global `CourseContext`.

The next major requirement to address is the **Student's ability to see and register for available courses** in detail. Would you like to proceed with Step 10: **Student Course Details and Enrollment**?