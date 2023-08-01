import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "../index.css"
import axios from "axios";
import Loading from "./Loading";

function Home () {
    
    const [input, setInput] = useState("");
    const [valid, setValid] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const url = `https://pokeapi.co/api/v2/pokemon/`
    
    useEffect(() => {
        async function fetchPokemonList() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`);
                setPokemonList(response.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPokemonList();
    }, []);

    console.log(pokemonList)
    
    function handleChange(event) {
        const toSearch = event.target.value.toLowerCase();
        setInput(toSearch);
        setFilteredPokemonList(pokemonList.filter((pokemon) => {
            return pokemon.name.includes(toSearch)}
        ));
    }

    const navigate = useNavigate();

    async function getData() {
        try {
            if (input.trim() !== "");
            setValid(true);
            navigate(`/${input}`)
        } catch (error) {
            console.log(error);
            setValid(false);
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
            {!valid &&
                <div className="error">Please enter a valid input</div>
            }
            <ul>
                {filteredPokemonList.map(pokemon => (
                    <Link to={`/${pokemon.name}`}>
                        <li key={pokemon.name}>{pokemon.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Home;

