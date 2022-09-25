import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Starships() {

    const [isLoading, setIsLoading] = useState(false);
    const [starships, setStarships] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const res = await Promise.all([
                    axios.get("https://swapi.dev/api/starships/?page=1"),
                    axios.get("https://swapi.dev/api/starships/?page=2"),
                    axios.get("https://swapi.dev/api/starships/?page=3"),
                    axios.get("https://swapi.dev/api/starships/?page=4")
                ]);
                const data = res.map((res) => res.data.results);
                setStarships(data.flat());
            } catch {
                throw Error("Promise failed");
            } finally {
                setIsLoading(false);
            }
        };
        getData();
        //console.log(starships);
    }, []);


    let starshipCardList = Array.from(starships);
    //let imageURL = Array.from(starhips);
    starshipCardList = starshipCardList.map((ship, id) =>
        <div key={id}>
            <div className="card mb-3 card-style">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={'img/shipsImages/' + id + '.png'} alt='starship' className='img-size rounded-start mt-3' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {ship.name}</h5>
                            <p className="card-text">Model: {ship.model}</p>
                            <p className="card-text">Hyperdrive Rating: {ship.hyperdrive_rating}</p>
                            <Link id={id} type="button" className="btn btn-warning" to="/starshipDetails">Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );


    return (
        <>
            {starshipCardList}
            {/* <button onClick={loadMoreShips}>{</button> */}
        </>
    );
}

export default Starships;