import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function NotFound() {
    return (
        /*404 not found error page*/
        <div className="card detail-card">
            <div className="card-header bg-transparent ">
                <h1>Oops! You lost seem to be.</h1>
            </div>
            <div className="img-size">
                <img src="../img/yoda.png" alt="404" />
            </div>
            <div className="card-body">
                <Link to='/' type="button" className="btn btn-outline-warning mb-3">Home</Link>
                <h3>=May The Force Be With You=</h3>
            </div>
        </div>
    )
}