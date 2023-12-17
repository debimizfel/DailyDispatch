import { UserModel } from "../Models/UserModel";
import jwtDecode from "jwt-decode";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";




interface AuthSlice {
    token: string | null;
    user: UserModel | null;
}

const token = localStorage.getItem("token");

const initialState: AuthSlice = {
    token,
    user: token ? (jwtDecode(token) as { user: UserModel }).user : null,
}

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        signup: (state, action: PayloadAction<string>) => {

            const container: { user: UserModel } = jwtDecode(action.payload);
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
            state.user = container.user;

        },

        login: (state, action: PayloadAction<string>) => {
            const container: { user: UserModel } = jwtDecode(action.payload);
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
            state.user = container.user;
        },

        logout: (state) => {
            localStorage.removeItem("token");
            state.token = null;
            state.user = null;
        }
    }
});

export const {signup, login, logout} = authSlice.actions;
export default authSlice.reducer;

