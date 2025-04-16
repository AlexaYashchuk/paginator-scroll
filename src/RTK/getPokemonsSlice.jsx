import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0_"
  );
  return response;
};

export const asyncGetPokemons = createAsyncThunk(
  "pokemons/asyncGetPokemons",
  async () => {
    const { data } = await getPokemons();
    return data;
  }
);

const getPokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncGetPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncGetPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
      })
      .addCase(asyncGetPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getPokemonsSlice.reducer;
