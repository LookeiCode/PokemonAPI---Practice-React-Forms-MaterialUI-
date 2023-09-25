import { useState, useEffect } from 'react'
import './App.css'

function App() {

// the state of our pokemon - where all of our pokemon are stored + updated (added/removed)
// "pokemons" calls the current state, "setPokemon" updates the state (adds/removes) - which means it changes      "pokemons"

  const [pokemons, setPokemons] = useState([]);

// useEffect triggers once when the page loads
// we put our fetch in useEffect since we only want to call our API once
// fetch gets our API from the endpoint (the link/URL)

  useEffect(() => {

// since we are using await/fetch we need to make the function an "async" function (asynchronous)
    const getPokemon = async () => {

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
        const data = await response.json();

// we set the state of "pokemons" to the "data.results" in the JSON because "data.results" contains all the pokemon so now our "pokemons" state has the list of all the Pokemon names in it.

        setPokemons(data.results);

      } catch (error) {
        console.log(error);
      }
    };

// we call our getPokemon function - otherwise the code won't run and our API won't get fetched - then our state won't update and have the pokemon names in it, thus the page won't display anything (see the "return" section below)

    getPokemon();
  }, [])

  return (
    <>
      {pokemons.map(pokemon => (
        <h1 key={pokemon.name}>{pokemon.name}</h1>
      ))}
    </>
  );
}

export default App
