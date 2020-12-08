const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    abrir: () => true,
    fechar: () => false
  }
})

const { abrir, fechar } = slice.actions;
export default slice.reducer;