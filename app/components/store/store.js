import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../store/features/themeSlice'
import languageReducer from './features/language' 

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer, 
  },
})

export default store
