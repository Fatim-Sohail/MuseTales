import { combineReducers } from "redux";
import posts from './posts';
import auth from "./auth";
import auth_test from "./auth_t";

export default combineReducers({ posts, auth, auth_test });
