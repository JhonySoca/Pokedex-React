
import { useParams } from "react-router-dom"
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonDetail } from "../../components/PokemonDetail";

export const PokeDetail = () => {

const{pokeId}=useParams();
const {pokemon}= usePokemon("", pokeId);
//console.log(pokemon)

  return <PokemonDetail pokemon={pokemon!}/>
}


