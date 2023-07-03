import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonInfo from './pages/PokemonInfo';
import Home from './pages/Home';

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon"
  useEffect(() => {
    axios.get(url).then((success) => console.log(success))
  }, [])
  
  return(
    <Router>
    <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:id" element={<PokemonInfo/>}></Route>
        </Routes>
    </div>
  </Router>
   
  )
}

export default App;
