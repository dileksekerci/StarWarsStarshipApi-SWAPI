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

            {loading && <div>Loading...</div>}


            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
                    <img src="img/millenniumFalcon.png" alt="Sample" style={{ height: `180px` }} />
                    <div className="e-card-stacked">
                        <div className="e-card-header">
                            <div className="e-card-header-caption">
                                <div className="e-card-header-title">Millennium Falcon</div>
                            </div>
                        </div>
                        <div className="e-card-content">
                            <p>Model: .........</p>
                            <p>Hper-Drive: .........</p>
                        </div>
                    </div>
                </div>
            </div>

            <ul>
                {/* {ship.map((ship) => (
                    <li key={ship.id}>
                        <Link to={`/ship/${ship.id}`}>
                            {ship.name}
                        </Link>
                    </li>
                ))} */}
            </ul>
        </div >
    );
}

export default Starships;