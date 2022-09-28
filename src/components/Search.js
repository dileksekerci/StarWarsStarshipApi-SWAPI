import React from 'react'
import { useState } from 'react';
import PrepareData from './PrepareData';

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Search() {
    const [criteria, setCriteria] = useState([]);

    PrepareData(criteria);

    return (
        <div className="search mt-3 mb-3">
            <input placeholder="Name or Model"
                type="text"
                name="search"
                className="writing-box"
                autoComplete='off'
                onChange={e => setCriteria(e.target.value)}
                value={criteria} />
            {/* if this event trigerred our hooks catch it and set a criteria */}
        </div>
    )
}

export default Search