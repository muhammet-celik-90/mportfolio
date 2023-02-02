import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'TR',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    tr: (state) => {
      state.value = 'TR'
    },
    en: (state) => {
      state.value = 'EN'
    },
  },
})

// Action creators are generated for each case reducer function
export const { tr, en } = languageSlice.actions

export default languageSlice.reducer