import { useState } from "react";

function Search(ships) {
    const [filterText, setFilterTExt] = useState('');

    const filtered = ships.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    });


    return (
        <div>
            <input placeholder="ship name or model" value={filterText} onchange={(e.target.value)} />

            <ul>
                {filtered.map((ship, i) => (
                    <li key={i}>{ship.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Search;