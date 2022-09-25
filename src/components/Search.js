import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
    return (
        <div className="search mt-4 mb-3">
            <input type="text" name="search" className="writing-box" />
        </div>
    )
}

export default Search