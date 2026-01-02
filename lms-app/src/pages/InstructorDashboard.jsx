import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCourses } from '../context/CourseContext';
import CourseCreationForm from '../components/CourseCreationForm';
import MaterialManager from '../components/MaterialManager';
import Footer from '../components/Footer';

function InstructorDashboard() {
  const { user, role, logout } = useAuth();
  const { courses } = useCourses();
  
  // State to toggle visibility of the course creation form
  const [showForm, setShowForm] = useState(false);
  
  // State to hold the specific course object when managing materials
  const [selectedCourse, setSelectedCourse] = useState(null); 

  // --- Authorization Check ---
  if (role !== 'instructor') {
    return <Navigate to="/" replace />;
  }
  
  // Filter courses taught by the current instructor (mock match by name)
  const instructorCourses = courses.filter(c => c.instructor === user.name);

  // --- Conditional Rendering Function ---
  const renderContent = () => {
    // 1. Show Material Manager if a course is selected
    if (selectedCourse) {
      return <MaterialManager course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
    }
    
    // 2. Show Course Creation Form if toggled
    if (showForm) {
      return <CourseCreationForm onCourseAdded={() => setShowForm(false)} />;
    }

    // 3. Default View: Action Cards and Course List
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* 1. Create Course Card - Primary Action */}
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 flex flex-col items-center">
                    <div className="text-4xl text-blue-600 mb-3">📚</div>
                    <h3 className="text-lg font-semibold mb-2">Create New Course</h3>
                    <p className="text-sm text-slate-500 mb-4 text-center">Define the structure, title, and initial details for a new course.</p>
                    <button 
                        onClick={() => setShowForm(true)} 
                        // ✅ Button Fix: Consistent Primary Black Style
                        className="w-full bg-slate-900 hover:bg-slate-700 text-white px-4 py-2 rounded font-medium"
                    >
                        Start Creation
                    </button>
                </div>
                
                {/* 2. Manage Materials Card - Advisory/Disabled Style */}
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600 flex flex-col items-center">
                    <div className="text-4xl text-purple-600 mb-3">📎</div>
                    <h3 className="text-lg font-semibold mb-2">Manage Materials/Videos</h3>
                    <p className="text-sm text-slate-500 mb-4 text-center">Select a course below to upload content, files, and links.</p>
                    <button 
                        disabled 
                        // ✅ Button Fix: Consistent Disabled Style
                        className="w-full bg-slate-300 text-slate-600 px-4 py-2 rounded font-medium cursor-not-allowed"
                    >
                        Select Below
                    </button>
                </div>
                
                {/* 3. Course Settings Card - Advisory/Disabled Style */}
                 <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-600 flex flex-col items-center">
                    <div className="text-4xl text-yellow-600 mb-3">🛠️</div>
                    <h3 className="text-lg font-semibold mb-2">Course Settings</h3>
                    <p className="text-sm text-slate-500 mb-4 text-center">Manage enrollment limits, pricing, or visibility.</p>
                    <button 
                        disabled 
                        // ✅ Button Fix: Consistent Disabled Style
                        className="w-full bg-slate-300 text-slate-600 px-4 py-2 rounded font-medium cursor-not-allowed"
                    >
                        Settings
                    </button>
                </div>
            </div>

            {/* Course List Table */}
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
                                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Content</th>
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
                                        <button 
                                            onClick={() => setSelectedCourse(course)} // Triggers MaterialManager view
                                            // ✅ Button Fix: Consistent Primary Black Style
                                            className="px-3 py-1 bg-slate-900 hover:bg-slate-700 text-white rounded font-medium"
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
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* --- Header (Custom Dashboard Bar) --- */}
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-green-400">Instructor Portal</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Welcome, {user.name}</span>
          <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium">Logout</button>
        </div>
      </header>
      
      {/* --- Main Content Area --- */}
      <main className="max-w-7xl mx-auto px-4 py-8 grow w-full">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Course Management</h2>
        
        {renderContent()} {/* RENDER THE CONDITIONAL CONTENT */}
        
      </main>
      <Footer />
    </div>
  );
}

export default InstructorDashboard;