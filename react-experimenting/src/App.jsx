import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonInfo from './pages/PokemonInfo';
import Home from './pages/Home';
import BigData from './pages/BigData';
import Home2 from './pages/Home2';

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon"
  // console.log("BIG REVEALLLLL")
  // const bigData = BigData();
  // console.log(bigData)
  // useEffect(() => {
  //   axios.get(url).then((success) => console.log(success))
  // }, [])
  return(
    <Router>
    <div>
        <Routes>
          <Route path="/" element={<Home2/>}></Route>
          <Route path="/:id" element={<PokemonInfo/>}></Route>
        </Routes>
    </div>
  </Router>
  )
}


export default App;

