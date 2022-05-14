import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    setPuan: (state, action) => {
        const user = state.users.find(user => user.id === action.payload);
        user.puan += 1;
        state.users.sort((a, b) => b.puan - a.puan);
    }
  },
})

export const { setUser, setPuan } = userSlice.actions;

export default userSlice.reducer;