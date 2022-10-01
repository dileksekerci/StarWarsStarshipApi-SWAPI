import React, { useState, useEffect } from "react";
import Starships from './Starships';
import axios from 'axios';

import './style.css'

function Searcher() {
    const shipsCountForLoad = 5;//how many ship card load for every loadmore click

    const [starships, setStarships] = useState('');//hooks for api response
    const [isLoading, setIsLoading] = useState(false);//flag for loading data situation
    const [loaded, setLoaded] = useState(shipsCountForLoad);//how many shipCard loaded (for listing)
    const [filteredData, setFilteredData] = useState([]);//which ships founded
    const [wordEntered, setWordEntered] = useState("");//search box value


    useEffect(() => {//getting data from swapi with all pages using promise
        const getData = async () => {
            try {
                setIsLoading(true);
                const res = await Promise.all([
                    axios.get("https://swapi.dev/api/starships/?page=1"),
                    axios.get("https://swapi.dev/api/starships/?page=2"),
                    axios.get("https://swapi.dev/api/starships/?page=3"),
                    axios.get("https://swapi.dev/api/starships/?page=4")
                ]);
                const data = res.map((res) => res.data.results); //assign api results to data variable **results  mean just ships datas
                setStarships(data.flat());
            } catch {
                throw Error("Promise failed");//if api fetching error
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);


    let starshipCardList = Array.from(starships);//convert array to api result data
    starshipCardList = starshipCardList.map((ship, id) => //map result array like starshipcard
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


    const load = () => { //loadMore button event
        setLoaded(loaded + shipsCountForLoad);
    };

    const handleFilter = (event) => { //this handler for is searhbox onChange
        const searchWord = event.target.value;
        setWordEntered(searchWord);

        const newFilter = starships.filter(ship => //search in starships
            ship.name.toLowerCase().includes(searchWord.toLowerCase()) || //by name
            ship.model.toLowerCase().includes(searchWord.toLowerCase())  // by model
        );

        if (searchWord === "") {//is searchword empty
            setFilteredData([]);    //if empty clear filteredData
        } else {
            setFilteredData(newFilter); //if not set filtered data to hook
        }
    };


    if (filteredData.length === 0) {//if searchbox is empty
        return (
            <div>
                <div className="search">
                    <div className="searchInputs">
                        <input placeholder="Name or Model"
                            type="text"
                            name="search"
                            className="writing-box"
                            autoComplete='off'
                            onChange={handleFilter}
                            value={wordEntered} />
                    </div>
                </div>
                <div>
                    {isLoading ? 'Loading...' : ''}
                    {starshipCardList.slice(0, loaded)} {/*show initial starships for first load*/}
                    {loaded < starshipCardList.length ?
                        <button onClick={load} className="btn btn-outline-secondary my-3">
                            {isLoading ? 'Loading...' : 'Load More'}
                        </button> :
                        " "
                    }{/*slice starshipcard array every load more button clicks*/}
                </div >

            </div>

        );

    } else { //if searchbox is not empty
        return (
            <div>
                <div className="search">
                    <div className="searchInputs">
                        <input placeholder="Name or Model"
                            type="text"
                            name="search"
                            className="writing-box"
                            autoComplete='off'
                            onChange={handleFilter}
                            value={wordEntered} />
                    </div>
                </div>

                <div>
                    {filteredData.slice(0, 36).map((ship, key) => {
                        {/*show starshipcards only filtered data*/ }
                        return (
                            <div>
                                <Starships
                                    id={key}
                                    shipId={ship.name}
                                    name={ship.name}
                                    model={ship.model}
                                    hyperdrive_rating={ship.hyperdrive_rating}
                                    passengers={ship.passengers}
                                    max_atmosphering_speed={ship.max_atmosphering_speed}
                                    manufacturer={ship.manufacturer}
                                    crew={ship.crew}
                                    cargo_capacity={ship.cargo_capacity}
                                />
                            </div>
                        );
                    })}
                </div>


            </div>

        );
    }



}

export default Searcher;