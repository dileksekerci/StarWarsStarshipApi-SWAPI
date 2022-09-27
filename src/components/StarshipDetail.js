import { useLocation, useParams, Link } from "react-router-dom";
import PrepareData from "./PrepareData";
import Starships from "./Starships";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Starship() {
    const { shipId } = useParams();
    const location = useLocation();
    const shipInfo = location.state.split(',');

    return (
        <div>
            <div className="card mb-3 ms-5 me-5 border-warning detail-card">
                <div className="card-header bg-transparent border-warning">
                    <h1>Ship Details</h1>
                </div>
                <div className="">
                    <img src={'/img/shipsImages/' + shipId + '.png'}
                        alt='starship'
                        className='detail-img mt-3 mb-3' />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name: {shipInfo[0]}</h5>
                    <p className="card-text">Model: {shipInfo[1]}</p>
                    <p className="card-text">Hyperdrive Rating: {shipInfo[2]}</p>
                    <p className="card-text">Passengers: {shipInfo[3]}</p>
                    <p className="card-text">Max Atmosphering Speed: {shipInfo[4]}</p>
                    <p className="card-text">Manufacturer: {shipInfo[5]}</p>
                    <p className="card-text">Crew: {shipInfo[6]}</p>
                    <p className="card-text">Cargo Capacity: {shipInfo[7]}</p>
                    <div className="card-footer bg-transparent border-warning">
                        <Link to="/" type="button" className="btn btn-warning">Home</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Starship;