// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ allowedRoles, children }) {
  const { user, role } = useAuth();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Redirect to home if authenticated but unauthorized
  if (!allowedRoles.includes(role)) {
    alert('Access Denied. You do not have the required permissions.');
    return <Navigate to="/" replace />;
  }

  // Render the component if authorized
  return children;
}

export default ProtectedRoute;