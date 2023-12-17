import axios from "axios";
import { CredentialsModel, UserModel } from "../Models/UserModel";
import { store } from "../GlobalState/Store";
import { login, logout, signup } from "../GlobalState/AuthSlice";

const signup_url = "http://localhost:3030/api/register/";
const login_url = "http://localhost:3030/api/login/";

class AuthService {

    static async signUp(user: UserModel) {
        const token = (await axios.post<string>(signup_url, user)).data;
        store.dispatch(signup(token));
    }

    static async logIn(user: CredentialsModel) {
        const token = (await axios.post<string>(login_url, user)).data;
        store.dispatch(login(token));
    }

    static logOut() {
        store.dispatch(logout());
    }
}

export default AuthService;