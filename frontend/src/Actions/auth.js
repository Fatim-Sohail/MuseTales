import * as api from "../Api/index.js";
import {AUTH, FETCH_ALL, UPDATE_PROFILE} from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    localStorage.setItem("Token", data["token"]);
    localStorage.setItem('profile', JSON.stringify(data ));

    console.log("Actions", data);
    history("/posts");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch(data);
    console.log("Signup: ");

    history.push("/posts");
  } catch (error) {
    console.log(error);
  }
};


export const updateProfile = (formData) => async (dispatch) => {
  console.log("formdata: " , formData);//
  try {
    const { data } = await api.updateProfile(formData); 
    console.log("dataaa", data);

    dispatch( {type: UPDATE_PROFILE, payload: data});

    console.log("Profile updated:", data);
  } catch (error) {
    console.log(error);
  }
};
