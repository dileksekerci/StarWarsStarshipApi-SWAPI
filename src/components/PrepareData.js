import React, { useEffect, useState } from 'react'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import Starships from './Starships';
import Search from './Search';


function PrepareData(props) {
    const shipsCountForLoad = 5;//how many ship card load for every loadmore click

    const [starships, setStarships] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loaded, setLoaded] = useState(shipsCountForLoad);
    const [isSearching, SetIsSearching] = useState(false);
    const [criteria, SetCriteria] = useState('');

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


    }, []);

    // if (typeof (props) != 'object') {
    //     if (props != criteria) {
    //         SetCriteria(props);
    //         console.log(criteria);
    //     } else {

    //     }

    // }

    let starshipCardList = Array.from(starships);
    starshipCardList = starshipCardList.map((ship, id) =>
        <Starships
            key={id}
            shipId={id}
            name={ship.name}
            model={ship.model}
            hyperdrive_rating={ship.hyperdrive_rating}
            passengers={ship.passengers}
            max_atmosphering_speed={ship.max_atmosphering_speed}
            manufacturer={ship.manufacturer}
            crew={ship.crew}
            cargo_capacity={ship.cargo_capacity}
        />
    );


    const load = () => {
        setLoaded(loaded + shipsCountForLoad);

    };


    return (
        <div>
            {isLoading ? 'Loading...' : ''}
            {/* {isSearching ?
                props : 
            } */}

            {starshipCardList.slice(0, loaded)}
            {loaded < starshipCardList.length ?
                <button onClick={load} className="btn btn-outline-secondary mt-2">
                    {isLoading ? 'Loading...' : 'Load More'}
                </button> :
                ""
            }
        </div>
    );
}

export default PrepareData;