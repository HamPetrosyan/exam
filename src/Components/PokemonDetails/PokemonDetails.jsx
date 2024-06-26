import { useEffect, useState } from "react";

const PokemonDetails = ({ pokemonUrl, fetchPokemonDetails }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      if (!pokemonDetails) {
        const data = await fetchPokemonDetails({ url: pokemonUrl });
        setPokemonDetails(data);
        console.log(data);
      }
    };
    loadPokemonDetails();
  }, []);

  return (
    <div className="pokemon-details">
      {pokemonDetails && (
        <>
          <img
            src={pokemonDetails.sprites.other.dream_world.front_default}
            alt="Pokemon"
          />
          <div>
            <h2>Stats</h2>
            <ul>
              {pokemonDetails.stats.map((stats, index) => (
                <li key={index}>
                  {stats.stat.name}: {stats.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Types</h2>
            <ul>
              {pokemonDetails.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetails;
