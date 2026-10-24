import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: "theme",

    // When the app starts, get the saved theme from localStorage.
    // If no theme is saved, use "dark" as the default theme.
    initialState: {
        mode: localStorage.getItem("theme") || "dark"
    },

    reducers: {
        // This function runs when we want to switch the theme.
        themeToggle: (state) => {

            // If the current theme is dark, change it to light.
            // Otherwise, change it to dark.
            state.mode = state.mode === "dark" ? "light" : "dark"

            // Save the selected theme in the browser.
            // This helps keep the same theme after refreshing the page.
            localStorage.setItem("theme", state.mode)
        }
    }
})

// Export the action so components can dispatch it to change the theme.
export const { themeToggle } = themeSlice.actions

// Export the reducer so the Redux store can manage the theme state.
export default themeSlice.reducer