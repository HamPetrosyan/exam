import React from "react";
import { Accordion } from "../Accordion";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <h3>{pokemon.name}</h3>
      <Accordion />
    </div>
  );
};

export default Pokemon;
