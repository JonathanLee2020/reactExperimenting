import { useEffect, useRef } from "react";

function Home () {
    
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold underline">Welcome to Pokedex!</h1>
            <h2>test</h2>
            <h4>fds</h4>
            <div className="input w-1/2 flex-row items-center justify-center">
                <input 
                type="text" 
                className="pokemon h-100 px-4 py-2 text-lg border-2 border-black" 
                style={{width: "100%"}}
                placeholder="Enter the Pokemon you want to see or it's dex number"/>
                <button>Search</button>
            </div>
            

        </div>
    )
}

export default Home;

