import { useLocation, Link } from "react-router-dom";

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function StarshipDetail() {
    const location = useLocation();
    const shipInfo = location.state.split(',');

    return (
        <>
            <div className="card detail-card">
                <div className="card-header bg-transparent ">
                    <h1>Ship Details</h1>
                </div>
                {/* The id from useParams is captured and the appropriate image appears on the detail page. */}
                <div>
                    <img src={'/img/shipsImages/' + shipInfo[0] + '.png'}
                        alt='starship'
                        className='detail-img mt-3 mb-3' />
                </div>
                {/* The data sent with the useLocation property is captured and converted to an array. */}
                {/*The data has been added to the card. */}
                <div className="card-body">
                    <h5 className="card-title">Name: {shipInfo[0]}</h5>
                    <p className="card-text">Model: {shipInfo[1]}</p>
                    <p className="card-text">Hyperdrive Rating: {shipInfo[2]}</p>
                    <p className="card-text">Passengers: {shipInfo[3]}</p>
                    <p className="card-text">Max Atmosphering Speed: {shipInfo[4]}</p>
                    <p className="card-text">Manufacturer: {shipInfo[5]}</p>
                    <p className="card-text">Crew: {shipInfo[6]}</p>
                    <p className="card-text">Cargo Capacity: {shipInfo[7]}</p>
                    <div className="card-footer bg-transparent ">
                        <Link to="/" type="button" className="btn btn-outline-warning">Home</Link>
                    </div>
                </div>
            </div>
            &nbsp;
        </>
    )
}

export default StarshipDetail;