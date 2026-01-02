import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthPage from './pages/AuthPage.jsx'

import { AuthProvider } from './context/AuthContext.jsx'
import { CourseProvider } from './context/CourseContext.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import InstructorDashboard from './pages/InstructorDashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'; // Add this if you haven't yet

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CourseProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App/> }/>
          <Route path='/auth' element={<AuthPage/>}/>
          
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
      </CourseProvider>
    </AuthProvider>
  </StrictMode>,
)