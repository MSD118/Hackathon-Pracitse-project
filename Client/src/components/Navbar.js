import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    var logout = () => {

        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("role_name");
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
                <div className="container-fluid">
                    <Link to='/home' className="text">
                        <a className="navbar-brand" >Content Management System</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/about" className="text">
                                    <a className="nav-link active" aria-current="page" >About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="text">
                                    <a className="nav-link active" >Contact Us</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active">Sign Up</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control searchCss " type="text" placeholder="Search" aria-label="Search" />
                        </form>
                        <br />
                        <button className="btn btn-success" type="button" onClick={logout}>Log Out</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;