// If we are importing more than one thing from the same library or component we can include them in the same {} separated by a comma

import { useState, useEffect } from 'react'
import './App.css'

import Button from '@mui/material/Button';


// we import the "ListOfPokemon" component from the "ListOfPokemon.jsx" file so that we can use the component here.
// we will be using it in the "App" components "return" at the bottom.
import ListOfPokemon from './components/ListOfPokemon'





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


// see the components folder and "ListOfPokemon" file for more info on passing the "ListOfPokemon" component to the "App" component in this file which is how we render the names on the page

  return (
    <div>
      <ListOfPokemon pokemons={pokemons} />
    </div>
  );
}

export default App
