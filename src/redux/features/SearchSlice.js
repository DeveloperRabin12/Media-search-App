import { createSlice } from "@reduxjs/toolkit";

// Redux slice for managing search-related state in the application
const searchSlice = createSlice({
    // Slice Name
    name: "search",
    // Initial State as in useState
    initialState: {
        query: "",
        activeTab:"photos",
        results:[],
        loading:false,
        error:null
    },

    // Reducers to handle actions and update state
    reducers: {
        // Action to update the search query string
        //state is current state, action is dispatched action from component
        // action.payload contains the new query string from the component to be set in the state in Redux store
        setQuery: (state, action) => {
            state.query = action.payload
        },
        // Action to set the currently active tab (e.g., 'photos', 'videos')
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        // Action to set search results and stop loading
        setResults: (state, action) => {
            state.results = action.payload
            state.loading = false
        },
        // Action to indicate that a search is in progress
        setLoading: (state, ) => {
            state.loading = true
            state.error = null
        },
        // Action to set an error message and stop loading
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        clearResults: (state) => {
            state.results = []
        }

    },})

    // Export the action creators for use in components
    export const { setQuery, setActiveTab, setResults, setLoading, setError , clearResults} = searchSlice.actions;
    // Export the reducer to be included in the Redux store
    export default searchSlice.reducer;