import { Link } from "react-router-dom";

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Starships(props) {
    return (
        <>
            <div key={props.shipId}>
                <div className="card mb-3 card-style">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={'img/shipsImages/' + props.shipId + '.png'} alt='starship' className='img-size rounded-start mt-3' />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Name: {props.name}</h5>
                                <p className="card-text">Model: {props.model}</p>
                                <p className="card-text">Hyperdrive Rating: {props.hyperdrive_rating}</p>
                                <Link id={props.shipId} type="button" className="btn btn-warning" to="/starshipDetails">
                                    Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Starships;