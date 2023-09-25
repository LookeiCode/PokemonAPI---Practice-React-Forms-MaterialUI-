import React from 'react';

// imports for the "card" materialUI code that we will need to create cards in our component
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// we created a component below that holds all the names of the pokemon

// we got the names in this component because we are using "pokemons" which we already declared is all the names of the pokemon in the "App" component that we fetched from the API (look at the useEffect in the App component)

// we passed in a prop named "props" then simply added "props" before/on to the map. We do this to export it to inside of another component called "App" in the App.jsx so that we can use it in the App components "return" and render the names on the page since App is the component that renders the API because it has the onEffect with the fetch data.

// TIP: the "props.pokemons.map((pokemon)" must be on the same line as the "return" otherwise it won't display (idk why)


const ListOfPokemon = (props) => {
    return props.pokemons.map((pokemon) => {

        // it takes a second return, idk why. Just copy and paste from the materialUI website.
        // study it to understand what does what to make your own cards in the future.
            return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    });
};



// make sure you "export default" the component like below so we can import it where we need it
export default ListOfPokemon;




// FOOD FOR THOUGHT + EXTRA THOUGHTS
// (components organize code - and we just piece/connect them all together to create something)

// can't make comments inside of materialUI code - idk why.