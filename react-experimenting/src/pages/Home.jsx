import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../index.css"
import axios from "axios";
import Loading from "./Loading";

function Home () {
    const [input, setInput] = useState("");
    function handleChange(event) {
        setInput(event.target.value)
        console.log(`input is now ${input}`)
    }

    const navigate = useNavigate();
    const url = `https://pokeapi.co/api/v2/pokemon/`

    async function getData() {
        try {
            const response = await axios.get(`${url}${input}`)
            if (input.trim() !== "");
            navigate(`/${input}`)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container">
            <h1 className="text-3xl font-bold underline">Welcome to Pokedex!</h1>
            <div className="input__wrapper">
                <input 
                type="text" 
                className="searchBar"
                placeholder="Enter the Pokemon name or dex number"
                onChange={handleChange}
                />
                <button onClick={getData}>Search</button>
            </div>
            
        </div>
    )
}

export default Home;


