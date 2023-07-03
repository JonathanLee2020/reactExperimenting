import axios from "axios";
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom";

function PokemonInfo () {
    let { id }  = useParams();
    console.log(`id is ${id}`)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    console.log(`url is ${url}`)
    useEffect(() => {
        axios.get(url).then((success) => console.log(success))

    }, [])
  
    return (
        <div>
            here lies a mon
        </div>
    )
}

export default PokemonInfo