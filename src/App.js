import { useState } from "react";
import AddPokemon from "./components/AddPokemon.jsx";
import PokemonsContainer from "./components/PokemonsContainer.jsx";
import pokemones from "./pokemones.js";

const App = () => {

  const [pokemonsData, setPokemonsData] = useState(pokemones)

  return (
    <div>
      <AddPokemon pokemonsData={pokemonsData} setPokemonsData={setPokemonsData} />
      <PokemonsContainer pokemones={pokemonsData} setPokemonsData={setPokemonsData} />
    </div>
  )
}

export default App;
