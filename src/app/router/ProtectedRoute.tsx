import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  roles?: string[];
}

const ProtectedRoute = ({ roles }: ProtectedRouteProps) => {
  const location = useLocation();
  
  // Add your authentication logic here
  const isAuthenticated = false; // Replace with your auth check
  
  // Add your user role check logic here
  const hasRequiredRole = () => {
    if (!roles) return true;
    // Replace with your role checking logic
    const userRoles: string[] = []; // Get user roles from your auth context
    return roles.some(role => userRoles.includes(role));
  };

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles && !hasRequiredRole()) {
    // Redirect to unauthorized page or home page
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;