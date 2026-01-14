import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/SearchSlice";
import collectionReducer from "./features/collectionSlice";

export const store = configureStore({
    // Adding the search slice reducer to the Redux store
    reducer: {
        search: searchReducer,
        collection: collectionReducer
    },
});