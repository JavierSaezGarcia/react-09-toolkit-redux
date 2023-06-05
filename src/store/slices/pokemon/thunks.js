import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = ( page = 0) => {
    return async( dispatch, getState) => {
        await dispatch(startLoadingPokemons());

        //TODO realizar peticion http
        // data-pokemons 

        // dispatch(setPokemons());
    }
}