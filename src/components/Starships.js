import { useEffect, useState } from 'react'

function Starships() {

    const [ships, setShips] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://swapi.dev/api/starships/")
            .then((res) => res.json())
            //.then((data) => setShips(data))
            .then((data) => console.log(data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            <h1>Starships</h1>
            {isloading && <div>Loading...</div>}

            {/* {ships.map((ship) => (
                <div key={ship.id}>{ship.name}</div>
            ))} */}
        </div>
    );
}

export default Starships;