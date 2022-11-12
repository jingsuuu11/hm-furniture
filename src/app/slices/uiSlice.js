import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "light",
        RoomMenuOpen: false,
        ProductMenuOpen: false
    },
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";            
        },
        RoomMenuToggle(state){
            state.RoomMenuOpen = !state.RoomMenuOpen;
        },
        RoomMenuClose(state) {
            state.RoomMenuOpen = false;
        },
        ProductMenuToggle(state) {
            state.ProductMenuOpen = !state.ProductMenuOpen;
        },
        ProductMenuClose(state) {
            state.ProductMenuOpen = false;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;