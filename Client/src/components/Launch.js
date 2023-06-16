import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import ProtectedRoute from "./ProctectedRoute";
import Topics from './customer/Topics'
import Customer from './customer/Customer';
import Admin from './admin/Admin';
import Tutorials from "./customer/Tutorials";
import Tutorial from "./customer/Tutorial";
import Signup from "./Signup";
import Transit from "./Transit";

function Launch() {

    return (
        <>
            <div>
                <Navbar></Navbar>
                <Routes>

                    <Route path='/' element={<Login />} />

                    <Route path='/login' element={<Login />} />

                    <Route path='/signup' element={<Signup />} />

                    <Route path='/test' element={<Transit />} />

                    <Route path='/home' element={<ProtectedRoute />} />

                    <Route exact path="/customer" element={<Customer></Customer>} />

                    {/* <Route exact path="/customer" Component={Customer} text={Customer} /> */}

                    <Route exact path='customer/topics' element={<Topics></Topics>} />

                    <Route exact path='customer/tutorials/:topic_id' element={<Tutorials></Tutorials>} />

                    <Route exact path='customer/tutorial/:tutorial_id' element={<Tutorial></Tutorial>} />

                    <Route exact path="/admin" element={<Admin></Admin>} />


                </Routes>

            </div >
        </>
    )
}

export default Launch;