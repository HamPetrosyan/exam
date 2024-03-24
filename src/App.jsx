import React, { useEffect, useState } from "react";
import { Accordion } from "./Components/Accordion";

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

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      {pokemons.map((pokemon, index) => (
        <Accordion />
      ))}
    </div>
  );
};

export default App;
