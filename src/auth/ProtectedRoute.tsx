import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth0();

    // Show a loading spinner or placeholder while Auth0 is checking authentication
    if (isLoading) {
        return <div>Loading...</div>; 
    }

    console.log(isAuthenticated)
    // Navigate to home page if the user is not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Render the protected routes
    return <Outlet />;
}

export default ProtectedRoute;
