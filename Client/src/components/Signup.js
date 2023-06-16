import './comman.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {

    debugger;

    const [errorMsg, setErrorMsg] = useState("");
    const [credentials, setCredentials] = useState({

        user_id: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_check: "",
        role_name: ""
    });

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

    const signup = () => {

        console.log(credentials);
        debugger;

        if (credentials.email !== "" && credentials.password !== "" && credentials.first_name !== "" && credentials.last_name !== "" && credentials.user_id !== "" && (credentials.role_name !== "" || credentials.role_name !== "Select")) {

            if (credentials.password === credentials.password_check) {

                axios.post('http://127.0.0.1:9999/login/signup', { ...credentials })
                    .then((response) => {
                        if (response.data.affectedRows !== 0 && response.data.affectedRows > 0) {
                            setErrorMsg('Sign Up Successful!!!');
                            navigate("/test");
                        } else {
                            setErrorMsg('Sign Up Unsuccessfull!');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                setErrorMsg('Password Does Not Match!');
            }


        } else {
            setErrorMsg('Fields Cannot be empty!!');
        }
    }




    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center center signup" >
                    <div className="col-lg-4 col-md-8 ">
                        <div className="card ">
                            <div className="card-body ">

                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" name='user_id' onChange={OnTextChange} value={credentials.user_id} />
                                    <label for="userIdText">User Id</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="text" className="form-control" name='first_name' onChange={OnTextChange} value={credentials.first_name} />
                                    <label for="firstNameText">First Name</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="text" className="form-control" name='last_name' onChange={OnTextChange} value={credentials.last_name} />
                                    <label for="lastNameText">Last Name</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="email" className="form-control" name='email' onChange={OnTextChange} value={credentials.email} />
                                    <label for="userNameText">Email</label>
                                </div>

                                <div class="form-floating">
                                    <input type="password" className="form-control" name='password' onChange={OnTextChange} value={credentials.password} />
                                    <label for="passwordText">Password</label>
                                </div>

                                <br/>

                                <div class="form-floating">
                                    <input type="password" className="form-control" name='password_check' onChange={OnTextChange} value={credentials.password_check} />
                                    <label for="confirmPasswordText">Confirm Password</label>
                                </div>

                                <br />

                                <select className="form-control" name="role_name" onChange={optionChange}>
                                    <option value="Select">Select Role</option>
                                    <option value="customer">Customer</option>
                                    <option value="admin">Admin</option>
                                </select>

                                <br />

                                <div class="row align-items-center">

                                    <div className="col-md-2 col-lg-2" >
                                        <button type="button" class="btn btn-primary" id="loginBtn" onClick={signup}>SignUp</button>
                                    </div>

                                    <div className="col-md-10 col-lg-10 text-danger" id="msgText">
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

export default Signup;