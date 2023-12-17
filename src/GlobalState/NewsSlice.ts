import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NewModel } from "../Models/NewModel";



interface NewsSlice {
    news: NewModel[];
}

const initialState: NewsSlice = {
    news: [],
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        getNews: (state, action: PayloadAction<NewModel[]>) => {
            state.news = action.payload;
        }
    }
});

export const {getNews} = newsSlice.actions;
export default newsSlice.reducer;