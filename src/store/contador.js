import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'contador',
  initialState: {
    total: 10
  },
  reducers: {
    incrementar(state) {
      state.total = state.total + 10;
    },
    reduzir(state){
      state.total = state.total - 10;
    }
  }
})

export const {incrementar, reduzir} = slice.actions;
export default slice.reducer;