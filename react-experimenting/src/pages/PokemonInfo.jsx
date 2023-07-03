import axios from "axios";
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function PokemonInfo () {
    let { id }  = useParams();
    console.log(`id is ${id}`)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    console.log(`url is ${url}, is is ${id}`)
    const navigate = useNavigate();
    function goHome () {
        navigate("/")
    }
  
    return (
        <div className="container">
            <h1>here lies a {id}</h1>
            <button onClick={goHome}>Home</button>
        </div>
    )
}

export default PokemonInfo