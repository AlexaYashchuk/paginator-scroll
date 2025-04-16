import { configureStore } from "@reduxjs/toolkit";
import getPokemonsReducer from "./getPokemonsSlice";

const store = configureStore({
  reducer: {
    getPokemons: getPokemonsReducer,
  },
});

export { store };
