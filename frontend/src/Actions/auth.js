import * as api from "../Api/index.js";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        localStorage.setItem("Token", data["token"]);
        
        console.log("Actions", data);
        dispatch({ type: AUTH, data });
        console.log("token.......", dispatch);
        history('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        console.log("Signup: " );

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}