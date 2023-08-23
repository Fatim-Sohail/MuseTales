// import { applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import posts from "../Reducers/posts";

const middleware = [thunk];

export const store = configureStore({
  reducer: {
    posts
  },
  middleware: middleware
});