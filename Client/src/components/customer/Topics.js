import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../comman.css';
// import { useNavigate } from "react-router-dom";





function Topics() {

    const navigate = useNavigate();


    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics();
    }, []);

    const getTopics = () => {
        axios.get("http://127.0.0.1:9999/customer/gettopics")
            .then((response) => {
                setTopics(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    if (sessionStorage.getItem('isLoggedIn') !== null || sessionStorage.getItem('isLoggedIn') === 'true') {

        return (
            <>
                <div className="container-fluid">
                    <div className="row justify-content-center">

                        <div class="col-lg-4">
                            <TopicTable topics={topics}></TopicTable>
                        </div>


                    </div>
                </div>

            </>

        )

    } else {

        navigate('/login');

    }

}

function TopicTable(props) {

    return (
        <>
            <div class="table-responsive">
                <table class="table">
                    <tbody>
                        {
                            props.topics.map((topic) => {

                                return (
                                    <>
                                        <TopicTableRows key={topic.topic_id} topic={topic} />
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


function TopicTableRows(props) {

    const navigate = useNavigate();

    const goToTut = (args) => {
        navigate('/customer/tutorials/' + args.target.id);
    }



    return (
        <>
            <tr >
                <td onClick={goToTut} id={props.topic.topic_id}>
                    {props.topic.topic_name}
                </td>
            </tr>
        </>
    )

}

export default Topics;