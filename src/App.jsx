import React, { useEffect, useState } from "react";
import { Accordion } from "./Components/Accordion";
import { PokemonDetails } from "./Components/PokemonDetails";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          throw new Error("Response was not ok.");
        } else {
          const data = await response.json();
          setPokemons(data.results);
        }
      } catch (error) {
        console.error("Fetching pokemons error:", error);
      }
    };

    fetchPokemons();
  }, []);

  const fetchPokemonDetails = async (pokemon) => {
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
  };

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      {pokemons.map((pokemon, index) => (
        <Accordion key={index} title={pokemon.name}>
          <PokemonDetails
            pokemonUrl={pokemon.url}
            fetchPokemonDetails={fetchPokemonDetails}
          />
        </Accordion>
      ))}
    </div>
  );
};

export default App;
