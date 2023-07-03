import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../index.css"

function Home () {
    const [input, setInput] = useState("");
    function handleChange(event) {
        setInput(event.target.value)
        console.log(`input is now ${input}`)
    }

    const navigate = useNavigate();

    function search () {
        if (input.trim() !== "");
        navigate(`/${input}`)

    }
    return (
        <div className="home__container">
            <h1 className="text-3xl font-bold underline">Welcome to Pokedex!</h1>
            <div className="input__wrapper">
                <input 
                type="text" 
                className="searchBar"
                placeholder="Enter the Pokemon name or dex number"
                onChange={handleChange}
                />
                <button onClick={search}>Search</button>
            </div>
        </div>
    )
}

export default Home;

