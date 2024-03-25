import { useCallback, useEffect, useState } from "react";
import { PokemonSearch } from "./Components/PokemonSearch";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFirst20Pokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          throw new Error("Response was not ok.");
        } else {
          const data = await response.json();
          console.log(data);
          setPokemons(data.results);
        }
      } catch (error) {
        console.error("Fetching pokemons error:", error);
      }
    };
    fetchFirst20Pokemons();
  }, []);

  const fetchPokemonDetails = useCallback(async (pokemon) => {
    console.log(pokemon);
    try {
      const response = await fetch(pokemon.url);
      if (!response.ok) {
        throw new Error("Response was not ok.");
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Fetching pokemon details error:", error);
    }
  }, []);

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <PokemonSearch
        pokemons={pokemons}
        fetchPokemonDetails={fetchPokemonDetails}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
