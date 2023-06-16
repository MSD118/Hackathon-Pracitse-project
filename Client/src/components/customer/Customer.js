import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../comman.css';

import Topics from './Topics';
import Tutorials from './Tutorials';

function Customer() {

    const navigate = useNavigate();


    useEffect(() => {

        if (sessionStorage.getItem('isLoggedIn') !== null && sessionStorage.getItem('isLoggedIn') === 'true') {

            navigate('/customer/topics');

        } else {

            navigate('/login');
        }


    }, [navigate]);



}

export default Customer;


