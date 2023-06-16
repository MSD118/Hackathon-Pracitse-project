import './comman.css';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Transit() {

    const navigate = useNavigate();


    useEffect(() => {

        setTimeout(() => {
            navigate("/login");
        }, 5000);


    }, []);

    return (
        <>
            <h3>Sign Up Successful!!!</h3>
            <h3>You'll redirected to Login Page Shortly.....</h3>
        </>
    )
}

export default Transit;