import { configureStore } from "@reduxjs/toolkit";
import { changeTheme } from "./features/Theme";

export const store = configureStore({
    reducer: {
        theme: changeTheme.reducer
        }
        }
        );
        