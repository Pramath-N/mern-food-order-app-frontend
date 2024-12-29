import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, Outlet } from 'react-router-dom'


function ProtectedRoute() {
    const {isAuthenticated, isLoading} = useAuth0();

    if(!isLoading){
        if(isAuthenticated){
            return <Outlet />
        }
        <Navigate to = '/' replace={true}/>
    }
    return null;
}

export default ProtectedRoute
