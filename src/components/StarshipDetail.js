import { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function StarshipDetail() {





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
                    <h5 className="card-title">Name: Millennium Falcon</h5>
                    <p className="card-text">Model: </p>
                    <p className="card-text">Hyperdrive Rating: </p>
                    <p className="card-text">Passengers: </p>
                    <p className="card-text">Max Atmosphering Speed: </p>
                    <p className="card-text">Manufacturer: </p>
                    <p className="card-text">Crew: </p>
                    <p className="card-text">Cargo Capacity: </p>
                    <div className="card-footer bg-transparent border-warning">
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StarshipDetail;