import { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Starships() {





    return (
        <div>

            <div className="search mt-4 mb-3">
                <input type="text" name="search" className="writing-box" />
            </div>

            <div className="card mb-3 card-style">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src='img/millenniumFalcon.png' alt='ship' className='img-fluid rounded-start mt-3' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: Millennium Falcon</h5>
                            <p className="card-text">Model: </p>
                            <p className="card-text">Hyperdrive Rating: </p>
                            <Link to="/starshipDetails">Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Starships;