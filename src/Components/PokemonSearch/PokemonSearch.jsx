import React from "react";
import { Accordion } from "../Accordion";
import { PokemonDetails } from "../PokemonDetails";

const PokemonSearch = ({ pokemons, fetchPokemonDetails, searchQuery }) => {
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {filteredPokemons.map((pokemon, index) => (
        <Accordion key={index} title={pokemon.name}>
          <PokemonDetails
            pokemonUrl={pokemon.url}
            fetchPokemonDetails={fetchPokemonDetails}
          />
        </Accordion>
      ))}
    </>
  );
};

export default PokemonSearch;
