import { createSlice } from "@reduxjs/toolkit";

const initialState={
    dark:false
}

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme(state,action){
            state.dark=action.payload
        }
    }
    })

export const {changeTheme}=themeSlice.actions
export default themeSlice.reducer;
