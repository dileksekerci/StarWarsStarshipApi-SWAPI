import { Link } from "react-router-dom";

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Starship(props) {


    return (
        <div>
            <div className="card mb-3 ms-5 me-5 border-warning detail-card">
                <div className="card-header bg-transparent border-warning">
                    <h1>Ship Details</h1>
                </div>
                <div className=''>
                    <img src='img/millenniumFalcon.png' alt='ship' className='detail-img mt-3 mb-3' />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name: {props.name}</h5>
                    <p className="card-text">Model: {props.model}</p>
                    <p className="card-text">Hyperdrive Rating: {props.hyperdrive_rating} </p>
                    <p className="card-text">Passengers: {props.passengers}</p>
                    <p className="card-text">Max Atmosphering Speed: {props.max_atmosphering_speed}</p>
                    <p className="card-text">Manufacturer: {props.manufacturer}</p>
                    <p className="card-text">Crew: {props.crew}</p>
                    <p className="card-text">Cargo Capacity: {props.cargo_capacity}</p>
                    <div className="card-footer bg-transparent border-warning">
                        <Link to="/" type="button" className="btn btn-warning">Home</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Starship;