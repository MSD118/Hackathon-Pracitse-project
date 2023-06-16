import './comman.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from "react-router";
// import Customer from './customer/Customer';


function Login() {

    debugger;

    const [errorMsg, setErrorMsg] = useState("");
    const [credentials, setCredentials] = useState({ email: "", password: "", role_name: "" });

    const navigate = useNavigate();

    const OnTextChange = (args) => {

        var copyOfCred = { ...credentials };
        copyOfCred[args.target.name] = args.target.value;
        setCredentials(copyOfCred);

    }

    const optionChange = (args) => {

        var copyOfCred = { ...credentials };
        copyOfCred[args.target.name] = args.target.value;
        setCredentials(copyOfCred);

    }

    useEffect(() => {

        setTimeout(() => {
            setErrorMsg("");
        }, 5000);

    }, [errorMsg]);

    const login = () => {

        console.log(credentials);
        debugger;

        if (credentials.email !== "" && credentials.password !== "") {

            axios.post('http://127.0.0.1:9999/login', { ...credentials })
                .then((response) => {
                    if (response.data.isValid === true) {
                        sessionStorage.setItem("isLoggedIn", true);
                        sessionStorage.setItem("email", credentials.email);
                        sessionStorage.setItem("role_name", credentials.role_name);
                        setErrorMsg('Login Successful!!!');
                        navigate("/home");
                    } else {
                        setErrorMsg('Please check you credentials');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })

        } else {
            setErrorMsg('Fields Cannot be empty!!');
        }
    }




    return (
        <>
            <div class="container-fluid ">
                <div class="row  justify-content-center center login" >
                    <div class="col-lg-4 col-md-8 ">
                        <div class="card ">
                            <div class="card-body ">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" name='email' onChange={OnTextChange} value={credentials.email} />
                                    <label for="userNameText">Email</label>
                                </div>

                                <div class="form-floating">
                                    <input type="password" class="form-control" name='password' onChange={OnTextChange} value={credentials.password} />
                                    <label for="passwordText">Password</label>
                                </div>

                                <br />

                                <select className="form-control" name="role_name" onChange={optionChange}>
                                    <option value="Select">Select Role</option>
                                    <option value="customer">Customer</option>
                                    <option value="admin">Admin</option>
                                </select>

                                <br />

                                <div class="row align-items-center">

                                    <div class="col-md-2 col-lg-2" >
                                        <button type="button" class="btn btn-primary" id="loginBtn" onClick={login}>Log
                                            In</button>
                                    </div>

                                    <div class="col-md-10 col-lg-10 text-danger" id="msgText">
                                        {errorMsg}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
// export { Login };