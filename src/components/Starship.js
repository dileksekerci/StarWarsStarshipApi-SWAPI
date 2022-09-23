import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

function Starship() {

    const [loading, setLoading] = useState(true);
    const [ship, setShip] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`https://swapi.dev/api/starships/${id}`)
            .then((res) => setShip(res.data))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div>
            <h1>Ship Details</h1>
            {loading && <div>Loading</div>}
            {!loading && <code>{JSON.stringify(user)}</code>}
        </div>
    )
}

export default Starship;