// import Dashboard from './Dashboard';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from "react-router";

import Login from './Login';
import Customer from './customer/Customer';
import Admin from './admin/Admin';


function ProtectedRoute() {

    debugger;

    const navigate = useNavigate();

    useEffect(() => {

        if (sessionStorage.getItem('isLoggedIn') === null || sessionStorage.getItem('isLoggedIn') === 'false') {

            navigate('/login');

        } else {

            if (sessionStorage.getItem('role_name') === 'customer') {

                console.log("In customer")
                navigate('/customer');
                // return <Customer />;

            } else if (sessionStorage.getItem('role_name') === 'admin') {

                navigate('/admin');

            }
        }

    }, [navigate]);

    if (sessionStorage.getItem('isLoggedIn') !== null && sessionStorage.getItem('isLoggedIn') === 'true') {

        if (sessionStorage.getItem('role_name') === 'customer') {

            console.log("In customer")
            navigate('/customer');
            // return <Customer/>;


        } else if (sessionStorage.getItem('role_name') === 'admin') {

            navigate('/admin');

        }

    } else {

        navigate('/login');

    }
}

export default ProtectedRoute;