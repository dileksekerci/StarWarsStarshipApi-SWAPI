import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function Starships() {

    const [loading, setLoading] = useState(true);
    const [ship, setShip] = useState([]);

    useEffect(() => {
        axios("https://swapi.dev/api/starships/")
            //.then((res) => setShip(res.data))
            .then((data) => console.log(data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1>Starships</h1>
            {loading && <div>Loading...</div>}
            <ul>
                {/* {ship.map((ship) => (
                    <li key={ship.id}>
                        <Link to={`/ship/${ship.id}`}>
                            {ship.name}
                        </Link>
                    </li>
                ))} */}
            </ul>
        </div>
    );
}

export default Starships;