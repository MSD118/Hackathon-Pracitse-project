import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Tutorial() {

    var { tutorial_id } = useParams();

    const [tutorial, setTutorial] = useState({});

    const navigate = useNavigate();


    useEffect(() => {
        getTutorial();
    }, []);

    const getTutorial = () => {
        incVisitCount();

        debugger;
        console.log(tutorial_id);
        axios.post("http://127.0.0.1:9999/customer/loadtutorial/" + tutorial_id)
            .then((response) => {
                // console.log(response.data[0])
                setTutorial(response.data[0]);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const incVisitCount = () => {

        axios.post("http://127.0.0.1:9999/customer/countInc/" + tutorial_id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const goBack = () => {

        navigate(-1);

    }

    if (sessionStorage.getItem('isLoggedIn') !== null || sessionStorage.getItem('isLoggedIn') === 'true') {

        return (
            <>
                <button className="btn btn-success" onClick={goBack}>Back</button>
                <h1>{tutorial.title}</h1>
                <h3>Author Name: {tutorial.first_name} {tutorial.last_name}</h3>
                <h3>Published on: {tutorial.publish_date}</h3>
                <h3>Visits: {tutorial.visits}</h3>
                <h3>Content: {tutorial.contents}</h3>
            </>
        )

    } else {

        navigate('/login');
    }

}

export default Tutorial;