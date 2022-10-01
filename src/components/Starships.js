import { Link } from "react-router-dom";

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Starships(props) {
    return (
        /*the page we created of the cards of the starships on the main page*/
        <>
            <div key={props.shipId}>
                <div className="card mt-3 card-style">
                    <div className="row g-0">
                        {/* pictures were taken from local folder by naming them according to ship name */}
                        <div className="col-md-4">
                            <img src={'/img/shipsImages/' + props.name + '.png'}
                                alt='starship'
                                className='img-size rounded-start mt-3' />
                        </div>
                        {/* Name, model and hyperdrive properties were drawn with props and added to the cart. */}
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Name: {props.name}</h5>
                                <p className="card-text">Model: {props.model}</p>
                                <p className="card-text">Hyperdrive Rating: {props.hyperdrive_rating}</p>
                                {/* the data was sent to the  StarshipsDetail page with the detail button */}
                                <Link id={props.shipId} type="button"
                                    className="btn btn-outline-warning"
                                    to={`/starships/${props.shipId}`}
                                    state={`${props.name}, 
                                    ${props.model},
                                    ${props.hyperdrive_rating},
                                    ${props.passengers},
                                    ${props.max_atmosphering_speed},
                                    ${props.manufacturer},
                                    ${props.crew},
                                    ${props.cargo_capacity} `}>
                                    Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Starships;