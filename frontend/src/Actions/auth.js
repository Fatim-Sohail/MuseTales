import * as api from "../Api/index.js";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log("Sign in data ", data["token"]);
        localStorage.setItem("Token", data["token"]);
        dispatch({ type: AUTH, data });
        history('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}