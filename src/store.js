import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './features/LangSlice'
import headerShowReducer from './features/HeaderShowSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    headerShow: headerShowReducer,
  },
})