import { createSlice } from "@reduxjs/toolkit";


// Get initial state from localStorage

const initialState = {
    // If no items in localStorage, initialize with an empty array
    items:JSON.parse(localStorage.getItem("collection")) || []
}

const collectionSlice = createSlice({
    name: "collection",
    initialState: initialState,
    reducers: {
        addCollection: (state, action) => {
            // Check if item already exists in the collection
           const alreadyExists = state.items.find(item => item.id === action.payload.id)
            // If it doesn't exist, add it to the collection
           if (!alreadyExists) {
               state.items.push(action.payload);
               localStorage.setItem("collection", JSON.stringify(state.items));
           }
        },
        removeCollection: (state, action) => {
            // Remove item from collection by filtering out the item with the given id
            console.log('removed')
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem("collection", JSON.stringify(state.items));

        },
        clearCollection: (state) => {
            // Clear the entire collection
            state.items = [];
            localStorage.removeItem("collection");

        }

    }
})

export const { addCollection, removeCollection, clearCollection } = collectionSlice.actions;


export default collectionSlice.reducer