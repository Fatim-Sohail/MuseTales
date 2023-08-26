import * as api from "../Api/index.js";
import {AUTH, FETCH_ALL} from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    localStorage.setItem("Token", data["token"]);
    localStorage.setItem('profile', JSON.stringify(data ));

    console.log("Actions", data);
    // dispatch(data);
    // console.log("token.......", dispatch);
    history("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch(data);
    console.log("Signup: ");

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
