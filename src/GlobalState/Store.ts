import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import newsReducer from "./NewsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
