import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const headerShowSlice = createSlice({
  name: 'headerShow',
  initialState,
  reducers: {
    toggle: (state,action) => {
      state.value = !state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = headerShowSlice.actions

export default headerShowSlice.reducer