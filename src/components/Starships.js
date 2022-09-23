import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Starships() {

    const [loading, setLoading] = useState(true);
    const [ship, setShip] = useState([]);

    useEffect(() => {
        axios("https://swapi.dev/api/starships/")
            //.then((res) => setShip(res.data))
            .then((data) => console.log(data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            {loading && <div>Loading...</div>}

            <div className="card mb-3 card-style">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src='img/millenniumFalcon.png' alt='ship' className='img-fluid rounded-start' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Millennium Falcon</h5>
                            <p className="card-text">Model: ......</p>
                            <p className="card-text">Hper Drive: ..............</p>
                            <button type="button" className="btn btn-warning">Detail</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 card-style">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src='img/millenniumFalcon.png' alt='ship' className='img-fluid rounded-start' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Millennium Falcon</h5>
                            <p className="card-text">Model: ......</p>
                            <p className="card-text">Hper Drive: ..............</p>
                            <button type="button" className="btn btn-warning">Detail</button>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                {/* {ship.map((ship) => (
                    <li key={ship.id}>
                        <Link to={`/ship/${ship.id}`}>
                            {ship.name}
                        </Link>
                    </li>
                ))} */}
            </ul>
        </div >
    );
}

export default Starships;