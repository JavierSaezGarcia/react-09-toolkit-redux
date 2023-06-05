import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slices";

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {      
        dispatch(getPokemons());     
    }, [])
    
  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
       <ul>
        <li>Line</li>
        <li>Line</li>
        <li>Line</li>
       </ul>
    </>
  )
}
