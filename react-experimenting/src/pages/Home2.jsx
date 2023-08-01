// our task is to get the input from the search bar, and make an API request to see if it is an actual pokemon or not
// navigate to the link 
// generate search results
    // 
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "../index.css"
import axios from "axios";


export default function Home2 () {
    const [input, getInput] = useState("");
    const [fullList, getFullList] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const url = `https://pokeapi.co/api/v2/pokemon`;
    const [empty, setEmpty] = useState(false);
    useEffect(() => {
        console.log("testing ")
        async function getFullPokedex () {
            await axios.get(`${url}?limit=1282`
            ).then((response) => {
                getFullList(response.data.results)
            }).catch((error) => {
                console.log("error")
            })
        }
        getFullPokedex();
    }, [])

    function manageChange (event) {
        console.log(event.target.value);
        getInput(event.target.value);
        if (event.target.value.length) {
            setEmpty(false);
            setFilteredPokemon(fullList.filter((pokemon) => {
                for (let i = 0; i < event.target.value.length; i++) {
                    if (pokemon.name[i] !== event.target.value[i]) return false;
                }
                console.log(pokemon);
                return true;
            }))

        }
        
    }

    const navigate = useNavigate();
    
    async function search () {
        if (!input.length) setEmpty(true); 
        const link = `${url}/${input}`;
        await axios.get(link
            ).then((response)  => {
                navigate(`${input}`)
            }).catch((error) => {
                console.log(error);
                console.log("NAWWW ASDLSAKKDNLKASk🤤🤤🤤");
            })
        // await axios.get(`${url}/${manageChange}`)
    }

    return (
        <div className="container">
            <h1 className="text-3xl font-bold underline">Welcome to Pokedex!</h1>
            <div className="input__wrapper">
                <input 
                type="text" 
                className="searchBar"
                placeholder="Enter the Pokemon name"
                onChange={manageChange}
                />
                <button 
                onClick={search}
                >Search</button>
            </div>
            {empty && 
                <span>please enter an input</span>
            }
            {input.length !== 0 && 
                <ul>
                    {filteredPokemon.map((pokemon) => {
                        return (
                            <Link to={`./${pokemon.name}`}>
                                <li key={pokemon.name}>{pokemon.name}</li>
                            </Link>
                        )
                        
                    })}
                </ul>
            }
        </div>
    )
}