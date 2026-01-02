// src/pages/AdminDashboard.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer'; // Assuming Footer is used here

function AdminDashboard() {
  const { user, role, logout } = useAuth();

  // The ProtectedRoute component already handles redirection, 
  // but this ensures the component receives correct props.
  if (role !== 'admin') {
    return <Navigate to="/" replace />; 
  }

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* Header-like structure for the dashboard */}
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-red-400">Admin Console</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">
            Welcome, {user.name} 
          </span>
          <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium transition duration-150">
            Logout
          </button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 grow w-full">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">System Overview</h2>
        
        {/* Key Metrics/Summary Cards */}
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

        {/* Admin Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">
                    Instructor Management
                </h3>
                <p className="text-slate-600 mb-4">View and manage all instructor accounts and their assigned courses.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition duration-150">
                    View Instructors
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">
                    Student Enrollment & Tracking
                </h3>
                <p className="text-slate-600 mb-4">Monitor student activity, registrations, and completion rates.</p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition duration-150">
                    View Students
                </button>
            </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboard;