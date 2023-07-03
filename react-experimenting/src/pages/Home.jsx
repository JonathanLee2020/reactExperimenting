import { useEffect } from "react";
import "../index.css"

function Home () {
    
    return (
        <div className="home__container">
            <h1 className="text-3xl font-bold underline">Welcome to Pokedex!</h1>
            <div className="input__wrapper">
                <input 
                type="text" 
                className="searchBar"
                placeholder="Enter the Pokemon name or dex number"/>
                <button>Search</button>
            </div>
            

        </div>
    )
}

export default Home;

