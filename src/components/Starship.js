import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Starship() {

    const [loading, setLoading] = useState(true);
    const [ship, setShip] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`https://swapi.dev/api/starships/${id}`)
            .then((res) => setShip(res.data))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div>
            <div className="card mb-3 ms-5 me-5 detail-card">
                <button type="button" className="btn btn-warning">Home</button>
                <h1>Ship Details</h1>
                <hr />
                <div>
                    <img src='img/millenniumFalcon.png' alt='ship' className='detail-img mt-3 mb-3' />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Millennium Falcon</h5>
                    <p className="card-text">Model: </p>
                    <p className="card-text">Hyper Drive: </p>
                    <p className="card-text">Passengers: </p>
                    <p className="card-text">Max Atmosphering Speed: </p>
                    <p className="card-text">Manufacturer: </p>
                    <p className="card-text">Crew: </p>
                    <p className="card-text">Cargo Capacity: </p>
                </div>
            </div>

        </div>
    )
}

export default Starship;