import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices";
import { pokemonApi } from "./api/pokemonApi";

export const PokemonApp = () => {
    
    const dispatch = useDispatch();   
    const { isLoading, pokemons = [], page = 0 } = useSelector( state => state.pokemons );
    const {baseUrl} = pokemonApi


    useEffect(() => {      
        dispatch( getPokemons() );     
    }, []);
    
  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading... { isLoading ? 'True' : 'False' }</span>
       <ul>
        {
          
          
          pokemons.map(pokemon => (
            <>
            <li key={pokemon.name}>{pokemon.name}</li>
            <img src={ pokemon.url } />
            </>

          ))
        }
        
       </ul>
       <button
       // disabled={isLoading}
        onClick={() => dispatch( getPokemons(page))}>
        Next
       </button>
    </>
  )
}
