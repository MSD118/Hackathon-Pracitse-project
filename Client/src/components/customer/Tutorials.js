import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Tutorials() {

    var { topic_id } = useParams();

    const [tutorials, setTutorials] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getTutorials();
    }, []);

    const getTutorials = () => {

        debugger;
        console.log(topic_id);
        axios.post("http://127.0.0.1:9999/customer/gettutorials/" + topic_id)
            .then((response) => {
                setTutorials(response.data);
                console.log(response.data)
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
                <div className="container-fluid">
                    <div className="row justify-content-center">

                        <div class="col-lg-4">
                            <button className="btn btn-success" onClick={goBack}>Back</button>
                            <TutorialsTable tutorials={tutorials}></TutorialsTable>
                        </div>

                    </div>
                </div>
            </>
        )

    } else {

        navigate('/login');
    }

}


function TutorialsTable(props) {

    debugger;

    return (
        <>
            <div class="table-responsive">
                <table class="table">
                    <tbody>
                        {
                            props.tutorials.map((tutorial) => {

                                return (
                                    <>
                                        <TutorialsTableRows key={tutorial.tutorial_id} tutorial={tutorial} />
                                    </>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}


function TutorialsTableRows(props) {

    debugger;


    const navigate = useNavigate();

    const goToTut = (args) => {
        navigate('/customer/tutorial/' + args.target.id);
    }



    return (
        <>
            <tr >
                <td onClick={goToTut} id={props.tutorial.tutorial_id}>
                    {props.tutorial.title}
                </td>
            </tr>
        </>
    )

}


export default Tutorials;