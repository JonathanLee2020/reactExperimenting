// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"
// import "../index.css"
// import axios from "axios";
// import Loading from "./Loading";

// function Home () {
    
//     const [input, setInput] = useState("");
//     let [valid, isValid] = useState(true);
//     function handleChange(event) {
//         const toSearch = event.target.value.toLowerCase();
//         // console.log(`toSearch is ${toSearch}`)
//         setInput(toSearch)
//         // console.log(`input is now ${input}`)
//     }

//     const navigate = useNavigate();
    // const url = `https://pokeapi.co/api/v2/pokemon/`

//     async function getData() {
//         try {
//             const response = await axios.get(`${url}${input}`)
//             if (input.trim() !== "");
//             isValid(true);
//             navigate(`/${input}`)
//         } catch (error) {
//             console.log(error);
//             isValid(false);
//         }
//     }


//     return (
//         <div className="container">
//             <h1 className="text-3xl font-bold underline">Welcome to Pokedex!</h1>
//             <div className="input__wrapper">
//                 <input 
//                 type="text" 
//                 className="searchBar"
//                 placeholder="Enter the Pokemon name or dex number"
//                 onChange={handleChange}
//                 />
//                 <button onClick={getData}>Search</button>
//             </div>
//             {valid !== true ?
//                 <div className="error">Please enter a valid input</div>  : 
//                 <></>
//             }
//         </div>
//     )
// }

// export default Home;



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
    
    // function handleChange(event) {
    //     const toSearch = event.target.value.toLowerCase();
    //     setInput(toSearch);
    //     setFilteredPokemonList(pokemonList.filter((pokemon) => pokemon.name.includes(toSearch)));
    // }
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

